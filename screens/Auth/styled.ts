import styled from 'styled-components/native';
import Colors from '../../utils/Colors';

export const Container = styled.View`
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	flex: 1;
	width: 100%;
	padding: 10px;
	background-color: ${Colors.white};
`;

export const ScrollView = styled.ScrollView`
	width: 100%;
`;

export const Link = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 10px;
`;

export const LinkText = styled.Text`
	color: ${Colors.blue};
`;

export const Logo = styled.Image`
	align-self: center;
	resize-mode: contain;
	width: 50%;
`;
