import React from 'react';
import { Button, FlexBox, buttonProps } from '../../styled';

function Switcher({ items, handleChooseItem, activeItem, itemProp }) {
    const activeItemName = activeItem[itemProp];

    const renderSwitcherItems = items.map((item, idx) => {
        //Displays an array of objects
        const itemName = item[itemProp];
        const buttonVariant = itemName === activeItemName
            ? buttonProps.variant.secondary 
            : buttonProps.variant.background;
        const handleSwitcherClick = itemName === activeItemName ? null : () => handleChooseItem(item);

        return (
            <Button key={idx} $size={buttonProps.size.small} $variant={buttonVariant} onClick={handleSwitcherClick}>
                {itemName}
            </Button>
        );
    });

    return (
        <FlexBox>
            {renderSwitcherItems}
        </FlexBox>
    );
};

export default Switcher;