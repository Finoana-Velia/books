import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

export default function StackNavigation(params) {
    return (
        <Stack.Navigator screenOptions={{ headerShown : false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    );
};
