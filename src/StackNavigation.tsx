import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth } from './stacks/Auth/Auth';
import { ResetPassword } from './stacks/ResetPassword/ResetPassword';
import { RegisterUser } from './stacks/RegisterUser/RegisterUser';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="RegisterUser" component={RegisterUser} />
        </Stack.Navigator>
    )
}

export { StackNavigation }