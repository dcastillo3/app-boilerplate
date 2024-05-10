import React from 'react';
import { Text, cardProps } from '../../styled';
import { useMediaQuery } from '../../../hooks';
import { DonateContainer } from './donateStyledComponents';

function Donate() {
    const { isDesktop } = useMediaQuery();
    const donateContainerPadding = isDesktop ? [5, 8] : [2];

    return (
        <DonateContainer $variant={cardProps.variant.background} $p={donateContainerPadding}>
            <Text>Donate</Text>
        </DonateContainer>
    );
};

export default Donate;