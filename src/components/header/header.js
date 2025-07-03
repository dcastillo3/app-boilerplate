import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRouteByPathname } from '../../routes/routesUtils';
import { SubTitle, Title, TitleMedium, TitleSmall, cardProps } from '../styled';
import { Menu, MobileMenu } from '../menu';
import { HeaderContainer, HeaderNameLogoButton } from './headerStyledComponents';
import { useMediaQuery } from '../../hooks';
import { HeaderFlexBoxContainer, HeaderLogoMenuContainer, HeaderTitleContainer } from './headerStyledComponents';
import { homePath } from './headerConsts';

function Header() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { name: pageTitle } = getRouteByPathname(pathname);
    const { isDesktop } = useMediaQuery();
    const headerLogoMenuContainerPadding = isDesktop ? [5, 8] : [2];
    const HeaderTitleComponent = isDesktop ? Title : TitleMedium;
    const HeaderSubTitleComponent = isDesktop ? TitleSmall : SubTitle;

    const handleNameLogoClick = () => {
        const homeRoute = getRouteByPathname(homePath).path;

        navigate(homeRoute);
    };

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
                        
                        <HeaderNameLogoButton onClick={handleNameLogoClick}>
                            <SubTitle>Name/Logo</SubTitle>
                        </HeaderNameLogoButton>

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