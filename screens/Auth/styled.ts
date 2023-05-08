import styled from 'styled-components/native';
import Colors from '../../utils/Colors';

export const Container = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	flex: 1;
	width: 100%;
	padding: 10px;
	background-color: ${Colors.white};
`;
