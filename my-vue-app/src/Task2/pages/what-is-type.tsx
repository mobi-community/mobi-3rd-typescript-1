import styled from "styled-components";
import { COLOR, FONT_SIZE } from "../../libs/styled-components";
import { useNavigate } from "react-router-dom";

const WhatIsType = () => {
  const navigate = useNavigate();
  const generalTypeArr: string[] = [
    "number",
    "string",
    "boolean",
    "any",
    "object",
    "array",
    "unknown",
    "union",
    "conditional",
    "type",
    "alias",
    "interface",
  ];

  const unionTypeArr: string[] = [
    "enum",
    "as const",
    "record",
    "partial",
    "omit",
    "pick",
    "extract",
    "returntype",
    "optional",
    "satisfies",
    "generic",
  ];

  const onClickType = (type: string) => {
    navigate(`/types/${type}`);
  };
  return (
    <S.Wrapper>
      <S.Title>각 Type의 개념에 대해 알아보기</S.Title>
      <S.NaviContainer>
        <S.Navi>
          <S.TypeTitle>General Type</S.TypeTitle>
          <S.NaviList>
            {generalTypeArr.map((type, index) => (
              <S.NaviListItem key={index} onClick={() => onClickType(type)}>
                {type}
              </S.NaviListItem>
            ))}
          </S.NaviList>
        </S.Navi>
        <S.Navi>
          <S.TypeTitle>Union Type</S.TypeTitle>
          <S.NaviList>
            {unionTypeArr.map((type, index) => (
              <S.NaviListItem key={index} onClick={() => onClickType(type)}>
                {type}
              </S.NaviListItem>
            ))}
          </S.NaviList>
        </S.Navi>
      </S.NaviContainer>
    </S.Wrapper>
  );
};
export default WhatIsType;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2``;
const TypeTitle = styled.h2`
  color: ${COLOR.PALETTE.orange.base};
`;
const NaviContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Navi = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  padding: 10px;
`;

const NaviList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const NaviListItem = styled.li`
  margin-bottom: 5px;
  font-size: ${FONT_SIZE.sm};
  cursor: pointer;

  &:hover {
    color: ${COLOR.PALETTE.orange.light};
  }
`;

const S = {
  Wrapper,
  Title,
  TypeTitle,
  NaviContainer,
  Navi,
  NaviList,
  NaviListItem,
};
