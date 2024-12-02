"use client";

import {useFormStatus} from "react-dom";

export default function MealFormSubmit() {
  const {pending} = useFormStatus(); //only works within the same client side component
  return (
    <button disabled={pending}>
      {pending? "Submitting..." : "Share Meal"}
    </button>
  )
}