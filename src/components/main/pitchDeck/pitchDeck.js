import React from 'react';
import { PitchDeckContainer } from './pitchDeckStyledComponents';
import { Text, cardProps } from '../../styled';
import { useMediaQuery } from '../../../hooks';

function PitchDeck() {
    const { isDesktop } = useMediaQuery();
    const pitchDeckContainerPadding = isDesktop ? [5, 8] : [2];

    return (
        <PitchDeckContainer $variant={cardProps.variant.background} $p={pitchDeckContainerPadding}>
            <Text>PitchDeck</Text>
        </PitchDeckContainer>
    );
};

export default PitchDeck;