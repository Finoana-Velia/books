import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { BookmarkIcon, BookOpenIcon, ChevronLeftIcon, HeartIcon, ShareIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { toggleFavorite } from "../reducer/Reducer";
import { useDispatch, useSelector } from "react-redux";

export default function Detail(props) {
    const book = props.route.params;

    const navigation = useNavigation();

    const dispatch = useDispatch();
    const books = useSelector((state) => state.favorite.books);
    console.log("Books favorite list");
    console.log(books);
    // const books = useSelector((state) => state.favoriteBooks);

    // console.log("Book Information : ");
    // console.log(book.volumeInfo);
    // console.log("base info : " + book.id);

    // const _onPutFavorite = () => {
    //     const action = { type : 'TOGGLE_FAVORITE', value : book}
    //     console.log(props);
    //     props.dispatch(action);
    //     console.log(props.dispatch(action));
    // }
    
    return (
        <ScrollView
            contentContainerStyle={{paddingBottom : 50}}
            className="flex-1 min-h-screen"
        >
            <View className="container bg-white">
                <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center p-4">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="silver"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ShareIcon size="28" strokeWidth={2.5} color="silver" />
                    </TouchableOpacity>
                </SafeAreaView>
                <View className="h-72">
                    <Image
                        source={{ uri : book.volumeInfo.imageLinks.thumbnail}}
                        className="w-full h-screen"
                        blurRadius={2}
                    />
                </View>
                <View className="py-10 h-full bg-white relative ">
                    <View className=" flex flex-col items-center">
                       <View className="absolute bottom-full w-1/3 h-60 shadow-xl border">
                         <Image 
                            source={{ uri : book.volumeInfo.imageLinks.smallThumbnail}}
                            className="w-full h-full"
                        />
                       </View>
                        <Text className="text-gray-500 text-3xl font-bold mt-5 text-center">{book.volumeInfo.title}</Text>
                        {book.volumeInfo.authors.map((author,index) => {
                            return (
                                <Text className="text-slate-400 text-xl text-center" key={index}>{author}</Text>
                            )
                        })}
                    </View>
                    <View className="my-5 flex flex-row justify-between items-center w-full px-10">
                        <View className="flex flex-col justify-center items-center">
                            <BookOpenIcon size="50" strokeWidth={2.5} color="silver" />
                            <Text className="text-xl text-slate-500">Read</Text> 
                        </View>
                        <View className="flex flex-col justify-center items-center">
                            <BookmarkIcon size="50" strokeWidth={2.5} color="silver" />
                            <Text className="text-xl text-slate-500">Bookmark</Text> 
                        </View>
                        <TouchableOpacity 
                            className="flex flex-col justify-center items-center"
                            onPress={() => dispatch(toggleFavorite(book,"TOGGLE_FAVORITE"))}
                        >
                            <HeartIcon size="50" strokeWidth={2.5} color="silver"/>
                            <Text className="text-xl text-slate-500">Like</Text> 
                        </TouchableOpacity>
                        
                    </View>
                    <View className="border-slate-300 border mx-5"></View>
                    <View className="px-2 mt-5">
                        <Text className="text-slate-700 text-xl my-2">Description</Text>
                        <Text className="text-slate-900 text-xl">{book.volumeInfo.description}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};
