import React from 'react';
import { OverlayContainer, OverlayPositionContainer } from './overlayStyledComponents';

function Overlay({ children, overlayComponent, overlayPositionX, overlayPositionY }) {
    return (
        <OverlayPositionContainer $overlayPositionX={overlayPositionX} $overlayPositionY={overlayPositionY}>
            <OverlayContainer>
                {overlayComponent()}
            </OverlayContainer>
            {children}
        </OverlayPositionContainer>
    );
};

export default Overlay;