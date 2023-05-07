import React, { useState } from 'react';
import {
	Container,
	KeyboardAvoidingView,
	BackgroundImage,
	BottomContainer,
	IconButton,
	MessageInput,
} from './styled';
import PlusIcon from '../../components/Icons/PlusIcon';
import CameraIcon from '../../components/Icons/CameraIcon';
import Colors from '../../utils/Colors';
import PaperPlaneIcon from '../../components/Icons/PaperPlaneIcon';

function Chat() {
	const [message, setMessage] = useState('');

	return (
		<Container>
			<KeyboardAvoidingView>
				<BackgroundImage source={require('../../assets/images/droplet.jpeg')} />
				<BottomContainer>
					<IconButton onPress={() => console.log('touched')}>
						<PlusIcon size={25} color={Colors.blue} />
					</IconButton>

					<MessageInput
						value={message}
						onChangeText={text => setMessage(text)}
						onSubmitEditing={() => setMessage('')}
					/>

					{message.trim() !== '' ? (
						<IconButton className="send-btn" onPress={() => setMessage('')}>
							<PaperPlaneIcon size={21} color={Colors.white} />
						</IconButton>
					) : (
						<IconButton onPress={() => console.log('touched')}>
							<CameraIcon size={25} color={Colors.blue} />
						</IconButton>
					)}
				</BottomContainer>
			</KeyboardAvoidingView>
		</Container>
	);
}

export default Chat;
