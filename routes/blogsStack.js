import PostList from "../components/PostList";
import PostOnly from "../components/PostOnly";
import LoginScreen from "../screens/LoginScreen";
import BlogsScreen from "../screens/BlogsScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function BlogsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PostScreen" component={BlogsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PostOnly" component={PostOnly} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}