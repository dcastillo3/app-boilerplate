import styled from 'styled-components';
import { Box } from './box';
import { buildGrid } from '../styledUtils';

export const Grid = styled(Box)`
    display: grid;
    
    /* Style overrides last */
    ${buildGrid}
`;