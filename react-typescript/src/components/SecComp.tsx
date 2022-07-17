import React from "react";

type Props = {
  name: string;
};

const SecComp = (props: Props) => {
  return (
    <div>
      <p>Meu segundo componente</p>
      {/* Destructuring props */}
      <p>O nome dele é {props.name}</p>
    </div>
  );
};

export default SecComp;
