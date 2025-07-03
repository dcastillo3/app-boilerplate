import React from 'react';
import { useMediaQuery } from '../../../hooks';
import { __NAME_PASCAL__Container } from './__NAME_PASCAL__StyledComponents';
import { cardProps } from '../../styled';

function __NAME_PASCAL__() {
    const { isDesktop } = useMediaQuery();
    const __NAME_PASCAL__ContainerPadding = isDesktop ? [5, 8] : [2];

    return (
        <__NAME_PASCAL__Container $variant={cardProps.variant.background} $p={__NAME_PASCAL__ContainerPadding}>
            __NAME_PASCAL__ Component
        </__NAME_PASCAL__Container>
    );
};

export default __NAME_PASCAL__;
