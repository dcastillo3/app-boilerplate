import React from 'react';
import { Text, cardProps } from '../../styled';
import { useMediaQuery } from '../../../hooks';
import { BiographyContainer } from './biographyStyledComponents';

function Biography() {
    const { isDesktop } = useMediaQuery();
    const biographyContainerPadding = isDesktop ? [5, 8] : [2];

    return (
        <BiographyContainer $variant={cardProps.variant.background} $p={biographyContainerPadding}>
            <Text>Biography</Text>
        </BiographyContainer>
    );
};

export default Biography;