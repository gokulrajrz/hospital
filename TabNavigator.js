import { React } from 'react'
import ChatScreen from './pages/ChatScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Calender from './pages/Calender';
import Settings from './pages/Settings';

const Tab = createMaterialTopTabNavigator();

function Tabs(){
    return (
        <Tab.Navigator
            initialRouteName='Chat'
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarLabelStyle: { fontSize: 14 },
                tabBarStyle: { backgroundColor: '#4e4e4e' }
            }}
        >
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{ tabBarLabel: 'Chat' }}
            />
            <Tab.Screen
                name="Calender"
                component={Calender}
                options={{ tabBarLabel: 'Calender' }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{ tabBarLabel: 'Settings' }}
            />
        </Tab.Navigator>
    );
}

export default function TabNavigator() {
    return (
            <Tabs/>
    )
}