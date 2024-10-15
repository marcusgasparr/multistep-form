import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i, e) {
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  return {
    currentStep,
    currentComponents: steps[currentStep],
    changeStep,
    isFirstStep: currentStep === 0 ? true : false,
    isLastStep: currentStep + 2 === steps.length ? true : false,
    isSendStep: currentStep + 1 === steps.length ? true : false,
  };
}
