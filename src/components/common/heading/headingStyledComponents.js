import styled from 'styled-components';
import { FlexBox, Span } from '../../styled';

const HeadingContainer = styled(FlexBox)`
    align-items: center;
    max-width: ${({theme, $isDesktop}) => 
        $isDesktop ? theme.spacing(88) : theme.spacing(76)};
`;

const HeadingCircleContainer = styled(Span)`
    position: relative;
    border-radius: 50%;
`;

const HeadingCircleDummySquare = styled(Span)`
    display: block;
    width: 0px;
    height: 0px;
    padding-top: 100%;
    padding-right: 100%;
`;

const HeadingCircleContent = styled(Span)`
    display: block;
    height: 0px;
    font-size: ${({theme}) => theme.typography.caption.fontSize};

    &:after, 
    &:before {
        content: "${({$content}) => $content}";
    }

    &:after {
        position: absolute;
        bottom: 50%;
        right: 50%;
        text-align: center;
        transform: translate(50%, 50%);
    }

    &:before {
        color: transparent;
    }
`;

export {
    HeadingContainer,
    HeadingCircleContainer,
    HeadingCircleDummySquare,
    HeadingCircleContent
};