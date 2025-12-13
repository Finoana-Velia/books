import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";

export default function GradientButton(params) {
    console.log(params);
  return (
    <LinearGradient
        colors={['rgba(224, 231, 255, 1)','rgba(255, 255, 255, 1)']}
        end={{x :1, y : 1}}
        start={{x : 0.1, y : 0.2}}
        className={`rounded-full ${params.containerClass}`}
    >
        <TouchableOpacity
            className="p-3 px-4"
        >
            <Text className="text-white font-bold">{params.value}</Text>
        </TouchableOpacity>
    </LinearGradient>
  )  
};