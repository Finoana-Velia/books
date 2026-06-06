import { LinearGradient } from "expo-linear-gradient";
import { View,Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import Card from "../components/Card";
import { useNavigation } from "@react-navigation/native";

function Favorite({books}) {

    return (
       <LinearGradient className="w-full flex-1" colors={['rgba(224, 231, 255, 1)','rgba(249, 250, 251, 1)']}>
        <SafeAreaView>
            <View className="container">
                <FlatList
                    style={{alignSelf : "stretch"}}
                    contentContainerStyle={{
                        alignSelf: "stretch",
                        paddingBottom : 550
                    }}
                    numColumns={2}
                    data={books}
                    renderItem={({item}) => (
                        <Card book={item}/>
                    )}
                />
            </View>
        </SafeAreaView>
       </LinearGradient>
    )
};

// export default Favorite;

const mapStateToProps = (state) => {
    return { books : state.favorite.books };
};

export default connect(mapStateToProps) (Favorite);
