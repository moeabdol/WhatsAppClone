import React, { useState } from 'react';
import { Container, Link, LinkText, Logo } from './styled';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

function Auth() {
	const [isSignUp, setIsSignUp] = useState(false);

	return (
		<Container>
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
		</Container>
	);
}

export default Auth;
