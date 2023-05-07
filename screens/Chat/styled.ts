import styled from 'styled-components/native';
import Colors from '../../utils/Colors';

export const Container = styled.View`
	flex-direction: column;
	flex: 1;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
	flex: 1;
`;

export const BackgroundImage = styled.ImageBackground`
	flex: 1;
`;

export const BottomContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 50px;
`;

type IconButtonProps = {
	className?: string;
};

export const IconButton = styled.TouchableOpacity<IconButtonProps>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 80%;
	margin: 5px;

	${props => {
		if (props.className === 'send-btn') {
			return `
				color: ${Colors.white};
				background-color: ${Colors.blue};
				border-radius: 50px;
			`;
		}
	}}
`;

export const MessageInput = styled.TextInput`
	flex: 1;
	border: 1px solid ${Colors.lightGrey};
	border-radius: 50px;
	padding: 5px 10px;
	color: ${Colors.black};
`;
