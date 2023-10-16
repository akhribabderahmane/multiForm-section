import PageHead from "../components/PageHead";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as React from "react";
import { useState,useEffect } from "react";

interface PersonalInfoProps {
  setSelectedStep: (step: number) => void;
}
type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
};
const PersonalInfo: React.FC<PersonalInfoProps> = ({ setSelectedStep }) => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    mode: "onChange",
  });
  const { register, control, formState, handleSubmit } = form;
  const { errors, isValid } = formState;
  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFocused2, setIsFocused2] = useState<boolean>(false);
  const [isFocused3, setIsFocused3] = useState<boolean>(false);
  useEffect(()=>{ setSelectedStep(1)},[])
  return (
    <div className="  h-full flex flex-col w-full">
      <PageHead
        pageTitle="Personal Info"
        pageDesc="Please provide your name, email address, and phone number."
      />
      <div className=" mt-10 flex-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between h-full pb-4 "
        >
          <section className=" space-y-2">
            {/* Name field  */}
            <div className=" flex flex-col gap-1 ">
              <div className=" flex flex-row items-center justify-between">
                <label className=" text-marine-blue text-lg" htmlFor="name">
                  Name
                </label>
                <p className=" text-red-600 text-sm font-[700]">
                  {errors.name?.message}
                </p>
              </div>
              <div className=" w-full">
                <input
                  className={`w-full px-2 py-2 text-lg outline-none border-[2px]  ${
                    errors.name ? "border-red-600" : "border-light-gray"
                  } ${
                    isFocused ? "border-marine-blue" : ""
                  } rounded-md text-marine-blue font-semibold`}
                  type="text"
                  id="name"
                  placeholder="e.g. Stephen King"
                  onFocus={() => setIsFocused(true)}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "This Field is required",
                    },
                  })}
                  onBlur={() => setIsFocused(false)}
                />
              </div>
            </div>

            {/* email field */}
            <div className=" flex flex-col gap-1 ">
              <div className=" flex flex-row items-center justify-between">
                <label className=" text-marine-blue text-lg" htmlFor="email">
                  Email
                </label>
                <p className=" text-red-600 text-sm font-[700]">
                  {errors.email?.message}
                </p>
              </div>
              <div className=" w-full">
                <input
                  className={`w-full px-2 py-2 text-lg outline-none border-[2px]  ${
                    errors.email ? "border-red-600" : "border-light-gray"
                  } ${
                    isFocused2 ? "border-marine-blue" : ""
                  } rounded-md text-marine-blue font-semibold`}
                  type="text"
                  id="email"
                  placeholder="e.g. stephenking@lorem"
                  onFocus={() => setIsFocused2(true)}
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This Field is required",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "invalid mail format",
                    },
                  })}
                  onBlur={() => setIsFocused2(false)}
                />
              </div>
            </div>

            {/* phone field */}

            <div className=" flex flex-col gap-1 ">
              <div className=" flex flex-row items-center justify-between">
                <label
                  className=" text-marine-blue text-lg"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <p className=" text-red-600 text-sm font-[700]">
                  {errors.phoneNumber?.message}
                </p>
              </div>
              <div className=" w-full">
                <input
                  className={`w-full px-2 py-2 text-lg outline-none border-[2px]  ${
                    errors.phoneNumber ? "border-red-600" : "border-light-gray"
                  } ${
                    isFocused3 ? "border-marine-blue" : ""
                  } rounded-md text-marine-blue font-semibold`}
                  type="text"
                  id="phoneNumber"
                  placeholder="e.g. +1 234 567 890"
                  onFocus={() => setIsFocused3(true)}
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "This Field is required",
                    },
                    pattern: {
                      value: /^\+\d{1,3}\s?\d{3,14}$/,
                      message: "invalid phone Number format",
                    },
                  })}
                  onBlur={() => setIsFocused3(false)}
                />
              </div>
            </div>
          </section>
          <div className=" self-end justify-end ">
            <Link to="./select-plan">
              <button
                onClick={() => setSelectedStep(2)}
                disabled={!isValid}
                type="submit"
                className={`min-w-[80px] px-4 py-3 text-lg rounded-md font-[700] text-magnolia bg-marine-blue ${
                  isValid ? "" : "opacity-80"
                }`}
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

export default PersonalInfo;
