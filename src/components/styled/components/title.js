import styled from 'styled-components';
import { typographyProps } from '../styledConsts';
import { buildTypography } from '../styledUtils';

export const Title = styled.h1`
    ${(props) => buildTypography(props, typographyProps.h1)}
`;

export const TitleMedium = styled.h2`
    ${(props) => buildTypography(props, typographyProps.h2)}
`;

export const TitleSmall = styled.h3`
    ${(props) => buildTypography(props, typographyProps.h3)}
`;

export const SubTitle = styled.b`
    ${(props) => buildTypography(props, typographyProps.subtitle1)}
`;