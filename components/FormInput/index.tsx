import React, { useState } from 'react';
import { Container, Label, TextInput } from './styled';

type FormInputProps = {
	label?: string;
};

function FormInput({ label }: FormInputProps) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<Container>
			{label && <Label>{label}</Label>}
			<TextInput
				isFocused={isFocused}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</Container>
	);
}

export default FormInput;
