import styled from 'styled-components';

export const Anchor = styled.a`
    ${({theme}) => `color: ${theme.palette.text.link}`};

    &:hover {
        text-decoration: underline;
    }
`;