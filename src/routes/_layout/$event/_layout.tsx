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
import { makePortal } from "@/lib/make-portals";

export const Route = createFileRoute("/_layout/$event/_layout")({
  component: EventLayout,
});

function EventLayout() {
  const { pathname } = useLocation();

  return (
    <div className="container pt-5 text-allin-text">
      <PrevButton.Outlet>
        <span />
      </PrevButton.Outlet>
      <div className="mb-20 flex w-fit items-center gap-5 md:gap-7">
        <h2
          data-state={pathname.includes("tickets") && "active"}
          className="text-lg font-semibold data-[state=active]:text-allin-primary md:text-2xl"
        >
          Tickets
        </h2>
        <ChevronIcon />
        <h2
          data-state={pathname.includes("contact") && "active"}
          className="text-lg font-semibold data-[state=active]:text-allin-primary md:text-2xl"
        >
          Contact
        </h2>
        <ChevronIcon />
        <h2
          data-state={pathname.includes("payment") && "active"}
          className="text-lg font-semibold data-[state=active]:text-allin-primary md:text-2xl"
        >
          Payment
        </h2>
      </div>
      <div className="flex flex-col items-start gap-20 md:flex-row">
        <div className="w-full space-y-5 md:w-fit md:grow">
          <PageTitle.Outlet>
            <h1 className="mb-10 text-2xl font-bold md:text-4xl">
              <span />
            </h1>
          </PageTitle.Outlet>
          <Outlet />
        </div>
        <div className="w-full space-y-5 rounded-md border bg-white p-6 shadow-md md:w-[350px]">
          <h2 className="text-xl font-semibold md:text-2xl">
            Super Junior SM Town Live'10 World Tour New York City
          </h2>
          <table className="w-full [&>tr>td:last-of-type]:text-right [&_td]:py-2 [&_td]:align-top">
            <tbody>
              <tr>
                <td>1 × Prime Pass (Duo)- Flash Sale</td>
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
          <NextButton.Outlet>
            <span />
          </NextButton.Outlet>
        </div>
      </div>
    </div>
  );
}

export const PageTitle = makePortal("page-title");
export const PrevButton = makePortal("prev-button");
export const NextButton = makePortal("next-button");

type From =
  | "/_layout/$event"
  | "/_layout/$event/_layout/contact"
  | "/_layout/$event/_layout/payment"
  | "/_layout/$event/_layout/tickets";

type To = "/$event" | "/$event/contact" | "/$event/payment" | "/$event/tickets";
interface PrevButtonProps {
  to: To;
  from: From;
}

export const PrevButtonComponent = ({ to, from }: PrevButtonProps) => {
  const navigate = useNavigate({});
  const { event } = useParams({ from });

  return (
    <Button
      variant="link"
      onClick={() => navigate({ to: to, params: { event } })}
      className="mb-10 inline-flex items-center p-0 font-semibold text-[#8692A6]"
    >
      <span className="rotate-180">
        <ChevronIcon />
      </span>
      Back
    </Button>
  );
};
