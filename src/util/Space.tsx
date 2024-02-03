import React from 'react';
import styled from 'styled-components';
interface SpaceProps {
  width?: string;
  height?: string;
}
// Space를 margin 대신 사용
function Space({ width = 'auto', height = 'auto' }: SpaceProps) {
  return <StyledSpace width={width} height={height}></StyledSpace>;
}

const StyledSpace = styled.div<SpaceProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Space;
