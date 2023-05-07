import React from 'react';
import { ButtonContainer, ButtonText } from './styled';

type ButtonProps = {
	className: string;
	text: string;
	onPress: () => void;
};

function Button({ className, text, onPress }: ButtonProps) {
	return (
		<ButtonContainer className={className} onPress={onPress}>
			<ButtonText color="green">{text}</ButtonText>
		</ButtonContainer>
	);
}

export default Button;
