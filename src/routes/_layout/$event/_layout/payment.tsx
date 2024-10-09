import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  PageTitle,
  PrevButton,
  PrevButtonComponent,
  NextButton,
} from "@/routes/_layout/$event/_layout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PaystackIcon from "@/assets/icons/paystack.svg";
import FlutterwaveIcon from "@/assets/icons/flutterwave.svg";

export const Route = createFileRoute("/_layout/$event/_layout/payment")({
  component: Payment,
});

function Payment() {
  const [paymentOption, setPaymentOption] = React.useState("");

  return (
    <>
      <PrevButton.Slot>
        <PrevButtonComponent to="/$event/contact" from="/_layout/$event/_layout/payment" />
      </PrevButton.Slot>
      <PageTitle.Slot>Payment Method</PageTitle.Slot>
      <RadioGroup
        onValueChange={(value) => setPaymentOption(value)}
        className="gap-0 divide-y divide-[#17183B] overflow-hidden rounded-sm border border-[#17183B] font-semibold *:flex *:items-center *:gap-2 *:p-5"
      >
        <Label
          htmlFor="paystack"
          data-state={paymentOption === "paystack" && "active"}
          className="bg-transparent text-lg font-semibold transition data-[state=active]:bg-allin-primary/5 data-[state=active]:font-black"
        >
          <RadioGroupItem value="paystack" id="paystack" className="mr-3" />
          <div className="contents">
            <img src={PaystackIcon} alt="paystack_icon" width={25} height={25} /> Paystack
          </div>
        </Label>
        <Label
          htmlFor="flutterwave"
          data-state={paymentOption === "flutterwave" && "active"}
          className="bg-transparent text-lg font-semibold transition data-[state=active]:bg-allin-primary/5 data-[state=active]:font-black"
        >
          <RadioGroupItem value="flutterwave" id="flutterwave" className="mr-3" />
          <div className="contents">
            <img src={FlutterwaveIcon} alt="flutterwave_icon" width={25} height={25} />
            Flutterwave
          </div>
        </Label>
      </RadioGroup>
      <NextButton.Slot>
        <Button className="mt-5 w-full" size="lg" onClick={() => console.log("payment")}>
          Proceed to payment
        </Button>
      </NextButton.Slot>
    </>
  );
}
