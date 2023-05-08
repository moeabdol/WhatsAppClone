import React, { useState } from 'react';
import { FormElementContainer } from './styled';
import FormInput from '../../../components/FormInput';
import Button from '../../../components/Button';

function Auth() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<FormElementContainer>
				<FormInput
					label="* Email"
					value={email}
					onChangeText={text => setEmail(text)}
				/>
			</FormElementContainer>

			<FormElementContainer>
				<FormInput
					label="* Password"
					value={password}
					onChangeText={text => setPassword(text)}
				/>
			</FormElementContainer>

			<Button
				className="success"
				text="Sign in"
				onPress={() => console.log('pressed')}
			/>
		</>
	);
}

export default Auth;
