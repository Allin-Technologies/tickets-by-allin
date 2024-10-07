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
        <PrevButtonComponent props={{ to: "/$event", from: "/_layout/$event/_layout/tickets" }} />
      </PrevButton.Slot>
      <PageTitle.Slot>Choose tickets</PageTitle.Slot>
      <div className="flex flex-col divide-y-2">
        <div className="flex items-start justify-between gap-10 pb-10">
          <div className="space-y-5">
            <h3 className="text-allin-gray-dark text-2xl font-semibold">
              Regular Pass- Flash Sale
            </h3>
            <p className="text-[#A2A3B1]">includes ₦800 fee</p>
            <TicketQuantity />
          </div>
          <p className="text-allin-primary text-2xl font-medium">₦14,800</p>
        </div>
        <div className="flex items-start justify-between gap-10 pt-10">
          <div className="space-y-5">
            <h3 className="text-allin-gray-dark text-2xl font-semibold">Buddies- Flash Sale</h3>
            <p className="text-[#A2A3B1]">includes ₦800 fee</p>
            <TicketQuantity />
          </div>
          <p className="text-allin-primary text-2xl font-medium">₦5,800</p>
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
