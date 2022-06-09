import React, { useState } from "react";

export const ControlledOnboardingFlow = ({
  children,
  currentIndex,
  onNext,
  name,
}) => {
  const currentChild = React.Children.toArray(children)[currentIndex];

  const goToNext = (stepData) => {
    console.log("in control flow", stepData);
    onNext(stepData);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      goToNext,
      name,
    });
  }

  return currentChild;
};
