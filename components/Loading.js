import { ActivityIndicator, View } from "react-native";

export default function Loading() {
    return (
        <View className="flex justify-center items-center min-h-150">
            <ActivityIndicator size="large"/>
        </View>
    )
};
