import React from 'react';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import ProductDetails from './ProductDetails';
import CustomDrawerContent from './DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home"
         drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

// export default function App() {
//   return (
//     <CartProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//             <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
//             <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
//             <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </CartProvider>
//   );
// }

