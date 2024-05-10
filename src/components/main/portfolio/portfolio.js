import React, { useContext, useState } from 'react';
import { DataContext } from '../../../context';
import { Modal, modalProps } from '../../common';
import { Box, Button, Text, cardProps } from '../../styled';
import { useMediaQuery } from '../../../hooks';
import { PortfolioContainer } from './portfolioStyledComponents';

function Portfolio() {
    const [showModal, setShowModal] = useState(false);
    const { data } = useContext(DataContext);
    const { isDesktop } = useMediaQuery();
    const portfolioContainerPadding = isDesktop ? [5, 8] : [2];

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const modalComponent = (
        <Box $p={[8, 8]}>
            <Text>
                Express Data: 
            </Text>

            <Text>
                {JSON.stringify(data)}
            </Text>
        </Box>
    );

    return (
        <PortfolioContainer $variant={cardProps.variant.background} $p={portfolioContainerPadding}>
            <Modal showModal={showModal} variant={modalProps.variant.background} modalComponent={() => modalComponent} handleToggleModal={toggleModal} center>
                
                <Button $p={[2,2]}>Open Modal To See Data</Button>
            </Modal>

        </PortfolioContainer>
    );
};

export default Portfolio;