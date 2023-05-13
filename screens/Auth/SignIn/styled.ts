import styled from 'styled-components/native';
import Colors from '../../../utils/Colors';

export const FormElementContainer = styled.View`
	margin-bottom: 5px;
	width: 100%;
`;

export const ErrorContainer = styled.View`
	margin-top: 5px;
	width: 100%;
`;

export const LoadingSpinner = styled.ActivityIndicator`
	color: ${Colors.blue};
	align-self: center;
	height: 35px;
`;
