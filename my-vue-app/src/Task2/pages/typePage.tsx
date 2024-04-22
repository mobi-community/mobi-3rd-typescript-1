import React, { ComponentType } from "react";
import BooleanPage from "./boolean";
import NumberPage from "./numberPage";
import StringPage from "./stringPage";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AnyPage from "./anyPage";

const pageComponentOfType: Record<string, ComponentType> = {
  number: NumberPage,
  string: StringPage,
  boolean: BooleanPage,
  any: AnyPage,
};

const TypePage: React.ComponentType = () => {
  const { type } = useParams();
  console.log(type);
  if (!type) {
    return <div>해당하는 경로가 없습니다.</div>;
  }
  const PageComponent = pageComponentOfType[type];

  if (!PageComponent) {
    return <div>해당하는 페이지가 없습니다.</div>;
  }

  return (
    <S.Wrapper>
      <PageComponent />
    </S.Wrapper>
  );
};

export default TypePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const S = { Wrapper };
