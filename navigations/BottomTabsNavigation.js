import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeartIcon, HomeIcon } from "react-native-heroicons/solid";
import Favorite from "../screens/Favorite";
import StackNavigation from "./StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown : false }}>
                <Tab.Screen name="Main" component={StackNavigation}
                    options={{
                        tabBarLabel : "Home",
                        tabBarIcon : () => {
                            return (
                                <HomeIcon size={25} strokeWidth={2} color='#222' />
                            )
                        }
                    }}
                />
                <Tab.Screen name="Favorite" component={Favorite}
                    options={{
                        tabBarLabel : "Favorite",
                        tabBarIcon : () => {
                            return (
                                <HeartIcon size={25} strokeWidth={2} color="#222"/>
                            )
                        }
                    }}  
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
