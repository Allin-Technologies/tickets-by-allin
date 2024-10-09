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
import MediaQuery from "react-responsive";

export const Route = createFileRoute("/_layout/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="flex h-screen min-h-[750px] items-center justify-center bg-[url('@/assets/images/hero.png')] bg-cover bg-bottom bg-no-repeat">
        <div className="mx-5 space-y-5 text-center text-white md:space-y-8">
          <h1 className="text-[32px] font-bold capitalize leading-[40.32px] md:text-[96px] md:leading-[120.96px]">
            Ticket experience
            <br /> made easy
          </h1>
          <p className="md:text-3xl">for Meals, Events, Mobility & Spaces</p>
          <Button size="lg">Get Started</Button>
        </div>
      </div>
      <div className="container flex flex-col items-center space-y-5 pb-5 text-center text-allin-gray-dark *:w-fit md:items-start md:text-left">
        <h2 className="text-3xl font-bold leading-[38.16px] md:text-[72px] md:leading-[93.6px]">
          <span className="text-allin-primary">Explore</span> Our Features
        </h2>
        <p className="w-full space-y-1 text-[#222222] md:w-[600px] md:text-2xl">
          Find events and make memories that last a lifetime. Your passport to unforgettable
          experiences
        </p>
      </div>
      <div className="no-scrollbar container flex max-w-[1500px] gap-5 overflow-scroll px-5 pt-5 md:px-10">
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
      <div className="container flex flex-col items-start gap-20 *:w-full *:grow md:flex-row">
        <div className="relative">
          {/* <div className="absolute -top-16 aspect-square w-[460px] rounded-3xl border bg-allin-text/10 shadow-md" />
          <div className="relative ml-auto aspect-square w-[460px] rounded-3xl border bg-white shadow-md" /> */}
          <img src={TrackSaleSvg} alt="default" className="h-full w-full scale-[1.2]" />
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="text-3xl font-bold leading-[38.16px] md:text-[72px] md:leading-[93.6px]">
            <span className="text-allin-primary">Track</span> <br />
            Ticket Sales
          </h2>
          <p className="my-5 text-[#222222] md:text-2xl">
            Monitor sales in real-time and see which tickets perform best.
          </p>
          <Button size="lg" variant="outline" className="inline-flex items-center gap-3 md:mt-10">
            Create an event <ArrowIcon />
          </Button>
        </div>
      </div>
      <div className="container flex flex-col items-start gap-5 md:flex-row">
        <div className="flex basis-1/3 flex-col items-center text-center md:items-start md:text-left">
          <h2 className="text-3xl font-bold leading-[38.16px] md:text-[72px] md:leading-[93.6px]">
            <span className="text-allin-primary">Real-Time </span> <br /> Data Dashboard
          </h2>
          <p className="my-5 text-[#222222] md:text-2xl">
            Access a central hub for sales, ticket scans, and vendor performance data.
          </p>
          <MediaQuery minWidth={768}>
            <Button size="lg" variant="outline" className="mt-10 inline-flex items-center gap-3">
              Learn more <ArrowIcon />
            </Button>
          </MediaQuery>
        </div>
        <div className="basis-2/3">
          <img src={RealTimeDataSvg} alt="default" className="h-full w-full object-cover" />
        </div>
        <MediaQuery maxWidth={768}>
          <Button size="lg" variant="outline" className="mx-auto inline-flex items-center gap-3">
            Learn more <ArrowIcon />
          </Button>
        </MediaQuery>
      </div>
      <div className="no-scrollbar mx-auto grid max-w-[1500px] grid-cols-[repeat(8,_minmax(auto,_1fr))] items-center gap-x-16 overflow-scroll p-5 md:container *:object-cover md:grid-cols-4 md:gap-10">
        <AppleLogo />
        <FacebookLogo />
        <NokiaLogo />
        <OracleLogo />
        <GoogleLogo />
        <MicrosoftLogo />
        <AirbnbLogo />
        <AxureLogo />
      </div>
      <div className="container max-w-full space-y-20 px-0 text-[#222222]">
        <h2 className="mx-auto w-56 text-center text-[32px] font-bold leading-[40.32px] md:w-full md:text-[96px] md:leading-[120.96px]">
          Real people, Real reviews
        </h2>
        <div className="no-scrollbar mx-auto flex h-full w-full max-w-[1500px] items-stretch gap-5 overflow-x-scroll px-5 pb-24 *:min-h-[100px] *:min-w-full *:grow *:bg-allin-lilac/20 md:gap-10 md:px-10 md:pb-28 *:md:w-full *:md:min-w-[770px]">
          <div className="relative">
            <div className="m-5 mb-0 flex flex-col pb-16 md:m-8 md:pb-20">
              <span className="self-start">
                <QuoteIcon />
              </span>
              <p className="px-5 text-center md:px-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <span className="rotate-180 self-end">
                <QuoteIcon />
              </span>
            </div>
            <div className="absolute -bottom-24 left-1/2 right-1/2 w-fit -translate-x-1/2 space-y-5 text-center md:-bottom-28">
              <img
                src={DefaultProfile}
                alt="default"
                className="mx-auto aspect-square w-[100px] rounded-full md:w-[120px]"
              />
              <p className="text-nowrap text-lg font-black md:text-xl">Precious Micah</p>
            </div>
          </div>
          <div className="relative opacity-[.5]">
            <div className="m-5 mb-0 flex flex-col pb-16 md:m-8 md:pb-20">
              <span className="self-start">
                <QuoteIcon />
              </span>
              <p className="px-5 text-center md:px-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              </p>
              <span className="rotate-180 self-end">
                <QuoteIcon />
              </span>
            </div>
            <div className="absolute -bottom-24 left-1/2 right-1/2 w-fit -translate-x-1/2 space-y-5 text-center md:-bottom-28">
              <img
                src={DefaultProfile}
                alt="default"
                className="mx-auto aspect-square w-[100px] rounded-full md:w-[120px]"
              />
              <p className="text-nowrap text-lg font-black md:text-xl">John Doe Micah</p>
            </div>
          </div>
          <div className="relative opacity-[.5]">
            <div className="m-5 mb-0 flex flex-col pb-16 md:m-8 md:pb-20">
              <span className="self-start">
                <QuoteIcon />
              </span>
              <p className="px-5 text-center md:px-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <span className="rotate-180 self-end">
                <QuoteIcon />
              </span>
            </div>
            <div className="absolute -bottom-24 left-1/2 right-1/2 w-fit -translate-x-1/2 space-y-5 text-center md:-bottom-28">
              <img
                src={DefaultProfile}
                alt="default"
                className="mx-auto aspect-square w-[100px] rounded-full md:w-[120px]"
              />
              <p className="text-nowrap text-lg font-black md:text-xl">Precious Micah</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
