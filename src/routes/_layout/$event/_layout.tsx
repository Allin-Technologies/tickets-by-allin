import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TrailingIcon from "@/assets/Trailing.svg?react";

export const Route = createFileRoute("/_layout/$event/_layout")({
  component: EventLayout,
});

function EventLayout() {
  return (
    <div className="text-allin-text container">
      <div className="flex items-start gap-20">
        <div className="grow space-y-5">
          <Outlet />
        </div>
        <div className="w-[350px] space-y-5 rounded-md border bg-white p-6 shadow-md">
          <h2 className="text-2xl font-semibold">
            Super Junior SM Town Live'10 World Tour New York City
          </h2>
          <table className="w-full [&>tr>td:last-of-type]:text-right [&_td]:py-2 [&_td]:align-top">
            <tbody>
              <tr>
                <td>1 × Prime Pass (Duo)- Flash Sale</td>
                <td>₦14,800</td>
              </tr>
              <tr>
                <td>Fees</td>
                <td>₦1,600</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td className="text-allin-primary">Free</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Coupon Applied</td>
                <td>₦0.00</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className="flex justify-between">
            <p className="text-lg">TOTAL</p>
            <p className="text-lg font-semibold">₦16,400</p>
          </div>
          <div className="relative">
            <Input placeholder="Coupon Code" className="h-14 rounded-none" />
            <span className="absolute right-4 top-1/2 h-fit translate-y-[-50%]">
              <TrailingIcon />
            </span>
          </div>
          <Button className="w-full" size="lg">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
