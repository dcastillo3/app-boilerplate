import styled from "styled-components";
import { Card } from "../styled";

const HeaderContainer = styled(Card)`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${({theme}) => theme.zIndex.appBar};
`;

export {
    HeaderContainer
};