import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import React from "react";
import PlusIcon from "@/assets/icons/plus.svg?react";
import MinusIcon from "@/assets/icons/minus.svg?react";
import { Button } from "@/components/ui/button";
import {
  PageTitle,
  PrevButton,
  PrevButtonComponent,
  NextButton,
} from "@/routes/_layout/$event/_layout";

export const Route = createFileRoute("/_layout/$event/_layout/tickets")({
  component: Tickets,
});

function Tickets() {
  const navigate = useNavigate({});
  const { event } = useParams({ from: "/_layout/$event/_layout/tickets" });

  const handleSubmit = () => {
    navigate({ to: "/$event/contact", params: { event } });
  };

  return (
    <>
      <PrevButton.Slot>
        <PrevButtonComponent to="/$event" from="/_layout/$event/_layout/tickets" />
      </PrevButton.Slot>
      <PageTitle.Slot>Choose tickets</PageTitle.Slot>
      <div className="flex flex-col divide-y-2">
        <div className="flex items-start justify-between gap-10 pb-10">
          <div className="space-y-5">
            <h3 className="text-base font-semibold text-allin-gray-dark md:text-2xl">
              Regular Pass- Flash Sale
            </h3>
            <p className="text-sm font-semibold text-[#A2A3B1] md:text-base">includes ₦800 fee</p>
            <TicketQuantity />
          </div>
          <div className="text-right">
            <p className="flex flex-wrap justify-end gap-x-2">
              <span className="text-base font-medium line-through md:text-2xl">₦20,000</span>
              <span className="text-base font-bold text-allin-primary md:text-2xl">₦10,000</span>
            </p>
            <p className="text-sm font-semibold text-[#A2A3B1] md:text/-base">Early Bird Sales</p>
          </div>
        </div>
        <div className="flex items-start justify-between gap-10 pt-10">
          <div className="space-y-5">
            <h3 className="text-base font-semibold text-allin-gray-dark md:text-2xl">
              Buddies- Flash Sale
            </h3>
            <p className="text-sm font-semibold text-[#A2A3B1] md:text-base">includes ₦800 fee</p>
            <TicketQuantity />
          </div>
          <div className="text-right">
            <p className="flex flex-wrap justify-end gap-x-2">
              <span className="text-base font-medium line-through md:text-2xl">₦200,000</span>
              <span className="text-base font-bold text-allin-primary md:text-2xl">₦100,000</span>
            </p>
            <p className="text-sm font-semibold text-[#A2A3B1] md:text-base">Early Bird Sales</p>
          </div>
        </div>
      </div>
      <NextButton.Slot>
        <Button className="mt-5 w-full" size="lg" onClick={handleSubmit}>
          Continue
        </Button>
      </NextButton.Slot>
    </>
  );
}

const TicketQuantity = () => {
  const [value, setValue] = React.useState(1);

  const AddValue = () => {
    setValue((prev) => prev + 1);
  };

  const MinusValue = () => {
    setValue((prev): number => {
      if (prev > 1) return prev - 1;
      return 1;
    });
  };

  return (
    <div className="flex h-[52px] w-[160px] items-center justify-between rounded-sm border border-[#A2A3B1] px-2">
      <Button size="icon" variant="ghost" onClick={MinusValue}>
        <MinusIcon />
      </Button>
      <p className="text-xl font-semibold">{value}</p>
      <Button size="icon" variant="ghost" onClick={AddValue}>
        <PlusIcon />
      </Button>
    </div>
  );
};
