// app/page.tsx
import { BuyButton } from '@/components/buy-button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-blue-600">
            Yalla Machan! 🐟
          </h1>
          <p className="text-gray-600">Premium Sri Lankan Seafood</p>
        </div>
      </header>

      {/* Product */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-1/2 bg-gray-100">
              <div className="h-96 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🐟</div>
                  <p className="text-gray-500 text-sm">
                    Add your product photo to:
                    <br />
                    <code className="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block">
                      /public/images/sprats.jpg
                    </code>
                  </p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="md:w-1/2 p-8">
              <div className="mb-2">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  In Stock
                </span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">
                  🚚 FREE Delivery Available
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Headless Sprats Fillet
              </h2>

              <p className="text-gray-600 mb-6">
                Premium quality headless sprats, cleaned and ready to cook. 
                Perfect for frying, curries, and traditional Sri Lankan dishes.
              </p>

              {/* Single Packs */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-lg">Single Packs:</h3>
                <div className="space-y-3">
                  <div className="border-2 border-gray-300 rounded-lg p-4 hover:border-blue-400 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg">200g Pack</span>
                      <span className="text-2xl font-bold text-blue-600">$8.00</span>
                    </div>
                    <BuyButton productId="sprats-200g" size="200g" price={8.00} />
                  </div>

                  <div className="border-2 border-gray-300 rounded-lg p-4 hover:border-blue-400 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg">500g Pack</span>
                      <span className="text-2xl font-bold text-blue-600">$20.00</span>
                    </div>
                    <BuyButton productId="sprats-500g" size="500g" price={20.00} />
                  </div>

                  <div className="border-2 border-gray-300 rounded-lg p-4 hover:border-blue-400 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg">1kg Pack</span>
                      <span className="text-2xl font-bold text-blue-600">$40.00</span>
                    </div>
                    <BuyButton productId="sprats-1kg" size="1kg" price={40.00} />
                  </div>
                </div>
              </div>

              {/* Bundle Deals */}
              <div className="mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-t-lg">
                  <h3 className="font-bold text-lg flex items-center">
                    🔥 BUNDLE DEALS - SAVE MORE!
                  </h3>
                </div>
                <div className="space-y-3 mt-3">
                  {/* Bundle 1: 3x 200g */}
                  <div className="border-2 border-orange-400 rounded-lg p-4 bg-orange-50 relative">
                    <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      SAVE $2
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-bold text-lg">3 × 200g Bundle</span>
                          <p className="text-xs text-gray-600 mt-1">Total: 600g</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 line-through">$24.00</div>
                          <div className="text-2xl font-bold text-orange-600">$22.00</div>
                        </div>
                      </div>
                    </div>
                    <BuyButton productId="bundle-3x200g" size="3 × 200g" price={22.00} />
                  </div>

                  {/* Bundle 2: 2x 500g */}
                  <div className="border-2 border-orange-400 rounded-lg p-4 bg-orange-50 relative">
                    <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      SAVE $5
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-bold text-lg">2 × 500g Bundle</span>
                          <p className="text-xs text-gray-600 mt-1">Total: 1kg</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 line-through">$40.00</div>
                          <div className="text-2xl font-bold text-orange-600">$35.00</div>
                        </div>
                      </div>
                    </div>
                    <BuyButton productId="bundle-2x500g" size="2 × 500g" price={35.00} />
                  </div>

                  {/* Bundle 3: 5x 200g */}
                  <div className="border-2 border-orange-500 rounded-lg p-4 bg-gradient-to-r from-orange-100 to-red-100 relative">
                    <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      BEST VALUE - SAVE $5
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-bold text-lg">5 × 200g Bundle</span>
                          <p className="text-xs text-gray-600 mt-1">Total: 1kg - Perfect for families!</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 line-through">$40.00</div>
                          <div className="text-2xl font-bold text-red-600">$35.00</div>
                        </div>
                      </div>
                    </div>
                    <BuyButton productId="bundle-5x200g" size="5 × 200g" price={35.00} />
                  </div>

                  {/* Bundle 4: Family Pack */}
                  <div className="border-2 border-purple-500 rounded-lg p-4 bg-gradient-to-r from-purple-100 to-pink-100 relative">
                    <div className="absolute -top-3 -right-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      SAVE $10
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-bold text-lg">Family Pack (2kg)</span>
                          <p className="text-xs text-gray-600 mt-1">2 × 1kg packs</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 line-through">$80.00</div>
                          <div className="text-2xl font-bold text-purple-600">$70.00</div>
                        </div>
                      </div>
                    </div>
                    <BuyButton productId="bundle-2x1kg" size="2kg Family Pack" price={70.00} />
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <p className="text-sm text-green-800 font-semibold mb-2">
                  🎉 FREE DELIVERY within 20km of Perth CBD!
                </p>
                <p className="text-xs text-green-700">
                  Available for orders up to 1kg. Delivery within 1-2 business days.
                </p>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Orders over 1kg?</strong> Only $10 flat shipping fee. 
                  We deliver across Perth metro area.
                </p>
              </div>

              {/* Product Details */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Product Details:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Premium headless sprats fillet</li>
                  <li>✓ Cleaned and ready to cook</li>
                  <li>✓ Wild-caught from Sri Lankan waters</li>
                  <li>✓ Frozen to preserve freshness</li>
                  <li>✓ Perfect for frying, curries, and sambols</li>
                  <li>✓ High in protein and omega-3</li>
                </ul>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                🔒 Secure checkout powered by Stripe
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="border-t p-8">
            <h3 className="text-xl font-bold mb-4">About This Product</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our premium headless sprats are carefully selected and cleaned to 
              save you time in the kitchen. These small, flavorful fish are a 
              staple in Sri Lankan cuisine and are incredibly versatile.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Why Choose Bundles?</strong>
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 list-disc mb-4">
              <li>Save up to $10 on bulk purchases</li>
              <li>Stock up for the week or month</li>
              <li>Perfect for families and meal prep</li>
              <li>Better value per gram</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Cooking Suggestions:</strong>
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 list-disc">
              <li>Deep fry until crispy for a delicious snack</li>
              <li>Add to spicy curry with coconut milk</li>
              <li>Make traditional sprats sambol</li>
              <li>Pan-fry with garlic and chili</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Storage:</strong> Keep frozen until ready to use. 
              Once thawed, cook within 24 hours.
            </p>
          </div>
        </div>

        {/* Why Bundle Section */}
        <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 text-white">
          <h3 className="text-2xl font-bold mb-4 text-center">🎁 Why Buy Bundles?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">💰</div>
              <h4 className="font-bold mb-2">Save Money</h4>
              <p className="text-sm">Up to $10 off when you bundle</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📦</div>
              <h4 className="font-bold mb-2">Stock Up</h4>
              <p className="text-sm">Perfect for meal prep & families</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚚</div>
              <h4 className="font-bold mb-2">Free Delivery</h4>
              <p className="text-sm">Within 20km Perth CBD (up to 1kg)</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 text-center text-gray-600">
          <p className="font-semibold mb-2">Questions? We're here to help!</p>
          <p className="mt-2">
            📧 Email: <a href="mailto:hello@yallamachan.com" className="text-blue-600 hover:underline">hello@yallamachan.com</a>
          </p>
          <p className="mt-1">
            📱 WhatsApp: <a href="https://wa.me/61412345678" className="text-blue-600 hover:underline">0412 345 678</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-12 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-600">
          <p className="font-semibold text-blue-600 mb-2">Yalla Machan! 🐟</p>
          <p>© 2024 Yalla Machan. All rights reserved.</p>
          <p className="mt-2">Perth, Western Australia</p>
          <p className="mt-4 text-xs">
            Fresh seafood delivered to your door. Free delivery within 20km of Perth CBD.
          </p>
        </div>
      </footer>
    </div>
  );
}