// app/success/page.tsx
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4">
      <div className="max-w-md mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Yalla! Order Confirmed! 🎉
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Thank you for your order! We've received it and will prepare 
          your fresh sprats for delivery.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-blue-900 mb-3">What happens next?</h2>
          <ul className="text-sm text-blue-800 space-y-2 text-left">
            <li>✅ You'll receive an email confirmation shortly</li>
            <li>📦 We'll prepare your order within 24 hours</li>
            <li>🚚 Delivery within 1-2 business days</li>
            <li>📧 You'll get tracking/delivery updates via email</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-green-800 font-semibold">
            🎉 FREE DELIVERY within 20km of Perth CBD!
          </p>
          <p className="text-xs text-green-700 mt-1">
            We'll contact you if your delivery address is outside this radius.
          </p>
        </div>

        <div className="mb-8 text-gray-600">
          <p className="mb-2 font-semibold">Questions about your order?</p>
          <p>📧 <a href="mailto:hello@yallamachan.com" className="text-blue-600 hover:underline">hello@yallamachan.com</a></p>
          <p>📱 <a href="https://wa.me/61412345678" className="text-blue-600 hover:underline">0412 345 678</a></p>
        </div>

        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          ← Back to Yalla Machan
        </Link>
      </div>
    </div>
  );
}