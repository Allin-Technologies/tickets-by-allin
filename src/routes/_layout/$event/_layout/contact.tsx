import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/_layout/$event/_layout/contact")({
  component: Contact,
});

function Contact() {
  return (
    <>
      <h1 className="mb-10 text-4xl font-bold">Contact Information</h1>
      <div className="bg-allin-primary/10">
        <p className="border-allin-primary rounded border p-5 font-medium">
          We’ve reserved your ticket. Please complete checkout within
          <span className="text-allin-primary"> 10:00 </span>to secure your tickets.
        </p>
      </div>
      <form className="space-y-5">
        <div className="space-y-2">
          <Label className="before:text-allin-primary before:font-semibold before:content-['*']">
            First name
          </Label>
          <Input placeholder="First name" className="h-12 border-[#8692A6]" />
        </div>
        <div className="space-y-2">
          <Label className="before:text-allin-primary before:font-semibold before:content-['*']">
            Last name
          </Label>
          <Input placeholder="Last name" className="h-12 border-[#8692A6]" />
        </div>
        <div className="space-y-2">
          <Label className="before:text-allin-primary before:font-semibold before:content-['*']">
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
          <Label className="before:text-allin-primary before:font-semibold before:content-['*']">
            Email address
          </Label>
          <Input placeholder="Email address" className="h-12 border-[#8692A6]" />
        </div>
        <div className="space-y-2">
          <Label className="before:text-allin-primary before:font-semibold before:content-['*']">
            Confirm email address
          </Label>
          <Input placeholder="Confirm email address" className="h-12 border-[#8692A6]" />
        </div>
        <div className="space-y-2">
          <Label className="before:text-allin-primary before:font-semibold before:content-['*']">
            Phone number
          </Label>
          <Input placeholder="Phone number" className="h-12 border-[#8692A6]" />
        </div>
      </form>
    </>
  );
}
