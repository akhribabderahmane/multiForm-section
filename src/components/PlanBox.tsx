import React, {useEffect } from 'react'
import { UseFormSetValue,UseFormGetValues, UseFormWatch } from 'react-hook-form';
type FormValues = {
  plan: {
    selectedPlan: string;
    monthlyPrice: number;
    yearlyPrice: number;
    monthsFree: number;
    isYearly: boolean;
  };
};
interface PlanBoxProps{
  icon:React.ReactElement;
  selectedPlan:string;
  monthlyPrice:number;
  yearlyPrice:number;
  monthsFree:number;
  isYearly:boolean;
  isSelected:boolean;
  setValue: UseFormSetValue<FormValues>;
  setPlanSelected:(plan:string)=>void;
  getValues: UseFormGetValues<FormValues>;
  watch:UseFormWatch<FormValues>;
}

  const PlanBox:React.FC<PlanBoxProps> = ({icon,selectedPlan,monthlyPrice,yearlyPrice,monthsFree,isYearly,isSelected,setValue,setPlanSelected,getValues,watch}) => {
   const handleClick=()=>{
      setValue('plan',{
        selectedPlan: selectedPlan,
        monthlyPrice: monthlyPrice,
        yearlyPrice: yearlyPrice,
        monthsFree: monthsFree,
        isYearly:getValues('plan.isYearly'),
      });
      setPlanSelected(selectedPlan);
   }
  useEffect(()=>{
  },[watch('plan.isYearly')])
  return (
    <button type='button' onClick={handleClick} className={`border-[2px]  ${isSelected?"border-purpal-blue":"border-light-gray"} rounded-md basis-1/3 pl-4 py-5 flex flex-col gap-12 hover:border-purpal-blue `}>
      <div>
        {icon}
      </div>
      <div className=' text-left'>
        <h2 className=' text-marine-blue font-semibold capitalize text-lg'>{selectedPlan}</h2>
        <p className=' text-cool-gray font-[500]'>{isYearly?`$${monthlyPrice}/mo`:`$${yearlyPrice}/yr`}</p>
        {getValues('plan.isYearly') && <p className=' text-sm text-marine-blue '>{monthsFree} months Free</p>}
      </div>
    </button>
  )
}

export default PlanBox