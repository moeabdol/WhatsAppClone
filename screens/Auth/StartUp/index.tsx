import React from 'react';
import { Container } from './styled';
import { ActivityIndicator } from 'react-native';
import Colors from '../../../utils/Colors';

function StartUp() {
	return (
		<Container>
			<ActivityIndicator size="large" color={Colors.green} />
		</Container>
	);
}

export default StartUp;
