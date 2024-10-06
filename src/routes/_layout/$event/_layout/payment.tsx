import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/$event/_layout/payment")({
  component: Payment,
});

function Payment() {
  return (
    <>
      <h1 className="mb-10 text-4xl font-bold">Payment Method</h1>
      <p>Paystack</p>
    </>
  );
}
