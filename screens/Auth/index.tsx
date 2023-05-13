import React, { useState, useEffect } from 'react';
import { Container, ScrollView, Link, LinkText, Logo } from './styled';
import StartUp from './StartUp';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Auth() {
	const [isSignUp, setIsSignUp] = useState(false);
	const [hasToken, setHasToken] = useState(true);

	useEffect(() => {
		(async () => {
			const accessToken = await AsyncStorage.getItem('accessToken');
			if (!accessToken) setHasToken(false);
		})();
	}, []);

	return (
		<Container>
			{hasToken ? (
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
