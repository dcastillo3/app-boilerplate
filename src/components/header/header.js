import React from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteByPathname } from '../../routes/routesUtils';
import { FlexBox, FlexBoxColumn, SubTitle, Text, Title, TitleSmall, cardProps } from '../styled';
import { Menu } from '../menu';
import { HeaderContainer } from './headerStyledComponents';
import { useMediaQuery } from '../../hooks';

function Header() {
    const { pathname } = useLocation();
    const { name: pageTitle } = getRouteByPathname(pathname);
    const { isDesktop } = useMediaQuery();
    const headerContainerPadding = isDesktop ? [5, 8] : [2];

    return (
        <HeaderContainer $variant={cardProps.variant.background} $p={headerContainerPadding}>
            <FlexBoxColumn>
                <FlexBox $itemsPerRow={2}>
                    <SubTitle>App Name/Logo</SubTitle>
    
                    <Menu />
                </FlexBox>
    
                <FlexBoxColumn $center>
                    <Title>Header Title</Title>
                    <TitleSmall>Header Subtext</TitleSmall>
                </FlexBoxColumn>

                <Text>{pageTitle}</Text>
            </FlexBoxColumn>
        </HeaderContainer>
    );
};

export default Header;