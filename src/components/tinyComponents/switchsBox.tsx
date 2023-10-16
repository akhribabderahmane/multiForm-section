import React, { useEffect } from "react";
import { UseFormSetValue,UseFormGetValues, UseFormWatch } from "react-hook-form";
type FormValues = {
  plan: {
    selectedPlan: string;
    monthlyPrice: number;
    yearlyPrice: number;
    monthsFree: number;
    isYearly: boolean;
  };
};
interface SwitchsBoxProps {
  setValue: UseFormSetValue<FormValues>;
  getValues: UseFormGetValues<FormValues>;
  watch:UseFormWatch<FormValues>;
}
const switchsBox: React.FC<SwitchsBoxProps> = ({
  setValue,
  getValues,
  watch
}) => {
  const handleClick = () => {
    if (getValues('plan.isYearly')) {
      setValue("plan.isYearly", false);
    } else {
      setValue("plan.isYearly", true);
    }
  };
  useEffect(()=>{},[watch('plan.isYearly')])
  return (
    <div className=" flex flex-row gap-2">
      <p
        className={` font-bold ${
          getValues("plan.isYearly") ? " text-cool-gray" : "text-marine-blue"
        }`}
      >
        Monthly
      </p>
      <button
        onClick={handleClick}
        type="button"
        className={`w-14 h-7 p-1 bg-marine-blue rounded-full flex ${
          getValues("plan.isYearly") ? "justify-end" : ""
        }`}
      >
        <div className="bg-pastel-blue  rounded-full h-full aspect-square"></div>
      </button>
      <p
        className={` font-bold ${
          !getValues("plan.isYearly") ? " text-cool-gray" : "text-marine-blue"
        }`}
      >
        Yearly
      </p>
    </div>
  );
};

export default switchsBox;
