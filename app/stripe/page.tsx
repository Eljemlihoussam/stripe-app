"use client";

import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    try {
      // Crée PaymentIntent via le backend
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1000 }), // 10€ par exemple
      });

      const { clientSecret } = await res.json();

      // Confirme le paiement avec Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      setLoading(false);

      if (result.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.error.message,
        });
      } else if (result.paymentIntent?.status === "succeeded") {
        Swal.fire({
          icon: "success",
          title: "Paiement réussi !",
          text: "Merci pour votre achat.",
        });
      }
    } catch (error: any) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: error.message || "Quelque chose s'est mal passé.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Card Element */}
      <div className="p-3 border rounded-md">
        <CardElement options={{ hidePostalCode: true }} />
      </div>

      {/* Bouton */}
      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ${
          loading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}
