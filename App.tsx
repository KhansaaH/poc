import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { BaseButton } from './src/components/base-button/base-button';

import ButtonPage from './src/screens/base-button-screen';
import InputPage from './src/screens/base-input-screen';
import SelectPage from './src/screens/base-select-screen';
import CardPage from './src/screens/base-card-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Main Menu' }}
        />
        <Stack.Screen name="ButtonPage" component={ButtonPage} />
        <Stack.Screen name="InputPage" component={InputPage} />
        <Stack.Screen name="SelectPage" component={SelectPage} />
        <Stack.Screen name="CardPage" component={CardPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* ===================== Home Screen ===================== */
function HomeScreen({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Component Showcase</Text>

      <View style={styles.row}>
        <BaseButton
          variant="primary"
          onPress={() => navigation.navigate('ButtonPage')}
        >
          Go to Button Page
        </BaseButton>

        <BaseButton
          variant="secondary"
          onPress={() => navigation.navigate('InputPage')}
        >
          Go to Input Page
        </BaseButton>

        <BaseButton
          variant="system-approve"
          onPress={() => navigation.navigate('SelectPage')}
        >
          Go to Select Page
        </BaseButton>
        <BaseButton
          variant="system-reject"
          onPress={() => navigation.navigate('CardPage')}
        >
          Go to Card Page
        </BaseButton>
      </View>
    </ScrollView>
  );
}

/* ===================== Styles ===================== */
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    gap: 16,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    color: '#171717',
  },
  row: {
    flexDirection: 'column',
    gap: 16,
    width: '100%',
  },
});
