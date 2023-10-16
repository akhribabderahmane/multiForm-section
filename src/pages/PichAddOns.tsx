import { Link } from "react-router-dom";
import PageHead from "../components/PageHead";
import CheckItem from "../components/CheckItem";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
interface PickAddsOnProps {
  setSelectedStep: (step: number) => void;
}
type FormValues = {
  services: {
    serviceTitle: string;
    serviceDesc: string;
    price: number;
  }[];
};

const PichAddOns:React.FC<PickAddsOnProps> = ({setSelectedStep}) => {
  const form = useForm<FormValues>({
    defaultValues:{
      services:[]
    },
    mode: "onChange",
  });
  const {
    register,
    control,
    formState,
    handleSubmit,
    setValue,
    getValues,
    watch,
  } = form;
  useEffect(()=>{
    setSelectedStep(3)
  },[]);
  const onSubmit=()=>{
    console.log('pick add ons data:',getValues('services'));
  }
  return (
    <div className="  h-full flex flex-col w-full">
      <PageHead
        pageTitle="Pick add-ons"
        pageDesc="Add-ons help enhance your gaming experience."
      />
      <div className=" mt-10 flex-1">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between h-full pb-4 ">
          <section className=" flex flex-col gap-2" {...register("services")}>
            <CheckItem
              setValue={setValue}
              getValues={getValues}
              watch={watch}
              title={"Online service"}
              description={"Access to multiplayer games"}
              price={1}
            />
             <CheckItem
              setValue={setValue}
              getValues={getValues}
              watch={watch}
              title={"Larger storage"}
              description={"Extra 1TB of cloud save"}
              price={2}
            />
             <CheckItem
              setValue={setValue}
              getValues={getValues}
              watch={watch}
              title={"Customizable Profile"}
              description={"Custom theme on your profile"}
              price={1}
            />
          </section>
          <div className="  flex flex-row justify-between items-center ">
            <Link to="/select-plan">
              <button
                type="button"
                className=" text-lg text-cool-gray hover:text-marine-blue font-bold"
              >
                Go Back
              </button>
            </Link>
            <Link to="/summary">
              <button
                type="submit"
                className={`min-w-[80px] px-4 py-3 text-lg rounded-md font-[700] text-magnolia bg-marine-blue`}
              >
                Next step
              </button>
            </Link>
          </div>
        </form>
      </div>
      <DevTool control={control} />
    </div>
  );
};

export default PichAddOns;
