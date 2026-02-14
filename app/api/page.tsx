// app/page.tsx

import { BuyButton } from "@/components/buy-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-orange-600">
            Ceylon Fresh
          </h1>
          <p className="text-gray-600">Authentic Sri Lankan Groceries</p>
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
                  <p className="text-gray-500">
                    Add your product photo to:
                    <br />
                    <code className="text-xs bg-gray-200 px-2 py-1 rounded">
                      /public/images/anchovies.jpg
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
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Premium Sri Lankan Anchovies
              </h2>

              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-600">
                  $89.99
                </span>
                <span className="text-gray-600 ml-2">per 10kg</span>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Product Details:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 10kg package</li>
                  <li>✓ Wild-caught from Sri Lankan waters</li>
                  <li>✓ Sun-dried using traditional methods</li>
                  <li>✓ Perfect for sambols, curries, and frying</li>
                  <li>✓ Ships from Perth, WA</li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Shipping:</strong> $15 flat rate Australia-wide.
                  Arrives in 3-5 business days.
                </p>
              </div>

              <BuyButton />

              <p className="text-xs text-gray-500 mt-4 text-center">
                🔒 Secure checkout powered by Stripe
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="border-t p-8">
            <h3 className="text-xl font-bold mb-4">About This Product</h3>
            <p className="text-gray-700 leading-relaxed">
              These premium anchovies are sourced directly from the coastal
              waters of Sri Lanka. Sun-dried using traditional methods passed
              down through generations, they deliver authentic flavor that's
              essential for Sri Lankan cuisine.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Perfect for making traditional sambols, adding to curries, or
              frying as a crispy snack. Store in an airtight container for
              maximum freshness.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 text-center text-gray-600">
          <p>Questions about this product?</p>
          <p className="mt-2">
            📧 Email: <a href="mailto:your-email@example.com" className="text-orange-600 hover:underline">your-email@example.com</a>
          </p>
          <p className="mt-1">
            📱 WhatsApp: <span className="text-orange-600">04XX XXX XXX</span>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-12 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2024 Ceylon Fresh. All rights reserved.</p>
          <p className="mt-2">Perth, Western Australia</p>
        </div>
      </footer>
    </div>
  );
}