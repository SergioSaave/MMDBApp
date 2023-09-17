import PostList from "../components/PostList";
import PostOnly from "../components/PostOnly";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "../screens/PostsScreen";



const Stack = createStackNavigator();

export default function BlogsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PostScreen" component={PostsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PostOnly" component={PostOnly} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}