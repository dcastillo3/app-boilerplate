import { Icon } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuItemContainer } from './menuStyledComponents';
import { Box, FlexBoxColumn } from '../styled';

function MenuItem({name, path, icon, callback}) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isActive = pathname === path;

    const handleMenuItemClick = path => {
        navigate(path);
        
        if(callback) callback();
    };

    return (
        <MenuItemContainer active={isActive} onClick={() => handleMenuItemClick(path)}>
            <FlexBoxColumn $p={[2, 4]} $center>
                <Icon component={icon} />

                <Box>
                    {name}
                </Box>
            </FlexBoxColumn>
        </MenuItemContainer>
    );
};

export default MenuItem;