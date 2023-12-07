import React from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.title}</button>;
};

export default Button;
