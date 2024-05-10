import React, { useState } from 'react';
import { buildFormData, buildFormFields } from './formUtils';
import _ from 'lodash/core';
import { FlexBox, Form as StyledForm, Button, Card, FlexBoxColumn, cardProps } from '../../styled';
import { Heading, headingProps } from '../';

function Form({formParams: {title, buttonName, fieldsPerRow, inputs}, handleSubmit}) {
    const [formFields, setFormFields] = useState(inputs);
    const [formData, setFormData] = useState(() => buildFormData(inputs));

    const handleChangeField = e => {
        const { name, value } = e.target;
        const newFormData = {
            ...formData,
            [name]: value
        };

        setFormData(newFormData);
    };

    const handleSubmitForm = e => {
        e.preventDefault();

        handleSubmit(formData);
    };

    const renderFormFields = (!_.isEmpty(formFields) && !_.isEmpty(formData))
        && buildFormFields(formFields, formData, handleChangeField, fieldsPerRow);

    return (
        <Card $variant={cardProps.variant.backgroundLight}>
            <FlexBox $center>
                <FlexBoxColumn>
                    <FlexBox $m={[5]}>
                        <Heading variant={headingProps.variant.success} heading={title} />
                    </FlexBox>

                    <FlexBox>
                        <StyledForm onSubmit={handleSubmitForm}>
                            {renderFormFields}
                            <Button $m={[5, 3]} type="submit">{buttonName}</Button>
                        </StyledForm>
                    </FlexBox>
                </FlexBoxColumn>
            </FlexBox>
        </Card>
    );
};

export default Form;