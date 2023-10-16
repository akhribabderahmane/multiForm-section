import { Link } from "react-router-dom";
interface SideItemProps {
  stepTitle: string;
  stepNum: number;
  selected: boolean;
  setSelectedStep: (step: number) => void;
  linkTo: string;
}
const SideItem: React.FC<SideItemProps> = ({
  stepTitle,
  stepNum,
  selected,
  setSelectedStep,
  linkTo,
}) => {
  return (
    <div className=" flex flex-row gap-3 items-center uppercase">
      <div>
        <Link to={linkTo}>
          <button
            onClick={() => setSelectedStep(stepNum)}
            className={` w-8 h-8 flex items-center justify-center rounded-full border-2 border-magnolia font-[700] ${
              selected ? "text-purpal-blue bg-magnolia" : "text-magnolia"
            } text-lg"`}
          >
            {stepNum}
          </button>
        </Link>
      </div>
      <div>
        <p className=" text-light-gray opacity-80 text-sm">Step {stepNum}</p>
        <p className=" text-magnolia font-[700]">{stepTitle}</p>
      </div>
    </div>
  );
};

export default SideItem;
