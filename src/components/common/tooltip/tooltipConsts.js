import { pointerDirectionProps, pointerSizeProps, variantProps } from "../../styled";

const toolTipMargins = {
    left: [0, 0, 0, 2],
    right: [0, 2, 0, 0],
    top: [2, 0, 0, 0],
    bottom: [0, 0, 2, 0]
};

const tooltipProps = {
    variant: variantProps,
    pointerDirection: pointerDirectionProps,
    pointerSize: pointerSizeProps
};

export {
    toolTipMargins,
    tooltipProps
};