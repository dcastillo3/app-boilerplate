import styled from 'styled-components';
import { FlexBoxColumn, TextCaption, Textarea } from '../../styled';

const HiddenFormFieldContainer = styled(FlexBoxColumn)`
    display: none;
`;

const FormTextArea = styled(Textarea)`
    height: ${({theme}) => theme.spacing(20)};
    resize: vertical;
`;

const UploadMessageText = styled(TextCaption)`
    text-align: center;
`;

export {
    HiddenFormFieldContainer,
    FormTextArea,
    UploadMessageText
};