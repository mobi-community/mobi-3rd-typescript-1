import styled from "styled-components";
import { COLOR } from "../../libs/styled-components";

interface ExampleContentProps {
  $width: number;
  children: string;
}

interface ExamProps {
  width: number;
  height: number;
}

const NumberPage = () => {
  const examCircleCode = `<S.ExamCircle width={5} height={5} />`;
  return (
    <S.Wrapper>
      <S.TextContents>
        <h2>Number란?</h2>
        <h4>
          모든 숫자를 지원하는 type이다. <br />
          숫자 형태이며, 16진수, 10진수, 8진수, 2진수 리터럴 지원한다.
        </h4>
      </S.TextContents>
      <S.ExampleContent width={30}>
        <h4>예시 코드</h4>
        <pre>
          <code>
            interface ExamProps &#123;
            <br />
            &nbsp;&nbsp;width: number;
            <br />
            &nbsp;&nbsp;height: number;
            <br />
            &#125;
            <br />
            <br />
            const ExamCircle = styled.div&#60;ExamProps&#62;`
            <br />
            &nbsp;&nbsp;width: $&#123;(&#123; width &#125;)&#125;rem;
            <br />
            &nbsp;&nbsp;height: $&#123;(&#123; height &#125;)&#125;rem;
            <br />
            &nbsp;&nbsp;border: 1px solid ${COLOR.COMMON[200]};
            <br />
            &nbsp;&nbsp;border-radius: 50%;
            <br />`
            <br />
          </code>
        </pre>

        <h4>코드 실행</h4>
        <pre>
          <code>{examCircleCode}</code>
        </pre>
        <S.ExamCircle width={5} height={5} />
      </S.ExampleContent>
    </S.Wrapper>
  );
};
export default NumberPage;

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

const ExamCircle = styled.div<ExamProps>`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  border: 1px solid ${COLOR.COMMON[200]};
  border-radius: 50%;
`;

const S = { Wrapper, TextContents, ExampleContent, ExamCircle };
