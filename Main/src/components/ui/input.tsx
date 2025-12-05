import * as React from "react";
import "../styles/ContactForm.scss"
import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div className="field">
      <input
        id="name"
        name="name"
        className="field__input"
        type={type}
        value={props.value}
        onChange={props.onChange}
        required
      />
      <label className="field__label" htmlFor="name">
        {props.placeholder}
      </label>
    </div>
  );
}

export { Input };
