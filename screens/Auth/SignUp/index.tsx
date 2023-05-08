import React, { useState } from 'react';
import { FormElementContainer } from './styled';
import FormInput from '../../../components/FormInput';
import Button from '../../../components/Button';

function Auth() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<FormElementContainer>
				<FormInput
					label="* First Name"
					value={firstName}
					onChangeText={text => setFirstName(text)}
				/>
			</FormElementContainer>

			<FormElementContainer>
				<FormInput
					label="* Last Name"
					value={lastName}
					onChangeText={text => setLastName(text)}
				/>
			</FormElementContainer>

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
				text="Sign up"
				onPress={() => console.log('pressed')}
			/>
		</>
	);
}

export default Auth;
