import React, { useState, useEffect } from 'react';
import { Container, ScrollView, Link, LinkText, Logo } from './styled';
import StartUp from './StartUp';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import FirebaseToken from '../../types/FirebaseToken.d';
import { useAppDispatch } from '../../store';
import { getUserData, setAccessToken } from '../../store/slices/Auth';

function Auth() {
	const [isSignUp, setIsSignUp] = useState(false);
	const [hasToken, setHasToken] = useState(true);
	const [hasExpired, setHasExpired] = useState(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		(async () => {
			const accessToken = await AsyncStorage.getItem('accessToken');
			if (!accessToken) setHasToken(false);
			else {
				const decoded: FirebaseToken = jwt_decode(accessToken);
				const expiry = new Date(decoded.exp * 1000);
				if (expiry <= new Date()) setHasExpired(true);
				else {
					await dispatch(getUserData(decoded.user_id));
					await dispatch(setAccessToken(accessToken));
				}
			}
		})();
	}, [dispatch]);

	return (
		<Container>
			{hasToken && !hasExpired ? (
				<StartUp />
			) : (
				<ScrollView>
					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'height' : undefined}
					>
						<Logo source={require('../../assets/images/logo.png')} />

						{isSignUp ? <SignUp /> : <SignIn />}
						{isSignUp ? (
							<Link onPress={() => setIsSignUp(prev => !prev)}>
								<LinkText>Already have an account? Sign in</LinkText>
							</Link>
						) : (
							<Link onPress={() => setIsSignUp(prev => !prev)}>
								<LinkText>Do not have an account? Sign up</LinkText>
							</Link>
						)}
					</KeyboardAvoidingView>
				</ScrollView>
			)}
		</Container>
	);
}

export default Auth;
