import { UseFormGetValues, UseFormSetValue } from "react-hook-form";

type FormValues={
  services:{
    serviceTitle:string;
    serviceDesc:string;
    price:number;
  }[];
}
const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="9"
    viewBox="0 0 12 9"
  >
    <path
      fill="none"
      stroke="#FFF"
      stroke-width="2"
      d="m1 4 3.433 3.433L10.866 1"
    />
  </svg>
);
interface ChecksBoxProps{
  isChecked:boolean;
  setIsChecked:(isChecked:boolean)=>void;
  getValues:UseFormGetValues<FormValues>;
  setValue:UseFormSetValue<FormValues>;
  title:string;
  description:string;
  price:number;
}
const checksBox:React.FC<ChecksBoxProps> = ({isChecked,setIsChecked,getValues,setValue,title,description,price}) => {
   const handleClick=()=>{
    if(!isChecked){
      setIsChecked(true);
      if(getValues('services').length !== 0){
         setValue('services',[...getValues('services'),{serviceTitle:title,serviceDesc:description,price:price}])
      }else{
        setValue('services',[{serviceTitle:title,serviceDesc:description,price:price}])
      }
    }else{
      setIsChecked(false);
      const newServices=getValues('services').filter((service)=> service.serviceTitle!== title);
      setValue('services',newServices);
    }
    
   }
  return (
    <button
      type="button"
      onClick={handleClick}
      className={` p-[2px] border-[2px]  aspect-square rounded-sm ${
        isChecked ? " bg-purpal-blue border-purpal-blue" : " border-cool-gray"
      }`}
    >
      {checkIcon}
    </button>
  );
};

export default checksBox;
