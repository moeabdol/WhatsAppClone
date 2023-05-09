import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClientProvider, QueryClient } from 'react-query';
import SplashScreen from 'react-native-splash-screen';
import ChatList from './screens/ChatList';
import ChatSettings from './screens/ChatSettings';
import Settings from './screens/Settings';
import CommentIcon from './components/Icons/CommentIcon';
import GearIcon from './components/Icons/GearIcon';
import Chat from './screens/Chat';
import Auth from './screens/Auth';

export type RootStackProps = {
	Home: undefined;
	Chat: undefined;
	ChatSettings: undefined;
};

const RootStack = createNativeStackNavigator<RootStackProps>();
const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();

const TabNavigator = () => (
	<Tab.Navigator screenOptions={{ headerTitle: '' }}>
		<Tab.Screen
			name="Chat List"
			component={ChatList}
			options={{ tabBarShowLabel: false, tabBarIcon: CommentIcon }}
		/>
		<Tab.Screen
			name="Settings"
			component={Settings}
			options={{ tabBarShowLabel: false, tabBarIcon: GearIcon }}
		/>
	</Tab.Navigator>
);

function App() {
	const isSignedIn = false;

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<SafeAreaProvider>
				<NavigationContainer>
					{!isSignedIn ? (
						<Auth />
					) : (
						<RootStack.Navigator initialRouteName="Home">
							<RootStack.Screen
								name="Home"
								component={TabNavigator}
								options={{ headerShown: false }}
							/>
							<RootStack.Screen name="Chat" component={Chat} />
							<RootStack.Screen name="ChatSettings" component={ChatSettings} />
						</RootStack.Navigator>
					)}
				</NavigationContainer>
			</SafeAreaProvider>
		</QueryClientProvider>
	);
}

export default App;
