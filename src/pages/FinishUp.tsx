import React, { useEffect, useState } from "react";
import PageHead from "../components/PageHead";
import { Link } from "react-router-dom";
import { DevTool } from "@hookform/devtools";
interface FinishUpProps {
  setSelectedStep: (step: number) => void;
}
const FinishUp: React.FC<FinishUpProps> = ({ setSelectedStep }) => {
  const [subscribeInfo,setSubscribeInfo] =useState({
    plan: {
      selectedPlan: "Advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
      monthsFree: 2,
      isYearly: true,
    },
    addsOn: [
      {
        serviceTitle: "Online service",
        serviceDesc: "Access to multiplayer games",
        price: 1,
      },
      {
        serviceTitle: "Larger storage",
        serviceDesc: "Extra 1TB of cloud save",
        price: 2,
      },
    ],
  })
  useEffect(() => {
    setSelectedStep(4);
  }, []);
  
  const handleChange=()=>{
    setSubscribeInfo((prevState) => ({
      ...prevState,
      plan: {
        ...prevState.plan,
        isYearly: !prevState.plan.isYearly,
      },
    }));
  }
  useEffect(()=>{},[subscribeInfo.plan.isYearly]);
  const calculerTotal=()=>{
     if(subscribeInfo.plan.isYearly){
      let totalAddsOn=0;
      for(let i=0;i<subscribeInfo.addsOn.length;i++){
         totalAddsOn=totalAddsOn+subscribeInfo.addsOn[i].price;
      }
      totalAddsOn=totalAddsOn*(12-subscribeInfo.plan.monthsFree)+subscribeInfo.plan.yearlyPrice;
      return totalAddsOn;
     }else{
      let totalAddsOn=0;
      for(let i=0;i<subscribeInfo.addsOn.length;i++){
         totalAddsOn=totalAddsOn+subscribeInfo.addsOn[i].price;
      }
      totalAddsOn=totalAddsOn+subscribeInfo.plan.monthlyPrice;
      return totalAddsOn;
     }
  }
  return (
    <div className="  h-full flex flex-col w-full">
      <PageHead
        pageTitle="Finishing up"
        pageDesc="Double-check everything looks OK before confirming."
      />
      <div className=" mt-10 flex-1">
        <section className="flex flex-col justify-between h-full pb-4 ">
          <div className="">
            <div className=" bg-magnolia py-5 pb-3 rounded-md px-5">
              <div className=" flex flex-row justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-marine-blue ">{`${
                    subscribeInfo.plan.selectedPlan
                  }(${
                    subscribeInfo.plan.isYearly ? "Yearly" : "Monthly"
                  })`}</h3>
                  <button onClick={handleChange} className=" underline text-cool-gray hover:text-purpal-blue">
                    Change
                  </button>
                </div>
                <div>
                  <p className=" text-marine-blue text-lg font-bold">{`${
                    subscribeInfo.plan.isYearly
                      ? "$" + subscribeInfo.plan.yearlyPrice + "/yr"
                      : "$" + subscribeInfo.plan.monthlyPrice + "/mo"
                  }`}</p>
                </div>
              </div>
              <div className=" w-full h-[1.5px] bg-light-gray rounded-full mt-8"></div>
               {subscribeInfo.addsOn.map((addOn)=>{
                return(<div className=" flex flex-row justify-between items-center my-3">
                  <h4 className=" text-cool-gray">{addOn.serviceTitle}</h4>
                  <p className=" text-sm text-marine-blue">{`+$${!subscribeInfo.plan.isYearly?addOn.price+'/mo':addOn.price*(12-subscribeInfo.plan.monthsFree)+'/yr'}`}</p>
                </div>)
               })}
            </div>
             <div className=" px-5 my-5 flex flex-row justify-between items-center">
              <div>
                <p className=" text-sm text-cool-gray">{`Total (per ${subscribeInfo.plan.isYearly?'year':'month'})`}</p>
              </div>
              <div>
                <p className=" text-lg font-bold text-purpal-blue ">{`$${subscribeInfo.plan.isYearly?calculerTotal()+'/yr':calculerTotal()+'/mo'}`}</p>
              </div>
             </div>
          </div>
          <div className="  flex flex-row justify-between items-center ">
            <Link to="/pick-add-ons">
              <button
                type="button"
                className=" text-lg text-cool-gray hover:text-purpal-blue font-bold"
              >
                Go Back
              </button>
            </Link>
            <Link to="/thank-you">
              <button
                type="submit"
                className={`min-w-[80px] px-4 py-3 text-lg rounded-md font-[700] text-magnolia bg-purpal-blue`}
              >
                Confirm
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FinishUp;
