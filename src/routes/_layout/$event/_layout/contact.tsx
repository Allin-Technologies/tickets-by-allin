import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { userFormSchema } from "@/lib/validators/userFormSchema";

export const Route = createFileRoute("/_layout/$event/_layout/contact")({
  component: Contact,
});

function Contact() {
  const navigate = useNavigate({});
  const { event } = useParams({ from: "/_layout/$event/_layout/contact" });

  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
    },
  });

  const onSubmit = form.handleSubmit((formData: z.infer<typeof userFormSchema>) => {
    navigate({ to: "/$event/payment", params: { event } });
    console.log(formData, "formData");
    //do stuff
  });

  return (
    <>
      <PrevButton.Slot>
        <PrevButtonComponent to="/$event/tickets" from="/_layout/$event/_layout/contact" />
      </PrevButton.Slot>
      <PageTitle.Slot>Contact Information</PageTitle.Slot>
      <div className="bg-allin-primary/10">
        <p className="rounded border border-allin-primary p-5 font-medium">
          We’ve reserved your ticket. Please complete checkout within
          <span className="px-1 text-allin-primary">10:00</span>to secure your tickets.
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-5">
          {/* first_name */}
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="before:font-semibold before:text-allin-primary before:content-['*']">
                  First name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter first name"
                    {...field}
                    className="h-12 border-[#8692A6]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* last_name */}
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="before:font-semibold before:text-allin-primary before:content-['*']">
                  Last name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter last name"
                    {...field}
                    className="h-12 border-[#8692A6]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* gender */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="before:font-semibold before:text-allin-primary before:content-['*']">
                  Gender
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 border-[#8692A6] focus-visible:ring-0">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="before:font-semibold before:text-allin-primary before:content-['*']">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter email address"
                    {...field}
                    className="h-12 border-[#8692A6]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* phone number */}
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="before:font-semibold before:text-allin-primary before:content-['*']">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter phone number"
                    {...field}
                    className="h-12 border-[#8692A6]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <NextButton.Slot>
            <Button className="mt-5 w-full" size="lg" type="submit" onClick={onSubmit}>
              Continue
            </Button>
          </NextButton.Slot>
        </form>
      </Form>
    </>
  );
}
