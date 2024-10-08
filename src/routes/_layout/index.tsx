import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import MixerIcon from "@/assets/icons/dj-mixer.svg?react";
import BagPipesIcon from "@/assets/icons/bagpipes.svg?react";
import SaxophoneIcon from "@/assets/icons/saxophone.svg?react";
import GuiterIcon from "@/assets/icons/guitar.svg?react";
import ArrowIcon from "@/assets/icons/arrow.svg?react";
import RealTimeDataSvg from "@/assets/images/real-time-data.svg";
import TrackSaleSvg from "@/assets/images/track-ticket-sale.svg";
import AppleLogo from "@/assets/icons/apple.svg?react";
import FacebookLogo from "@/assets/icons/facebook2.svg?react";
import NokiaLogo from "@/assets/icons/nokia.svg?react";
import OracleLogo from "@/assets/icons/oracle.svg?react";
import GoogleLogo from "@/assets/icons/google.svg?react";
import MicrosoftLogo from "@/assets/icons/microsoft.svg?react";
import AirbnbLogo from "@/assets/icons/airbnb.svg?react";
import AxureLogo from "@/assets/icons/axure.svg?react";
import QuoteIcon from "@/assets/icons/quotes.svg?react";
import DefaultProfile from "@/assets/images/default_profile.png";

