import styled from 'styled-components';
import { typographyProps } from '../styledConsts';
import { buildSpacing, buildTypography } from '../styledUtils';

export const Title = styled.h1`
    ${(props) => buildTypography(props, typographyProps.h1)}

    /* Style overrides last */
    ${buildSpacing}
`;

export const TitleMedium = styled.h2`
    ${(props) => buildTypography(props, typographyProps.h2)}

    /* Style overrides last */
    ${buildSpacing}
`;

export const TitleSmall = styled.h3`
    ${(props) => buildTypography(props, typographyProps.h3)}

    /* Style overrides last */
    ${buildSpacing}
`;

export const SubTitle = styled.b`
    ${(props) => buildTypography(props, typographyProps.subtitle1)}

    /* Style overrides last */
    ${buildSpacing}
`;