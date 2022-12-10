import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import TermsScreen from './screens/Terms';
import FlagsScreen from './screens/Flags';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="Flags" component={FlagsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
