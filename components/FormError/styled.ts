import styled from 'styled-components/native';
import Colors from '../../utils/Colors';

export const Container = styled.View`
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	border: 1px solid ${Colors.red};
	padding: 5px;
`;

export const ErrorText = styled.Text`
	color: ${Colors.red};
	font-weight: 500;
`;
