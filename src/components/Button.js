import React from "react";

import "components/Button.scss";

import classnames from "classnames";

export default function Button(props) {
   // let buttonClass = "button";
   // //create a new button each time we update the props 
   // if (props.confirm) {
   //    buttonClass += " button--confirm";
   // }
   // if (props.danger) {
   //    buttonClass += " button--danger";
   // }

   const buttonClass = classnames("button", {
      "button--confirm": props.confirm,
      "button--danger": props.danger
   });
   return (
      <button
         className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );

}

