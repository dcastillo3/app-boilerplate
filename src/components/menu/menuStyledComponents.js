import styled from "styled-components";
import { FlexBox, SemanticButton } from "../styled";

const MenuContainer = styled(FlexBox)`
    justify-content: flex-end;
`;

const MenuItemContainer = styled(SemanticButton)`
    ${({active}) => active && `text-decoration: underline;`}
`;

export {
    MenuContainer,
    MenuItemContainer
};