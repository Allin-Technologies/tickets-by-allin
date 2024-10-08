import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  PageTitle,
  PrevButton,
  PrevButtonComponent,
  NextButton,
} from "@/routes/_layout/$event/_layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_layout/$event/_layout/contact")({
  component: Contact,
});

function Contact() {
  const navigate = useNavigate({});
  const { event } = useParams({ from: "/_layout/$event/_layout/contact" });

  const handleSubmit = () => {
    navigate({ to: "/$event/payment", params: { event } });
  };

  return (
    <>
      <PrevButton.Slot>
        <PrevButtonComponent
          props={{ to: "/$event/tickets", from: "/_layout/$event/_layout/contact" }}
        />
      </PrevButton.Slot>
      <PageTitle.Slot>Contact Information</PageTitle.Slot>
      <div className="bg-allin-primary/10">
        <p className="rounded border border-allin-primary p-5 font-medium">
          We’ve reserved your ticket. Please complete checkout within
          <span className="text-allin-primary">10:00</span>to secure your tickets.
        </p>
      </div>
      <form className="space-y-5">
        <div className="space-y-2">
          <Label className="before:font-semibold before:text-allin-primary before:content-['*']">
            First name
          </Label>
          <Input placeholder="First name" className="h-12 border-[#8692A6]" />
        </div>
        <div className="space-y-2">
          <Label className="before:font-semibold before:text-allin-primary before:content-['*']">
            Last name
          </Label>
          <Input placeholder="Last name" className="h-12 border-[#8692A6]" />
        </div>
        <div className="space-y-2">
          <Label className="before:font-semibold before:text-allin-primary before:content-['*']">
            Gender
          </Label>
          <Select>
            <SelectTrigger className="h-12 border-[#8692A6] focus-visible:ring-0">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="before:font-semibold before:text-allin-primary before:content-['*']">
            Email address
          </Label>
          <Input placeholder="Email address" className="h-12 border-[#8692A6]" />
        </div>
        <div className="space-y-2">
          <Label className="before:font-semibold before:text-allin-primary before:content-['*']">
            Phone number
          </Label>
          <Input placeholder="Phone number" className="h-12 border-[#8692A6]" />
        </div>
      </form>
      <NextButton.Slot>
        <Button className="mt-5 w-full" size="lg" onClick={handleSubmit}>
          Continue
        </Button>
      </NextButton.Slot>
    </>
  );
}
