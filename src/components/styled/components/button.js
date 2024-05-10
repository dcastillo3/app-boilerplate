import styled from 'styled-components';
import { buildButtonSize, buildHoverPalette, buildPalette, buildSpacing, buildTypography } from '../styledUtils';
import { typographyProps } from '../styledConsts';

export const Button = styled.button`
    border-radius: 3px;
    text-align: center;

    /* Style overrides last */
    ${buildButtonSize}
    ${buildPalette}
    ${buildHoverPalette}
    ${buildSpacing}
    ${(props) => buildTypography(props, typographyProps.button)}
`;

export const SemanticButton = styled.button`
    text-align: center;
    cursor: pointer;
`;