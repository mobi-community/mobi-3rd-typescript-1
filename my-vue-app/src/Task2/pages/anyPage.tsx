import styled from "styled-components";
import { COLOR } from "../../libs/styled-components";

interface ExampleContentProps {
  $width: number;
  children: string;
}

const AnyPage = () => {
  return (
    <S.Wrapper>
      <S.TextContents>
        <h2>Any란?</h2>
        <h4>
          모든 타입에 대해서 허용하는 타입이다. <br />
          알지 못하는 타입을 표현해야하는 경우가 존재할 수 있기 때문에 존재한다.{" "}
          <br />* 타입의 안정성을 보장하지 않아서 권장하지 않는다!!
        </h4>
      </S.TextContents>
      <S.ExampleContent>
        <h4>예시 코드</h4>
      </S.ExampleContent>
    </S.Wrapper>
  );
};
export default AnyPage;

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
