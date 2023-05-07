import styled from 'styled-components/native';

type ButtonContainerProps = {
	className?: string;
};
export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 35px;

	${props => {
		if (props.className === 'primary') return 'background-color: blue';
	}}
`;

type ButtonTextProps = {
	color: string;
};

export const ButtonText = styled.Text<ButtonTextProps>`
	width: 100%;
	color: white;
	font-size: 18px;
	margin: 0 auto;
	text-align: center;
`;
