import React from "react";
import styled from "styled-components";

interface SpacerProps {
    width?: string;
    height?: string;
}

const Space = styled.div.attrs<SpacerProps>((props) => ({
    style: {
        width: props.width,
        height: props.height,
    },
}))<SpacerProps>``;

const Spacer: React.FC<SpacerProps> = ({ width, height }) => {
    return <Space width={width} height={height} />;
};
export default Spacer;
