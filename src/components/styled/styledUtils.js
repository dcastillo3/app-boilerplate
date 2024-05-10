import { propDefaults, buttonSizes, arrowSizes, pointerDirectionProps, spanProps } from "./styledConsts";

const buildPalette = ({ theme, $variant = propDefaults.variant }) => ({
    background: theme.palette[$variant].main,
    color: theme.palette.text[$variant],
    transition: theme.transitions.easing.sharp
});

const buildHoverPalette = ({ theme, $variant = propDefaults.variant }) => {
    const bgHoverColor = theme.palette[$variant].light;
    const cssProps = `
        &:hover {
            background: ${bgHoverColor};
            cursor: pointer;
        }
    `;

    return cssProps;
};

const buildCardBorderRadius = ({ theme }) => {
    const borderRadius = theme.spacing(1);
    const cssProps = { 
        borderRadius
    };

    return cssProps;
};

const buildTypography = ({ theme, $truncate }, $element = propDefaults.element) => {
    const typography = theme.typography[$element];
    const cssProps = { ...typography };

    if($truncate) {
        cssProps.whiteSpace = 'noWrap'
        cssProps.overflow = 'hidden'
        cssProps.textOverflow = 'ellipsis'
    };

    return cssProps;
};

const buildFlexBox = ({$itemsPerRow, $wrap, $center}) => {
    let cssProps = ``;

    if($center) {
        cssProps += `
            justify-content: center;
            align-items: center;
        `;
    };
    
    if($wrap) cssProps += 'flex-wrap: wrap;';

    if($itemsPerRow) {
        const flexBoxWidth = Math.floor(100/$itemsPerRow);

        cssProps += `
            > * {
                flex: ${flexBoxWidth}%;
            }
        `;
    };

    return cssProps;
};

const buildGrid = ({theme, $center, $gap = propDefaults.gap, $itemSize = propDefaults.itemSize}) => {
    const cssProps = {
        gap: theme.spacing($gap),
        gridTemplateColumns: `repeat(auto-fit, ${theme.spacing($itemSize)})`
    };

    if($center) {
        cssProps.justifyContent = 'center';
        cssProps.alignItems = 'center';
    };

    return cssProps;
};

const buildSpacing = ({ theme, $m, $p}) => {
    let cssProps = {};

    if($m?.length) {
        const margin = theme.spacing(...$m);

        cssProps.margin = margin;
    };

    if($p?.length) {
        const padding = theme.spacing(...$p);

        cssProps.padding = padding;
    };

    return cssProps;
};

const buildButtonSize = ({ theme, $size }) => {
    const buttonSize = $size ? buttonSizes[$size] : buttonSizes[propDefaults.buttonSize];
    const buttonSpacing = buildSpacing({theme, $m: null, $p: buttonSize});

    return buttonSpacing;
};

const buildArrow = ({ theme, $variant, $pointerDirection, $size }) => {
    const borders = $size ? arrowSizes[$size] : arrowSizes[propDefaults.arrowSize];
    const [pointerDegree, pointerSize] = borders.map(border => theme.spacing(border));
    const arrowColor = theme.palette[$variant].main;
    const pointerDegreeCss = `${pointerDegree} solid transparent`;
    const emptyDegreeCss = '0px solid transparent';
    const pointerCss = `${pointerSize} solid ${arrowColor}`;
    let cssProps = {};

    switch ($pointerDirection) {
        case pointerDirectionProps.left: {
            cssProps = {
                borderTop: pointerDegreeCss,
                borderBottom: emptyDegreeCss,
                borderRight: pointerCss
            };

            break;
        };

        case pointerDirectionProps.right: {
            cssProps = {
                borderTop: pointerDegreeCss,
                borderBottom: emptyDegreeCss,
                borderLeft: pointerCss
            };
            
            break;
        };

        case pointerDirectionProps.top: {
            cssProps = {
                borderLeft: pointerDegreeCss,
                borderRight: emptyDegreeCss,
                borderBottom: pointerCss
            };
            
            break;
        };

        case pointerDirectionProps.bottom: {
            cssProps = {
                borderLeft: pointerDegreeCss,
                borderRight: emptyDegreeCss,
                borderTop: pointerCss
            };
            
            break;
        };
    };

    return cssProps;
};

const buildSpan = ({ $rotate }) => {
    let cssProps = {};

    if($rotate) {
        const rotation = $rotate === spanProps.rotate.right ? '8deg' : '-8deg'

        cssProps.rotate = rotation;
    };

    return cssProps;
};

export {
    buildPalette,
    buildHoverPalette,
    buildTypography,
    buildFlexBox,
    buildGrid,
    buildSpacing,
    buildButtonSize,
    buildArrow,
    buildCardBorderRadius,
    buildSpan
};