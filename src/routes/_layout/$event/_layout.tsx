import {
  createFileRoute,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TrailingIcon from "@/assets/icons/Trailing.svg?react";
import ChevronIcon from "@/assets/icons/chevron.svg?react";

export const Route = createFileRoute("/_layout/$event/_layout")({
  component: EventLayout,
});

function EventLayout() {
  const navigate = useNavigate();
  const { event } = useParams({ from: "/_layout/$event" });
  const { pathname } = useLocation();

  return (
    <div className="text-allin-text container">
      <div className="mb-20 flex items-center gap-5">
        <Button
          variant="link"
          onClick={() => navigate({ to: "/$event/tickets", params: { event } })}
          data-state={pathname.includes("tickets") && "active"}
          className="data-[state=active]:text-allin-primary text-2xl font-semibold"
        >
          Tickets
        </Button>
        <ChevronIcon />
        <Button
          variant="link"
          onClick={() => navigate({ to: "/$event/contact", params: { event } })}
          data-state={pathname.includes("contact") && "active"}
          className="data-[state=active]:text-allin-primary text-2xl font-semibold"
        >
          Contact
        </Button>
        <ChevronIcon />
        <Button
          variant="link"
          onClick={() => navigate({ to: "/$event/payment", params: { event } })}
          data-state={pathname.includes("payment") && "active"}
          className="data-[state=active]:text-allin-primary text-2xl font-semibold"
        >
          Payment
        </Button>
      </div>
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
            {pathname.includes("payment") ? "Proceed to payment" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
}
