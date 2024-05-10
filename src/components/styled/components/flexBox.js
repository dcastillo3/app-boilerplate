import styled from 'styled-components';
import { Box } from './box';
import { buildFlexBox } from '../styledUtils';

export const FlexBox = styled(Box)`
    display: flex;
    flex-direction: row;
    
    /* Style overrides last */
    ${buildFlexBox}
`;

export const FlexBoxColumn = styled(FlexBox)`
    flex-direction: column;
`;