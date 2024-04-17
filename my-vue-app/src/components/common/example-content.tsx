import styled from "styled-components";
import { COLOR } from "../../libs/styled-components";

interface ExampleContentProps {
  width: number;
  example: string;
  children: string;
}

const ExampleContent = ({
  width = 30,
  example,
  ...rest
}: ExampleContentProps) => {
  return (
    <S.Wrapper width={width} {...rest}>
      {example}
    </S.Wrapper>
  );
};
export default ExampleContent;

const Wrapper = styled.div<ExampleContentProps>`
  width: ${({ $width }) => {
    return $width;
  }};
  min-width: 15rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLOR.MAIN[800]};
  /* border-radius: 1rem; */
  padding: 1rem;
  color: ${COLOR.MAIN[800]};
  background-color: ${COLOR.COMMON[1000]};
`;

const S = { Wrapper };
