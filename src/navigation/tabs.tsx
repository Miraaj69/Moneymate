import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Portfolio from '../screens/Portfolio';
import Expenses from '../screens/Expenses';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Expenses" component={Expenses} />
    </Tab.Navigator>
  );
}