export const Route = createFileRoute("/_layout/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="flex h-screen min-h-[750px] items-center justify-center bg-[url('@/assets/images/hero.png')] bg-cover bg-bottom bg-no-repeat">
        <div className="space-y-8 text-center text-white">
          <h1 className="text-[96px] font-bold capitalize leading-[120.96px]">
            Ticket experience
            <br /> made easy
          </h1>
          <p className="text-3xl">for Meals, Events, Mobility & Spaces</p>
          <Button size="lg">Get Started</Button>
        </div>
      </div>
      <div className="container space-y-5 pb-5 text-allin-gray-dark *:w-fit">
        <h2 className="text-[72px] font-bold leading-[93.6px]">
          <span className="text-allin-primary">Explore</span> Our Features
        </h2>
        <div className="space-y-1">
          <p className="text-2xl">Find events and make memories that last a lifetime.</p>
          <p className="text-2xl">Your passport to unforgettable experiences</p>
        </div>
      </div>
      <div className="no-scrollbar container flex max-w-[1500px] gap-5 overflow-scroll pt-5 md:px-10">
        <div className="flex h-[300px] w-full min-w-[370px] flex-col justify-end gap-5 rounded-3xl bg-allin-lilac/30 p-10 shadow-sm *:w-fit">
          <MixerIcon />
          <h3 className="text-2xl font-bold">Entertainment</h3>
          <p>
            Sell and manage tickets for entertainment events, ensuring real-time tracking access for
            attendees.
          </p>
        </div>
        <div className="flex h-[300px] w-full min-w-[370px] flex-col justify-end gap-5 rounded-3xl bg-allin-lilac/30 p-10 shadow-sm *:w-fit">
          <BagPipesIcon />
          <h3 className="text-2xl font-bold">Meals</h3>
          <p>
            Effortlessly handle meal vouchers and track meal purchases while every guest enjoys
            their dining experience.
          </p>
        </div>
        <div className="flex h-[300px] w-full min-w-[370px] flex-col justify-end gap-5 rounded-3xl bg-allin-primary p-10 shadow-sm *:w-fit">
          <SaxophoneIcon />
          <h3 className="text-2xl font-bold">Mobility</h3>
          <p>
            Provide and manage tickets for transportation, ensuring seamless and reliable travel
            experiences.
          </p>
        </div>
        <div className="flex h-[300px] w-full min-w-[370px] flex-col justify-end gap-5 rounded-3xl bg-allin-lilac/30 p-10 shadow-sm *:w-fit">
          <GuiterIcon />
          <h3 className="text-2xl font-bold">Spaces</h3>
          <p>
            Efficiently manage entry and control access to spaces, ensuring smooth operations with
            digital tickets.
          </p>
        </div>
      </div>
      <div className="container flex items-start gap-20 *:w-full *:grow">
        <div className="relative">
          {/* <div className="absolute -top-16 aspect-square w-[460px] rounded-3xl border bg-allin-text/10 shadow-md" />
          <div className="relative ml-auto aspect-square w-[460px] rounded-3xl border bg-white shadow-md" /> */}
          <img src={TrackSaleSvg} alt="default" className="h-full w-full scale-[1.2]" />
        </div>
        <div>
          <h2 className="text-[72px] font-bold leading-[93.6px]">
            <span className="text-allin-primary">Track</span> <br />
            Ticket Sales
          </h2>
          <p className="my-5 text-2xl">
            Monitor sales in real-time and see which tickets perform best.
          </p>
          <Button size="lg" variant="outline" className="mt-10 inline-flex items-center gap-3">
            Create an event <ArrowIcon />
          </Button>
        </div>
      </div>
      <div className="container flex items-start gap-5">
        <div className="basis-1/3">
          <h2 className="text-[72px] font-bold leading-[93.6px]">
            <span className="text-allin-primary">Real-Time </span> <br /> Data Dashboard
          </h2>
          <p className="my-5 text-2xl">
            Access a central hub for sales, ticket scans, and vendor performance data.
          </p>
          <Button size="lg" variant="outline" className="mt-10 inline-flex items-center gap-3">
            Learn more <ArrowIcon />
          </Button>
        </div>
        <div className="relative basis-2/3">
          <img src={RealTimeDataSvg} alt="default" className="h-full w-full" />
        </div>
      </div>
      <div className="container grid grid-cols-4 items-center gap-10">
        <AppleLogo />
        <FacebookLogo />
        <NokiaLogo />
        <OracleLogo />
        <GoogleLogo />
        <MicrosoftLogo />
        <AirbnbLogo />
        <AxureLogo />
      </div>
      <div className="container max-w-full space-y-20 px-0">
        <h2 className="text-center text-[72px] font-bold leading-[93.6px]">
          Real people, Real reviews
        </h2>
        <div className="no-scrollbar flex h-[400px] gap-10 overflow-scroll">
          <div className="relative h-56 opacity-[.5] md:min-w-[770px]">
            <div className="absolute left-1/2 right-1/2 top-5 flex w-full -translate-x-1/2 flex-col px-8 text-[#222222] *:w-fit md:min-w-[710px]">
              <QuoteIcon />
              <p className="px-5 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <span className="ml-auto rotate-180">
                <QuoteIcon />
              </span>
              <div className="mx-auto space-y-5 text-center">
                <img
                  src={DefaultProfile}
                  alt="default"
                  className="mx-auto aspect-square w-[120px] rounded-full"
                />
                <p className="text-xl font-black">Precious Micah</p>
              </div>
            </div>
          </div>
          <div className="relative h-56 bg-allin-lilac/30 md:min-w-[770px]">
            <div className="absolute left-1/2 right-1/2 top-5 flex w-full -translate-x-1/2 flex-col px-8 text-[#222222] *:w-fit md:min-w-[710px]">
              <QuoteIcon />
              <p className="px-5 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <span className="ml-auto rotate-180">
                <QuoteIcon />
              </span>
              <div className="mx-auto space-y-5 text-center">
                <img
                  src={DefaultProfile}
                  alt="default"
                  className="mx-auto aspect-square w-[120px] rounded-full"
                />
                <p className="text-xl font-black">Precious Micah</p>
              </div>
            </div>
          </div>
          <div className="relative h-56 opacity-[.5] md:min-w-[770px]">
            <div className="absolute left-1/2 right-1/2 top-5 flex w-full -translate-x-1/2 flex-col px-8 text-[#222222] *:w-fit md:min-w-[710px]">
              <QuoteIcon />
              <p className="px-5 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <span className="ml-auto rotate-180">
                <QuoteIcon />
              </span>
              <div className="mx-auto space-y-5 text-center">
                <img
                  src={DefaultProfile}
                  alt="default"
                  className="mx-auto aspect-square w-[120px] rounded-full"
                />
                <p className="text-xl font-black">Precious Micah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
