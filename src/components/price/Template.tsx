import { AlignRight, ArrowRight, Check } from "lucide-react";
import React from "react";
import PriceCounter from "@/components/price/PriceCounter";
interface Card {
  title: string;
  price: number;
  isPopular: boolean | undefined;
  features: string[];
}
const Template = ({ title, price, isPopular, features }: Card) => {
  return (
    <div
      className={`border border-red-400 p-6 rounded-2xl relative ${
        isPopular && "bg-red-950 "
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="text-white font-bold px-3 py-1 rounded-full bg-red-400">
            Most popular
          </span>
        </div>
        //     <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        //   <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500 text-white">
        //     Most Popular
        //   </span>
        // </div>
      )}
      <h1 className="text-white font-bold text-2xl">{title}</h1>
      <h1 className="text-gray-500 ">
        <span className="text-3xl text-white font-bold inline">
          $<PriceCounter value={price} />
        </span>
        /mo
      </h1>
      <div className="space-y-3 p-6">
        {features.map((e, index) => (
          <p key={index} className="text-white items-center flex gap-3">
            <Check className="h-5 w-5 text-green-400" />
            {e}
          </p>
        ))}
      </div>
      <div className="py-2 px-3  rounded-md bg-red-500 hover:bg-red-700">
        <button className="text-white hover:text-[18px] hover:scale-3d font-bold transition-all duration-200">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default Template;
