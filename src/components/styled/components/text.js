import styled from 'styled-components';
import { typographyProps } from '../styledConsts';
import { buildPalette, buildSpacing, buildSpan, buildTypography } from '../styledUtils';

export const Text = styled.p`
    ${(props) => buildTypography(props)}
`;

export const TextSmall = styled.p`
    ${(props) => buildTypography(props, typographyProps.body2)}
`;

export const TextCaption = styled.p`
    ${(props) => buildTypography(props, typographyProps.caption)}
`;

export const Span = styled.span`
    display: inline-block;

    /* Style overrides last */
    ${buildPalette}
    ${buildSpacing}
    ${buildSpan}
`;