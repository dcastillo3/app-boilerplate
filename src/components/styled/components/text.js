import styled from 'styled-components';
import { typographyProps } from '../styledConsts';
import { buildPalette, buildSpacing, buildSpan, buildTypography } from '../styledUtils';

export const Text = styled.p`
    ${(props) => buildTypography(props)}

    /* Style overrides last */
    ${buildSpacing}
`;

export const TextSmall = styled.p`
    ${(props) => buildTypography(props, typographyProps.body2)}

    /* Style overrides last */
    ${buildSpacing}
`;

export const TextCaption = styled.p`
    ${(props) => buildTypography(props, typographyProps.caption)}

    /* Style overrides last */
    ${buildSpacing}
`;

export const Span = styled.span`
    display: inline-block;

    /* Style overrides last */
    ${buildPalette}
    ${buildSpacing}
    ${buildSpan}
`;

export const SemanticSpan = styled.span`
    /* Style overrides last */
    ${buildSpacing}
`;