import React from 'react';
import { Box, TitleMedium, TitleSmall } from '../../styled';
import { HeadingContainer } from './headingStyledComponents';
import { buildStyledWord, formatHeading } from './headingUtils';
import { useMediaQuery } from '../../../hooks';

function Heading({heading, variant, headingStyle}) {
    const { isDesktop } = useMediaQuery();
    const {
        headingFirstWords,
        secondToLastWord,
        lastWord
    } = formatHeading(heading);
    const styledWord = buildStyledWord(headingStyle, variant, secondToLastWord, isDesktop);
    
    const headingContent = (
        <Box>
            {headingFirstWords} {styledWord} {lastWord}
        </Box>
    );

    const mediumHeading = (
        <TitleMedium>
            {headingContent}
        </TitleMedium>
    );
    
    const smallHeading = (
        <TitleSmall>
            {headingContent}
        </TitleSmall>
    );

    const renderHeading = isDesktop ? mediumHeading : smallHeading;

    return (
        <HeadingContainer $m={[10, 0]} $wrap={true} $isDesktop={isDesktop}>
            {renderHeading}
        </HeadingContainer>
    );
};

export default Heading;