import styled from "styled-components";
import { COLOR } from "../../libs/styled-components";

interface ExampleContentProps {
  $width: number;
  children: string;
}

const BooleanPage = () => {
  return (
    <S.Wrapper>
      <S.TextContents>
        <h2>Boolean이란?</h2>
        <h4>참(true)/거짓(false)을 나타내는 type이다.</h4>
      </S.TextContents>
      <S.ExampleContent>
        <h4>예시 코드</h4>
      </S.ExampleContent>
    </S.Wrapper>
  );
};
export default BooleanPage;

const Wrapper = styled.div`
  width: 50rem;
`;
const TextContents = styled.div``;

const ExampleContent = styled.div<ExampleContentProps>`
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

const S = { Wrapper, TextContents, ExampleContent };
