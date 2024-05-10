import styled from 'styled-components';
import { buildArrow } from '../styledUtils';

export const Arrow = styled.div`
    position: relative;
    width: 0;
    height: 0;

    /* Style overrides last */
    ${buildArrow}
`;