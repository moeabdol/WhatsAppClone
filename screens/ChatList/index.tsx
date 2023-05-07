import React from 'react';
import { Container, Text } from './styled';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/core';
import { RootStackProps } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function ChatList() {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackProps>>();

	return (
		<Container>
			<Text>Chat list screen</Text>
			<Button
				text="Settings"
				className="primary"
				onPress={() => navigation.navigate('ChatSettings')}
			/>
		</Container>
	);
}

export default ChatList;
