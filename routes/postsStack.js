import PostOnly from "../components/Posts/PostOnly";
import PostsScreen from "../screens/PostsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function PostsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PostScreen" component={PostsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PostOnly" component={PostOnly} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}