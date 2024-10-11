import { createFileRoute } from '@tanstack/react-router';
import { Button } from "@/components/ui/button";
import WhiteBackground from "@/assets/images/white-background.png";
import SuccessIcon from "@/assets/icons/success-icon.svg?react";
import PdfIcon from "@/assets/icons/pdf-icon.svg?react";

export const Route = createFileRoute('/_layout/payment-success')({
  component: PaymentSuccess,
});

function PaymentSuccess() {

  return (
    <div className="flex flex-col md:py-14 md:my-8 md:items-center md:justify-center min-h-screen ">
      {/* Container for Icon and Background */}
      <div className="relative w-[345px] h-[468px] md:w-[589px] md:h-[671px] mx-auto" 
        style={{
            backgroundImage: `url(${WhiteBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
          }}>
        {/* SVG Checkmark */}
        <SuccessIcon className="w-[56px] h-[56px] md:w-[148px] md:h-[148px] absolute -top-2 left-1/2 right-1/2  -translate-x-1/2 space-y-5 text-center md:-top-10 z-20 " 
        
        />

        {/* Payment Information with White Background Image */}
        <div
          className="mt-8 pt-8 md:mt-16 md:pt-16 text-center "
          
        >
          
          <h1 className="text-[20px] md:text-[40px] leading-[28px] font-semibold">Here’s your ticket!</h1>
          <p className="text-[#474747] text-[14px] md:text-[20px] font-normal leading-[22px] md:leading-[65px] md:mt-2">
            Your payment has been successfully done.
          </p>
          <div>
            <div className="mt-6 text-[14px] md:text-[20px] font-normal leading-[22px]">Total Payment</div>
            <div className="md:mt-3 mb-3 md:mb-0 text-[24px] md:text-[36px] font-semibold leading-[32px]">₦1,000,000</div>
          </div>

          {/* Payment Details Grid */}
          <div className="grid grid-cols-2 gap-5 justify-center items-center md:mt-4 text-sm mx-auto w-fit">
            <div className='border border-[#EDEDED] p-3 grid grid-rows-2 rounded-sm gap-1'>
              <p className="text-left font-normal text-[12px] leading-[16px]">Ref Number</p>
              <p className="text-left font-medium text-[13px] leading-[18px]">000065725257</p>
            </div>
            <div className='border border-[#EDEDED] p-3 grid grid-rows-2 rounded-sm gap-1'>
              <p className="text-left font-normal text-[12px] leading-[16px]">Payment Time</p>
              <p className="text-left font-medium text-[13px] leading-[18px]">25 Feb 2023, 13:22</p>
            </div>
            <div className='border border-[#EDEDED] p-3 grid grid-rows-2 rounded-sm gap-1'>
              <p className="text-left font-normal text-[12px] leading-[16px]">Payment Method</p>
              <p className="text-left font-medium text-[13px] leading-[18px]">Bank Transfer</p>
            </div>
            <div className='border border-[#EDEDED] p-3 grid grid-rows-2 rounded-sm gap-1'>
              <p className="text-left font-normal text-[12px] leading-[16px]">Sender Name</p>
              <p className="text-left font-medium text-[13px] leading-[18px]">Antonio Roberto</p>
            </div>
          </div>

          <Button
            size="lg"
            variant="pdf"
            className="mt-3 mb-4 md:mt-6 md:mb-8 px-6 py-2 font-normal text-[14px] leading-[24px] inline-flex items-center gap-3 rounded-sm"
          >
            <PdfIcon />
            Get PDF Ticket
          </Button>
        </div>
      </div>

      {/* Return Button */}
      <button className="mt-6 mb-7 h-[52px] w-[316px] bg-[#42DCDC] py-[18px] px-[40px]">
        Return to Events
      </button>
    </div>
  );
}
