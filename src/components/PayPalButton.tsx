'use client';

import { useEffect, useRef } from 'react';

interface PayPalButtonProps {
  // TODO: Replace with your real PayPal client ID before going live
  clientId: string;
  amount?: string;
  currency?: string;
}

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        createOrder: (
          data: unknown,
          actions: { order: { create: (opts: unknown) => Promise<string> } }
        ) => Promise<string>;
        onApprove: (
          data: { orderID: string },
          actions: { order: { capture: () => Promise<unknown> } }
        ) => Promise<void>;
        onError: (err: unknown) => void;
      }) => { render: (selector: string) => void };
    };
  }
}

export default function PayPalButton({
  clientId,
  amount = '150.00',
  currency = 'EUR',
}: PayPalButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);

  useEffect(() => {
    if (rendered.current) return;
    if (!clientId || clientId === 'YOUR_PAYPAL_CLIENT_ID_HERE') return;

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=${currency}`;
    script.async = true;
    script.onload = () => {
      if (window.paypal && containerRef.current) {
        rendered.current = true;
        window.paypal
          .Buttons({
            createOrder: (_data, actions) =>
              actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount,
                      currency_code: currency,
                    },
                    description: 'Bimmerworks Remote Tune',
                  },
                ],
              }),
            onApprove: async (_data, actions) => {
              await actions.order.capture();
              alert('Payment successful! We will be in touch shortly.');
            },
            onError: (err) => {
              console.error('PayPal error:', err);
            },
          })
          .render('#paypal-button-container');
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [clientId, amount, currency]);

  // Show placeholder when no real client ID is set
  if (!clientId || clientId === 'YOUR_PAYPAL_CLIENT_ID_HERE') {
    return (
      <div className="w-full">
        <div
          className="w-full bg-[#FFC439] hover:bg-[#F0B429] text-[#003087] font-bold py-4 px-6 rounded-lg text-center cursor-not-allowed opacity-80 text-sm"
          title="Add your PayPal Client ID to activate"
        >
          <span className="mr-2">💳</span>
          Pay with PayPal
          <span className="block text-xs font-normal mt-0.5 opacity-70">(placeholder — add Client ID to activate)</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div id="paypal-button-container" ref={containerRef} />
    </div>
  );
}
