import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Weather Tiles Go Here</Text>
  </View>
);

const LauncherSimulatorScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Widget Testing Area</Text>
  </View>
);

const MenuScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>App Settings & Menu</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: true,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ tabBarIcon: () => <Text style={{fontSize: 20}}>🏠</Text> }}
        />
        <Tab.Screen 
          name="Simulator" 
          component={LauncherSimulatorScreen} 
          options={{ tabBarIcon: () => <Text style={{fontSize: 20}}>🚀</Text> }}
        />
        <Tab.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{ tabBarIcon: () => <Text style={{fontSize: 20}}>☰</Text> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});