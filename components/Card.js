import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View,Text } from "react-native"
export default function Card(params) {
    const book = params.book;

    return (
        <TouchableOpacity className="bg-white flex justify-center items-center p-3 rounded h-60 m-1"
        >
            {
                book.volumeInfo.imageLinks != undefined ?
                <Image 
                    source={{uri :  book.volumeInfo.imageLinks.smallThumbnail}}
                    className="h-40 w-40"
                /> :
                <View>
                    <Text>No Image</Text>
                </View>
            }
            <View className="px-3 flex justify-center items-center">
                <Text className="text-center">
                    {
                        book.volumeInfo.title.length > 15 ? 
                        book.volumeInfo.title.slice(0,15) + '...' :
                        book.volumeInfo.title
                    }
                </Text>
            </View>
        </TouchableOpacity>
    );
};
