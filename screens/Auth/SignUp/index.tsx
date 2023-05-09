import React, { useState, useEffect } from 'react';
import { FormElementContainer, ErrorContainer, LoadingSpinner } from './styled';
import FormInput from '../../../components/FormInput';
import Button from '../../../components/Button';
import { SignUpFormSchema, SignUpForm } from '../../../types/SignUpForm.d';
import FormError from '../../../components/FormError';
import { useMutation } from 'react-query';
import { signUp, createUser } from '../../../api/Auth';
import { Alert } from 'react-native';
import { FirebaseError } from 'firebase/app';

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
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const parsedSignUpForm = SignUpFormSchema.safeParse(signUpForm);
	let formattedErrors;
	if (!parsedSignUpForm.success)
		formattedErrors = parsedSignUpForm.error.format();

	const signUpMutation = useMutation(signUp, {
		onSuccess: res => {
			const { uid } = res.user;
			createUserMutation.mutate({ signUpForm, uid });
		},
		onError: (err: FirebaseError) => {
			if (err.code === 'auth/email-already-in-use') {
				setError('Email already exists!');
			}
		},
	});

	const createUserMutation = useMutation(createUser, {
		onSuccess: res => console.log(res),
		onError: (err: FirebaseError) => console.log(err),
	});

	useEffect(() => {
		if (signUpMutation.isLoading || createUserMutation.isLoading)
			setIsLoading(true);
		else setIsLoading(false);
	}, [signUpMutation.isLoading, createUserMutation.isLoading]);

	useEffect(() => {
		if (error !== '') Alert.alert('An error occured', error);
	}, [error]);

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

			{isLoading ? (
				<LoadingSpinner />
			) : (
				<Button
					className="success"
					text="Sign up"
					onPress={() => signUpMutation.mutate(signUpForm)}
					disabled={!parsedSignUpForm.success}
				/>
			)}
		</>
	);
}

export default Auth;
