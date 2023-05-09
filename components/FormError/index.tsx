import React from 'react';
import { Container, ErrorText } from './styled';

type FormErrorProps = {
	children: string[];
};

function FormError({ children }: FormErrorProps) {
	return (
		<Container>
			{children.map((errorText, i) => (
				<ErrorText key={i}>* {errorText}</ErrorText>
			))}
		</Container>
	);
}

export default FormError;
