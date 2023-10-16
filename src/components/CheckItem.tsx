import React, {useState } from "react";
import ChecksBox from "./tinyComponents/ChecksBox";
import {
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
type FormValues = {
  services: {
    serviceTitle: string;
    serviceDesc: string;
    price: number;
  }[];
};
interface CheckItemProps {
  title: string;
  description: string;
  price: number;
  setValue: UseFormSetValue<FormValues>;
  getValues: UseFormGetValues<FormValues>;
}

const CheckItem: React.FC<CheckItemProps> = ({
  setValue,
  getValues,
  title,
  description,
  price,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div
      className={`border-[2px] border-cool-gray rounded-md flex flex-row items-center justify-between px-4 py-4 ${
        isChecked ? "border-purpal-blue  bg-magnolia" : "border-cool-gray"
      } `}
    >
      <div className=" flex flex-row gap-4 items-center">
        <div>
          <ChecksBox
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            getValues={getValues}
            setValue={setValue}
            title={title}
            description={description}
            price={price}
          />
        </div>
        <div>
          <h2 className=" text-marine-blue text-lg font-semibold ">{title}</h2>
          <p className=" text-[16px] text-cool-gray ">{description}</p>
        </div>
      </div>
      <div>
        <p className=" text-sm text-purpal-blue">{`$${price}/mo`}</p>
      </div>
    </div>
  );
};

export default CheckItem;
