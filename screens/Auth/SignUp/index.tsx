import React, { useState } from 'react';
import { FormElementContainer, ErrorContainer, LoadingSpinner } from './styled';
import FormInput from '../../../components/FormInput';
import Button from '../../../components/Button';
import { SignUpFormSchema, SignUpForm } from '../../../types/SignUpForm.d';
import FormError from '../../../components/FormError';
import { Alert } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../store';
import { signUp } from '../../../store/slices/Auth';

function Auth() {
	const [signUpForm, setSignUpForm] = useState<SignUpForm>({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});
	const [firstNameTouched, setFirstNameTouched] = useState(false);
	const [lastNameTouched, setLastNameTouched] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);
	const [passwordTouched, setPasswordTouched] = useState(false);
	const dispatch = useAppDispatch();
	const { loading, error } = useAppSelector(state => state.auth);

	const parsedSignUpForm = SignUpFormSchema.safeParse(signUpForm);
	let formattedErrors;
	if (!parsedSignUpForm.success)
		formattedErrors = parsedSignUpForm.error.format();

	if (error === 'auth/email-already-in-use') {
		Alert.alert('Something went wrong!', 'Email already in use!');
	}

	return (
		<>
			<FormElementContainer>
				<FormInput
					label="* First Name"
					value={signUpForm.firstName}
					onChangeText={text => {
						setFirstNameTouched(true);
						setSignUpForm({ ...signUpForm, firstName: text });
					}}
				/>
				{formattedErrors?.firstName?._errors && firstNameTouched && (
					<ErrorContainer>
						<FormError>{formattedErrors.firstName._errors}</FormError>
					</ErrorContainer>
				)}
			</FormElementContainer>

			<FormElementContainer>
				<FormInput
					label="* Last Name"
					value={signUpForm.lastName}
					onChangeText={text => {
						setLastNameTouched(true);
						setSignUpForm({ ...signUpForm, lastName: text });
					}}
				/>
				{formattedErrors?.lastName?._errors && lastNameTouched && (
					<ErrorContainer>
						<FormError>{formattedErrors.lastName._errors}</FormError>
					</ErrorContainer>
				)}
			</FormElementContainer>

			<FormElementContainer>
				<FormInput
					label="* Email"
					value={signUpForm.email}
					autoCapitalize="none"
					keyboardType="email-address"
					onChangeText={text => {
						setEmailTouched(true);
						setSignUpForm({ ...signUpForm, email: text });
					}}
				/>
				{formattedErrors?.email?._errors && emailTouched && (
					<ErrorContainer>
						<FormError>{formattedErrors.email._errors}</FormError>
					</ErrorContainer>
				)}
			</FormElementContainer>

			<FormElementContainer>
				<FormInput
					label="* Password"
					autoCapitalize="none"
					secureTextEntry
					value={signUpForm.password}
					onChangeText={text => {
						setPasswordTouched(true);
						setSignUpForm({ ...signUpForm, password: text });
					}}
				/>
				{formattedErrors?.password?._errors && passwordTouched && (
					<ErrorContainer>
						<FormError>{formattedErrors.password._errors}</FormError>
					</ErrorContainer>
				)}
			</FormElementContainer>

			{loading ? (
				<LoadingSpinner />
			) : (
				<Button
					className="success"
					text="Sign up"
					disabled={!parsedSignUpForm.success}
					onPress={async () => await dispatch(signUp(signUpForm))}
				/>
			)}
		</>
	);
}

export default Auth;
