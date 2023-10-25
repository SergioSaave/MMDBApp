import BlogOnly from "../components/Blogs/BlogOnly";
import BlogsScreen from "../screens/BlogsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function BlogsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BlogScreen" component={BlogsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="BlogOnly" component={BlogOnly} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}