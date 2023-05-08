import React from 'react';
import { ButtonContainer, ButtonText } from './styled';

type ButtonProps = {
	className: string;
	disabled?: boolean;
	text: string;
	onPress: () => void;
};

function Button({ className, disabled, text, onPress }: ButtonProps) {
	return (
		<ButtonContainer
			className={className}
			disabled={disabled}
			onPress={onPress}
		>
			<ButtonText>{text}</ButtonText>
		</ButtonContainer>
	);
}

export default Button;
