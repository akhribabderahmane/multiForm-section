import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import PersonalInfo from "./pages/PersonalInfo";
import FinishUp from "./pages/FinishUp";
import PichAddOns from "./pages/PichAddOns";
import SelectPlan from "./pages/SelectPlan";
import ThankYouPage from "./pages/ThankYouPage";
import { useState } from "react";
function App() {
  const [selectedStep, setSelectedStep] = useState<number>(1);
  return (
    <main className="min-h-screen bg-magnolia flex items-center justify-center font-myUbuntu-font">
      <div className=" flex flex-row gap-x-4 p-3 bg-white rounded-3xl w-[900px] h-[560px] shadow-xl">
        <SideBar selectedStep={selectedStep} setSelectedStep={setSelectedStep}/>
        <section className="pl-14 pt-10 w-[70%] pr-20">
          <Routes>
            <Route path="/*" element={<PersonalInfo setSelectedStep={setSelectedStep} />} />
            <Route path="/select-plan" element={<SelectPlan setSelectedStep={setSelectedStep} />} />
            <Route path="/pick-add-ons" element={<PichAddOns setSelectedStep={setSelectedStep} />} />
            <Route path="/summary" element={<FinishUp setSelectedStep={setSelectedStep} />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default App;
