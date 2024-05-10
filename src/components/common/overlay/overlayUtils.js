import { defaultOverlayPositionX, defaultOverlayPositionY } from "./overlayConsts";

const buildOverlayPositioning = ({ $overlayPositionX = defaultOverlayPositionX, $overlayPositionY = defaultOverlayPositionY }) => {
    const cssProps = {
        justifyContent: $overlayPositionX,
        alignItems: $overlayPositionY
    };

    return cssProps;
};

export {
    buildOverlayPositioning
};