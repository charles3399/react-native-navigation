import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealInstructionScreen from './screens/MealInstructionScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Stack.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{title: 'All Categories'}}
      />
      <Stack.Screen
        name="MealsOverview"
        component={MealsOverviewScreen}
      />
      <Stack.Screen
        name="MealInstruction"
        component={MealInstructionScreen}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
        <Provider store={store}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: '#351401' },
                headerTintColor: '#fff',
                tabBarActiveTintColor: '#3f2f25',
                tabBarStyle: {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }
              }}
              sceneContainerStyle={{backgroundColor: '#3f2f25'}}
            >
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  title: 'Categories',
                  headerShown: false,
                  tabBarIcon: ({color, size}) => (
                    <Ionicons name="clipboard" size={size} color={color} />
                  )
                }}
              />
              <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                  title: 'Favorites',
                  tabBarIcon: ({color, size}) => (
                    <Ionicons name="star" size={size} color={color} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.select({ios: 0, android: 15}),
    paddingTop: Platform.select({ios: 0, android: 15}),
  },
});
