import styled from 'styled-components';
import { Box, FlexBox } from '../../styled';
import { buildOverlayPositioning } from './overlayUtils';

const OverlayContainer = styled(Box)`
    position: absolute;
    z-index: ${({theme}) => theme.zIndex.fab};
`;

const OverlayPositionContainer = styled(FlexBox)`
    ${buildOverlayPositioning}
`;

export {
    OverlayPositionContainer,
    OverlayContainer
};