const buttonSizes = {
    small: [1, 3],
    medium: [3, 8],
    large: [5, 6]
};

const arrowSizes = {
    small: [4, 5],
    medium: [5, 6],
    large: [7, 8]
};

const typographyProps = {
    body1: 'body1',
    body2: 'body2',
    caption: 'caption',
    label: 'label',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    button: 'button',
    subtitle1: 'subtitle1'
};

const variantProps = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    warning: 'warning',
    error: 'error',
    info: 'info',
    background: 'background',
    backgroundLight: 'backgroundLight'
};

const pointerDirectionProps = {
    left: 'left',
    right: 'right',
    top: 'top',
    bottom: 'bottom'
};

const pointerSizeProps = {
    small: 'small',
    medium: 'medium',
    large: 'large'
};

const arrowProps = {
    variant: variantProps,
    pointerDirection: pointerDirectionProps,
    size: pointerSizeProps
};

const cardProps = {
    variant: variantProps
};

const buttonProps = {
    variant: variantProps,
    size: {
        small: 'small',
        medium: 'medium',
        large: 'large'
    }
};

const spanProps = {
    variant: variantProps,
    rotate: {
        right: 'right',
        left: 'left'
    }
};

const propDefaults = {
    gap: 4,
    itemSize: 36,
    element: typographyProps.body1,
    variant: variantProps.primary,
    arrowSize: arrowProps.size.medium,
    buttonSize: buttonProps.size.medium
};

export {
    buttonSizes,
    arrowSizes,
    typographyProps,
    variantProps,
    pointerDirectionProps,
    pointerSizeProps,
    arrowProps,
    cardProps,
    buttonProps,
    spanProps,
    propDefaults
};