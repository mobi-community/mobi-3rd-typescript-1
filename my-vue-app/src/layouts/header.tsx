import styled from "styled-components";
import { COLOR, FONT_SIZE } from "../libs/styled-components";

const Header = () => {
  return (
    <>
      <S.MainContainer>
        <S.HeaderWrapper>
          <S.Text>TypeScript의 Type 정의하기📚</S.Text>
        </S.HeaderWrapper>
      </S.MainContainer>
    </>
  );
};
export default Header;

const MainContainer = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.SUB[200]};
`;
const HeaderWrapper = styled.div``;

const Text = styled.p`
  padding: 1rem 0;
  font-weight: 800;
  font-size: ${FONT_SIZE.lg};
  color: ${COLOR.MAIN[800]};
`;

const S = {
  MainContainer,
  HeaderWrapper,
  Text,
};
