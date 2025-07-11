import styled from "styled-components";
import { Card, Box, FlexBox, FlexBoxColumn, SemanticButton } from "../styled";

const HeaderContainer = styled(Box)`
`;

const HeaderFlexBoxContainer = styled(FlexBox)`
    align-items: center;
    justify-content: space-between;
`;

const HeaderLogoMenuContainer = styled(Card)`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${({theme}) => theme.zIndex.appBar};
`;

const HeaderTitleContainer = styled(FlexBoxColumn)`
    text-align: center;
`;

const HeaderNameLogoButton = styled(SemanticButton)`
`;

export {
    HeaderContainer,
    HeaderFlexBoxContainer,
    HeaderLogoMenuContainer,
    HeaderTitleContainer,
    HeaderNameLogoButton
};