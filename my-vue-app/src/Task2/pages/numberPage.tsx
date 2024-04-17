import styled from "styled-components";
import { ExampleContent } from "../../components/common";

const NumberPage = () => {
  return (
    <S.Wrapper>
      <S.TextContents>
        <h2>Number란?</h2>
        <h4>
          모든 숫자를 지원하는 type이다. <br />
          숫자 형태이며, 16진수, 10진수, 8진수, 2진수 리터럴 지원한다.
        </h4>
      </S.TextContents>
      <ExampleContent width={30} example="예시">
        이게맞나
      </ExampleContent>
    </S.Wrapper>
  );
};
export default NumberPage;

const Wrapper = styled.div`
  width: 50rem;
`;
const TextContents = styled.div``;

const S = { Wrapper, TextContents };
