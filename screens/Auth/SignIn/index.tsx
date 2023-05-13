import React, { useState, useEffect } from 'react';
import { FormElementContainer, ErrorContainer, LoadingSpinner } from './styled';
import FormInput from '../../../components/FormInput';
import Button from '../../../components/Button';
import type { SignInForm } from '../../../types/SignInForm.d';
import { SignInFormSchema } from '../../../types/SignInForm.d';
import FormError from '../../../components/FormError';
import { useAppDispatch, useAppSelector } from '../../../store';
import { signIn, resetError } from '../../../store/slices/Auth';
import { Alert } from 'react-native';

function Auth() {
	const [signInForm, setSignInForm] = useState<SignInForm>({
		email: '',
		password: '',
	});
	const [emailTouched, setEmailTouched] = useState(false);
	const [passwordTouched, setPasswordTouched] = useState(false);
	const dispatch = useAppDispatch();
	const { loading, error } = useAppSelector(state => state.auth);

	const parsedSignInForm = SignInFormSchema.safeParse(signInForm);
	let formattedErrors;
	if (!parsedSignInForm.success)
		formattedErrors = parsedSignInForm.error.format();

	useEffect(() => {
		if (
			error &&
			(error === 'auth/wrong-password' || error === 'auth/user-not-found')
		) {
			Alert.alert('Something went wrong!', 'Incorrect email and/or password!');
			dispatch(resetError());
		}
	}, [dispatch, error]);

	return (
		<>
			<FormElementContainer>
				<FormInput
					label="* Email"
					autoCapitalize="none"
					keyboardType="email-address"
					value={signInForm.email}
					onChangeText={text => {
						setEmailTouched(true);
						setSignInForm({ ...signInForm, email: text });
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
					value={signInForm.password}
					onChangeText={text => {
						setPasswordTouched(true);
						setSignInForm({ ...signInForm, password: text });
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
					text="Sign in"
					disabled={!parsedSignInForm.success}
					onPress={async () => await dispatch(signIn(signInForm))}
				/>
			)}
		</>
	);
}

export default Auth;
