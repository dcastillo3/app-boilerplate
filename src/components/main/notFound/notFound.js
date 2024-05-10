import React from 'react';
import { Text, cardProps } from '../../styled';
import { useMediaQuery } from '../../../hooks';
import { NotFoundContainer } from './notFoundStyledComponents';

function NotFound() {
    const { isDesktop } = useMediaQuery();
    const notFoundContainerPadding = isDesktop ? [5, 8] : [2];

    return (
        <NotFoundContainer $variant={cardProps.variant.background} $p={notFoundContainerPadding}>
            <Text>404 Not Found</Text>
        </NotFoundContainer>
    );
};

export default NotFound;