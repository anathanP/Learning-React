import { useState } from "react";
import styled from "styled-components";

interface Props {
  children: string;
  max_char?: number;
}

const Button = styled.button`
  display: inline-block;
  border: 0;
  padding: 13px 9px;
  background-color: blue;
  color: white;
`;

const ExpandableText = ({ children, max_char = 100 }: Props) => {
  if (children.length <= max_char) return <p>{children}</p>;

  const [show, setShow] = useState(false);
  const clickHandle = () => {
    setShow(!show);
  };
  const button_text = show ? "Less" : "More";
  const text = show ? children : children.slice(0, max_char) + "...";
  return (
    <>
      <p>
        {text}
        <Button onClick={clickHandle}>{button_text}</Button>
      </p>
    </>
  );
};

export default ExpandableText;
