import { createStackNavigator } from "@react-navigation/stack";
import HerramientasScreen from "../screens/Herramientas/HerramientasScreen";
import CalculadoraEmbarazoScreen from "../screens/Herramientas/CalculadoraEmbarazoScreen";
import CalculadoraOvulacionScreen from "../screens/Herramientas/CalculadoraOvulacionScreen";

const Stack = createStackNavigator();

export default function HerramientasStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HerramientasScreen" component={HerramientasScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CalculadoraEmbarazoScreen" component={CalculadoraEmbarazoScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CalculadoraOvulacionScreen" component={CalculadoraOvulacionScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}