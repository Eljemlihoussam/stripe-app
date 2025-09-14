"use client";

import React from "react";
import Image from "next/image";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../stripePromise"; // Ajuste le chemin
import CheckoutForm from "../stripe/page"; // Ajuste le chemin

export default function Paiement() {
  return (
    <main className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Payment Method
        </h3>

        <div className="flex justify-center gap-6 mb-8">
          <Image src="/visa.png" alt="Visa" width={70} height={40} />
          <Image src="/master_card.png" alt="MasterCard" width={90} height={40} />
          <Image src="/american_express.png" alt="American Express" width={80} height={40} />
          <Image src="/discover.png" alt="Discover" width={80} height={40} />
        </div>

        {/* ⚡ Ici on wrap avec Elements */}
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </main>
  );
}
