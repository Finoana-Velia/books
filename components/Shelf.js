import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Shelf(params) {
    const book = params.book;

    return (
    <TouchableOpacity className="w-1/2 h-60 px-2 flex flex-col justify-center items-center relative">
        <Image 
            source={{ uri : book.volumeInfo.imageLinks.smallThumbnail}}
            className="h-40 px-3 w-[75%] z-10 mb-6 shadow-xl"
        />
        <View className="h-1/3 bg-white w-full flex justify-center items-center pt-3 absolute bottom-1 rounded">
        <Text className="text-center">{
            book.volumeInfo.title.length > 15 ? 
            book.volumeInfo.title.slice(0,15) + '...' :
            book.volumeInfo.title
        }</Text>
        </View>
    </TouchableOpacity>
    )
};
