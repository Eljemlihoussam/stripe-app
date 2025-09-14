import React from "react";
import Image from "next/image";

export default function Paiement() {
  return (
    <main className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Payment Method
        </h3>

        {/* Payment Logos */}
        <div className="flex justify-center gap-6 mb-8">
          <Image src="/visa.png" alt="Visa" width={70} height={40} />
          <Image src="/master_card.png" alt="MasterCard" width={90} height={40} />
          <Image src="/american_express.png" alt="American Express" width={80} height={40} />
          <Image src="/discover.png" alt="Discover" width={80} height={40} />
        </div>

        {/* Credit Card Form */}
        <form className="space-y-5">
          {/* Name on Card */}
          <div>
            <label htmlFor="cardName" className="block text-gray-700 text-sm font-medium mb-1">
              Name on Card
            </label>
            <input
              id="cardName"
              type="text"
              placeholder="Meet Patel"
              className="w-full border rounded-lg px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Card Number */}
          <div>
            <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-medium mb-1">
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              inputMode="numeric"
              placeholder="1234 5678 9012 3456"
              className="w-full border rounded-lg px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Expiration + CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-gray-700 text-sm font-medium mb-1">
                Expiration (MM/YY)
              </label>
              <input
                id="expiry"
                type="text"
                placeholder="MM/YY"
                className="w-full border rounded-lg px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="cvv" className="block text-gray-700 text-sm font-medium mb-1">
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                inputMode="numeric"
                maxLength={3}
                placeholder="123"
                className="w-full border rounded-lg px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Pay Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 hover:cursor-pointer transition duration-200"
          >
            Pay Now
          </button>
        </form>
      </div>
    </main>
  );
}
