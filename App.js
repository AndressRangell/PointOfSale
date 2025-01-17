import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigation from './navigation/BottomTabNavigation'
import Cart from './screens/Cart'

import { LogBox } from 'react-native'
import ProductDetail from './screens/ProductDetail'
import Login from './screens/Login'
import Confirmation from './screens/Confirmation'
import CreditCard from './screens/CreditCard'

LogBox.ignoreAllLogs(true)

const Stack = createNativeStackNavigator()

export default function App() {
	const [fontsLoaded] = useFonts({
		regular: require('./assets/fonts/Poppins-Regular.ttf'),
		light: require('./assets/fonts/Poppins-Light.ttf'),
		bold: require('./assets/fonts/Poppins-Bold.ttf'),
		medium: require('./assets/fonts/Poppins-Medium.ttf'),
		semiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
		extraBold: require('./assets/fonts/Poppins-ExtraBold.ttf')
	})

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return null
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Bottom Navigation"
					component={BottomTabNavigation}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Confirmation"
					component={Confirmation}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="CreditCard"
					component={CreditCard}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Cart"
					component={Cart}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="ProductDetails"
					component={ProductDetail}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}