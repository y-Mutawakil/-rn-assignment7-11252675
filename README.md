# rn-assignment7-11252675

   Home:
        import Home from './Home';: Imports the Home component from a local file. This component likely represents the main screen of the application.
   
   NavigationContainer:

        import { NavigationContainer } from '@react-navigation/native';: Imports NavigationContainer, a component that manages navigation state and links the navigation hierarchy to the app environment.

   createStackNavigator:

        import { createStackNavigator } from '@react-navigation/stack';: Imports createStackNavigator, a function that creates a stack navigator for managing a stack-based navigation pattern.

   createDrawerNavigator:

        import { createDrawerNavigator } from '@react-navigation/drawer';: Imports createDrawerNavigator, a function that creates a drawer navigator, which allows users to swipe or use a button to access a drawer menu.
   
   Cart:
        import Cart from './Cart';: Imports the Cart component from a local file. This component displays the user's shopping cart.

   CartProvider:
        import { CartProvider } from './CartContext';: Imports CartProvider, a context provider component that likely supplies the cart state and actions to the application.

   ProductDetails:
        import ProductDetails from './ProductDetails';: Imports the ProductDetails component from a local file. This component displays the details of a selected product.

   CustomDrawerContent:
        import CustomDrawerContent from './DrawerContent';: Imports a custom component for the drawer content, likely providing a customized drawer menu.


   Stack and Drawer:
        const Stack = createStackNavigator();: Initializes a stack navigator.
        const Drawer = createDrawerNavigator();: Initializes a drawer navigator.

   HomeStack Function:

        function HomeStack() {...}: Defines a function that returns a stack navigator with three screens: Home, Cart, and ProductDetails. Each screen has the header hidden.




![](./assets/Readme%201.jpg)
![](./assets/Readme%202.jpg)