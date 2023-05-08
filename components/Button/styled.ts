import styled from 'styled-components/native';
import Colors from '../../utils/Colors';

type ButtonContainerProps = {
	className?: string;
	disabled?: boolean;
};
export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 35px;
	padding: 5px;

	${props => {
		const { disabled, className } = props;

		if (!disabled) {
			if (className === 'primary') return `background-color: ${Colors.blue}`;
			else if (className === 'success')
				return `background-color: ${Colors.green}`;
		} else {
			return `background-color: ${Colors.lightGrey}`;
		}
	}}
`;

export const ButtonText = styled.Text`
	width: 100%;
	color: white;
	font-size: 18px;
	text-align: center;
`;
