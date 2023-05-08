import React, { useState } from 'react';
import { Container, Label, TextInput } from './styled';

type FormInputProps = {
	label?: string;
	value: string;
	onChangeText: (text: string) => void;
};

function FormInput({ label, value, onChangeText }: FormInputProps) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<Container>
			{label && <Label>{label}</Label>}
			<TextInput
				value={value}
				isFocused={isFocused}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				onChangeText={onChangeText}
			/>
		</Container>
	);
}

export default FormInput;
