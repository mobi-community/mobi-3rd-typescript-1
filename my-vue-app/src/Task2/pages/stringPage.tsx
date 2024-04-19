import styled from "styled-components";
import { COLOR } from "../../libs/styled-components";

interface ExampleContentProps {
  $width: number;
  children: string;
}

const StringPage = () => {
  return (
    <S.Wrapper>
      <S.TextContents>
        <h2>String이란?</h2>
        <h4>
          문자열을 나타내며, 작은따옴표('), 큰따옴표(")를 사용해서 문자열
          데이터를 감싼다. <br />
          ES6의 템플릿 문자열도 string 타입에 포함 된다.
        </h4>
      </S.TextContents>
      <S.ExampleContent>
        <h4>예시 코드</h4>
      </S.ExampleContent>
    </S.Wrapper>
  );
};
export default StringPage;

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
