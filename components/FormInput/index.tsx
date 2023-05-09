import React, { useState } from 'react';
import { Container, Label, TextInput } from './styled';

type FormInputProps = {
	label?: string;
	value: string;
	autoCapitalize?: 'characters' | 'words' | 'sentences' | 'none';
	secureTextEntry?: boolean;
	keyboardType?:
		| 'default'
		| 'number-pad'
		| 'decimal-pad'
		| 'numeric'
		| 'email-address'
		| 'phone-pad'
		| 'url';
	onChangeText: (text: string) => void;
};

function FormInput({
	label,
	value,
	autoCapitalize,
	secureTextEntry,
	keyboardType,
	onChangeText,
}: FormInputProps) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<Container>
			{label && <Label>{label}</Label>}
			<TextInput
				value={value}
				autoCapitalize={autoCapitalize ?? 'sentences'}
				secureTextEntry={secureTextEntry}
				keyboardType={keyboardType ?? 'default'}
				isFocused={isFocused}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				onChangeText={onChangeText}
			/>
		</Container>
	);
}

export default FormInput;
