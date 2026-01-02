import { Text, TouchableOpacity, View, StyleSheet, Image, Dimensions } from "react-native";

var {width, height} = Dimensions.get('window');

export default function CategoryCard(params) {
    const obj = params.category;
    return(
       <View className="mx-2 w-20 h-20 my-3 d-flex justify-center items-center">
            <Image source={obj.image} className={`w-12 h-12 m-1 p-5 ${params.isActive ? "rounded-full" : "rounded"}`}/>
            <Text 
              style={params.isActive ? styles.category : styles.category_active}
            >
              {obj.title.length > 7 ? obj.title.slice(0,7) : obj.title}
            </Text>
       </View>
    );
};


const styles = StyleSheet.create({
  category_active : {
    color : '#F9FAFB',
    fontWeight : 'bold'
  },
  category : {
    color : '#000'
  },
  image : {
    backgroundColor : '#172554',
    borderRadius : 30,
    margin : 10,
    padding : 50,
    // width : width*0.12,
    // height : width*0.12
  },

})
