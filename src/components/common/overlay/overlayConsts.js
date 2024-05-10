const overlayProps = {
    overlayPositionX: {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end'
    },
    overlayPositionY: {
        top: 'flex-start',
        center: 'center',
        bottom: 'flex-end'
    }
};

const defaultOverlayPositionX = overlayProps.overlayPositionX.center;

const defaultOverlayPositionY = overlayProps.overlayPositionY.center;

export {
    overlayProps,
    defaultOverlayPositionX,
    defaultOverlayPositionY
};