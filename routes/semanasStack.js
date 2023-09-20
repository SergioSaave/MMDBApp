import { createStackNavigator } from "@react-navigation/stack";
import SemanaOnly from "../components/SemanaOnly";
import SemanasScreen from "../screens/SemanasScreen";

const Stack = createStackNavigator();

export default function SemanasStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SemanasScreen" component={SemanasScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SemanaOnly" component={SemanaOnly} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}