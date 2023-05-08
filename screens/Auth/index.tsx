import React from 'react';
import { Container } from './styled';
import FormInput from '../../components/FormInput';

function ChatSettings() {
	return (
		<Container>
			<FormInput label="* Username" />
		</Container>
	);
}

export default ChatSettings;
