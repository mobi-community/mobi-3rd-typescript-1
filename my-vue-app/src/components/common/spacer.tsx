import styled from "styled-components";

interface SpacerProps {
  width: number;
  height: number;
  [key: string]: any;
}

const Spacer = ({ width, height, ...rest }: SpacerProps) => {
  return <S.SpacerContainer width={width} height={height} {...rest} />;
};
export default Spacer;

const SpacerContainer = styled.div<SpacerProps>`
  display: block;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  min-width: ${({ width }) => width}rem;
  min-height: ${({ height }) => height}rem;
`;

const S = {
  SpacerContainer,
};
