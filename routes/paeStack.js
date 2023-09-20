import PrimeraPregunta from "../screens/AnalizaTusSintomas/PrimeraPregunta";
import ResultadoAnalizaTusSintomas from "../screens/AnalizaTusSintomas/ResultadoAnalizaTusSintomas";
import SegundaPregunta from "../screens/AnalizaTusSintomas/SegundaPregunta";
import TerceraPregunta from "../screens/AnalizaTusSintomas/TerceraPregunta";
import PreguntaleAlExperto from "../screens/PreguntaleAlExperto";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function PaeStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="PAEInicio" component={PreguntaleAlExperto} options={{ headerShown: false }} />
          {/* <Stack.Screen name="AgendaTuHora" component={RegisterScreen} options={{ headerShown: false }} /> */}
          <Stack.Screen name="FirstQuestion" component={PrimeraPregunta} options={{ headerShown: false }} />
          <Stack.Screen name="SecondQuestion" component={SegundaPregunta} options={{ headerShown: false }} />
          <Stack.Screen name="ThirdQuestion" component={TerceraPregunta} options={{ headerShown: false }} />
          <Stack.Screen name="Result" component={ResultadoAnalizaTusSintomas} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}