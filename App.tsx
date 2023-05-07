import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import ChatList from './screens/ChatList';
import ChatSettings from './screens/ChatSettings';

export type RootStackProps = {
	Home: undefined;
	ChatSettings: undefined;
};

const RootStack = createNativeStackNavigator<RootStackProps>();

function App() {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<RootStack.Navigator initialRouteName="Home">
					<RootStack.Screen name="Home" component={ChatList} />
					<RootStack.Screen name="ChatSettings" component={ChatSettings} />
				</RootStack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
