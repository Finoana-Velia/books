import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home(params) {
    const navigation = useNavigation();
    return (
        <View className="w-full h-screen flex justify-center items-center">
            <Text>Home screen</Text>
            <TouchableOpacity 
                className="my-2 p-2 bg-blue-500"
                onPress={() => navigation.navigate("Detail")}
            >
                <Text className="text-white text-xl text-bold">Go to detail</Text>
            </TouchableOpacity>
        </View>
    );
};
