import styled from 'styled-components/native';
import Colors from '../../utils/Colors';

export const Container = styled.View`
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
`;

export const Label = styled.Text`
	font-size: 16px;
	font-weight: 500;
	color: ${Colors.black};
	margin-bottom: 3px;
`;

type TextInputProps = {
	isFocused: boolean;
};

export const TextInput = styled.TextInput<TextInputProps>`
	width: 100%;
	border: 1px solid ${Colors.lightGrey};
	font-size: 14px;
	color: ${Colors.black};
	padding: 3px 7px;

	${props => {
		if (props.isFocused) return `border: 1px solid ${Colors.blue}`;
		else `border: 1px solid ${Colors.lightGrey}`;
	}}
`;
