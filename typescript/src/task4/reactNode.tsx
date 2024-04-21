import { ReactNode } from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: #000;
  color: #fff;
`;

interface ReactNodee {
  children: ReactNode;
}

const TestReactNode = ({ children }: ReactNodee) => {
  return (
    <Box>
      <div>{children}</div>
    </Box>
  );
};

export default TestReactNode;
