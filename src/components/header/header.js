import React from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteByPathname } from '../../routes/routesUtils';
import { SubTitle, Title, TitleMedium, TitleSmall, cardProps } from '../styled';
import { Menu, MobileMenu } from '../menu';
import { HeaderContainer } from './headerStyledComponents';
import { useMediaQuery } from '../../hooks';
import { HeaderFlexBoxContainer, HeaderLogoMenuContainer, HeaderTitleContainer } from './headerStyledComponents';

function Header() {
    const { pathname } = useLocation();
    const { name: pageTitle } = getRouteByPathname(pathname);
    const { isDesktop } = useMediaQuery();
    const headerLogoMenuContainerPadding = isDesktop ? [5, 8] : [2];
    const HeaderTitleComponent = isDesktop ? Title : TitleMedium;
    const HeaderSubTitleComponent = isDesktop ? TitleSmall : SubTitle;

    const renderDesktopMenu = isDesktop && (
        <Menu />
    );

    const renderMobileMenu = !isDesktop && (
        <MobileMenu />
    );

    return (
        <HeaderContainer>
                <HeaderLogoMenuContainer $variant={cardProps.variant.background} $p={headerLogoMenuContainerPadding}>
                    <HeaderFlexBoxContainer $isDesktop={isDesktop}>
                        {renderMobileMenu}

                        <SubTitle>Name/Logo</SubTitle>

                        {renderDesktopMenu}
                    </HeaderFlexBoxContainer>
                </HeaderLogoMenuContainer>
    
                <HeaderTitleContainer $p={[8, 0]} $center>
                    <HeaderTitleComponent>{pageTitle}</HeaderTitleComponent>
                    <HeaderSubTitleComponent>Header Subtext</HeaderSubTitleComponent>
                </HeaderTitleContainer>
        </HeaderContainer>
    );
};

export default Header;