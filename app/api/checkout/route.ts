// app/api/checkout/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, quantity } = body;

    // Product catalog - Single Packs + Bundles
    const products: Record<string, any> = {
      // Single Packs
      'sprats-200g': {
        name: 'Headless Sprats Fillet - 200g',
        price: 800, // $8.00
        description: 'Premium quality headless sprats, cleaned and ready to cook',
        weight: 200,
      },
      'sprats-500g': {
        name: 'Headless Sprats Fillet - 500g',
        price: 2000, // $20.00
        description: 'Premium quality headless sprats, cleaned and ready to cook',
        weight: 500,
      },
      'sprats-1kg': {
        name: 'Headless Sprats Fillet - 1kg',
        price: 4000, // $40.00
        description: 'Premium quality headless sprats, cleaned and ready to cook',
        weight: 1000,
      },
      
      // Bundle Deals
      'bundle-3x200g': {
        name: 'Bundle Deal - 3 × 200g Packs (600g total)',
        price: 2200, // $22.00 (save $2)
        description: 'Three 200g packs - Save $2!',
        weight: 600,
      },
      'bundle-2x500g': {
        name: 'Bundle Deal - 2 × 500g Packs (1kg total)',
        price: 3500, // $35.00 (save $5)
        description: 'Two 500g packs - Save $5!',
        weight: 1000,
      },
      'bundle-5x200g': {
        name: 'Bundle Deal - 5 × 200g Packs (1kg total)',
        price: 3500, // $35.00 (save $5)
        description: 'Five 200g packs - Best value! Save $5',
        weight: 1000,
      },
      'bundle-2x1kg': {
        name: 'Family Pack - 2 × 1kg (2kg total)',
        price: 7000, // $70.00 (save $10)
        description: 'Two 1kg packs - Save $10!',
        weight: 2000,
      },
    };

    const product = products[productId];

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Calculate total weight
    const totalWeight = product.weight * quantity;
    
    // Determine shipping cost
    // Free delivery for orders up to 1kg
    const shippingCost = totalWeight <= 1000 ? 0 : 1000; // $10 if over 1kg

    const lineItems = [
      {
        price_data: {
          currency: 'aud',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.price,
        },
        quantity: quantity,
      },
    ];

    // Add shipping if applicable
    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: 'aud',
          product_data: {
            name: 'Shipping (Orders over 1kg)',
            description: 'Delivery across Perth metro area',
          },
          unit_amount: shippingCost,
        },
        quantity: 1,
      });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}?canceled=true`,
      
      // Collect shipping address
      shipping_address_collection: {
        allowed_countries: ['AU'],
      },
      
      // Collect phone number
      phone_number_collection: {
        enabled: true,
      },
      
      // Collect customer email
      customer_creation: 'always',
      
      // Custom message
      custom_text: {
        shipping_address: {
          message: totalWeight <= 1000 
            ? '🎉 FREE delivery within 20km of Perth CBD! We\'ll contact you to confirm delivery details.' 
            : 'Delivery available across Perth metro area for $10.',
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}