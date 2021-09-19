import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerTintColor: 'white'}}>
                <Stack.Screen name="Home" component={MainScreen} options={{header: () => null}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;