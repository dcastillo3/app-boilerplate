import { arrowSizes, propDefaults } from "../../styled/styledConsts";
import { toolTipMargins, tooltipProps } from "./tooltipConsts";

const pointerOnXAxis = pointerDirection => 
    pointerDirection === tooltipProps.pointerDirection.left || pointerDirection === tooltipProps.pointerDirection.right;

const pointerOnYAxis = pointerDirection => 
    pointerDirection === tooltipProps.pointerDirection.top || pointerDirection === tooltipProps.pointerDirection.bottom;

const buildArrowBorderSizes = (theme, pointerSize) => {
    const arrowSize = pointerSize ? pointerSize : propDefaults.arrowSize;
    const arrowBorders = arrowSizes[arrowSize];
    const arrowBorderSizes = arrowBorders.map(border => theme.spacing(border));

    return arrowBorderSizes;
};

const buildToolTipArrowStyle = ({theme, $pointerDirection, $pointerSize, $flipX, $flipY}) => {
    const [arrowDegree] = buildArrowBorderSizes(theme, $pointerSize);
    const pointerDirectionPositions = {
        left: {
            right: '100%',
            bottom: arrowDegree
        },
        right: {
            left: '100%',
            bottom: arrowDegree
        },
        top: {
            bottom: '100%',
            left: arrowDegree
        },
        bottom: {
            top: '100%',
            left: arrowDegree
        }
    };
    const toolTipArrowStyle = pointerDirectionPositions[$pointerDirection];

    if(pointerOnXAxis($pointerDirection) && $flipX) {
        toolTipArrowStyle.top = toolTipArrowStyle.bottom;
        toolTipArrowStyle.bottom = 'initial';
    };

    if(pointerOnYAxis($pointerDirection) && $flipY) {
        toolTipArrowStyle.right = toolTipArrowStyle.left;
        toolTipArrowStyle.left = 'initial';
    };

    return toolTipArrowStyle;
};

const buildToolTipMargins = (theme, pointerDirection, pointerSize) => {
    const arrowSize = pointerSize ? pointerSize : propDefaults.arrowSize;
    const [arrowDegree, arrowWidth] = arrowSizes[arrowSize];
    const initialToolTipMargins = toolTipMargins[pointerDirection];
    const calculatedToolTipMargins = initialToolTipMargins.map(margin => margin > 0 ? (margin + arrowWidth) : margin );
    const toolTipMargin = theme.spacing(...calculatedToolTipMargins);

    return toolTipMargin;
};

const buildToolTipContainerStyle = ({theme, $pointerDirection, $pointerSize, $flipX, $flipY}) => {
    const toolTipMargins = buildToolTipMargins(theme, $pointerDirection, $pointerSize);
    const positionPercentage = '100%';
    const arrowSpacing = theme.spacing(2);
    const containerPositions = {
        left: {
            left: positionPercentage,
            margin: toolTipMargins,
            bottom: arrowSpacing
        },
        right: {
            right: positionPercentage,
            margin: toolTipMargins,
            bottom: arrowSpacing
        },
        top: {
            top: positionPercentage,
            margin: toolTipMargins
        },
        bottom: {
            bottom: positionPercentage,
            margin: toolTipMargins
        }
    };
    const toolTipContainerStyle = containerPositions[$pointerDirection];

    if(pointerOnXAxis($pointerDirection) && $flipX) {
        toolTipContainerStyle.top = toolTipContainerStyle.bottom;
        toolTipContainerStyle.bottom = 'initial';
    };

    if(pointerOnYAxis($pointerDirection) && $flipY) {
        toolTipContainerStyle.right = '0px';
    };

    return toolTipContainerStyle;
};

export {
    buildToolTipArrowStyle,
    buildToolTipContainerStyle
};