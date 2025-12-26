import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon, BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import { useEffect, useState } from 'react';
import { categories } from './helpers/Categories';
import CategoryCard from './components/CategoryCard';
import { getByCategory } from './api/BooksService';
import MasonryList from '@react-native-seoul/masonry-list';


export default function App() {

  const [activeCategory, setActiveCagtegory] = useState(categories[0]);
  const [books, setBooks] = useState([]);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    getByCategory(activeCategory).then(
      response => {
        setTimeout(() => {
          console.log(response);
          setResponse(response);
          setBooks(response.items);
          console.log(response.items);
        },2000)
      }
    );
  },[]);

  return (

    <LinearGradient className="w-full flex-1" colors={['rgba(224, 231, 255, 1)','rgba(249, 250, 251, 1)']}>
      <SafeAreaView>
        <View className="container">
          <View className="flex-row justify-between items-center px-4">
            <Bars3CenterLeftIcon size="30" />
            <BellIcon size="30"/>
          </View>

          <View className="my-3 space-y-3">
            <Text className="ml-4 text-3xl font-bold text-gray-500">Categories</Text>
          </View>

          <View className="pl-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                categories.map(cat => {
                  return (
                    <TouchableOpacity key={cat.id} onPress={() => setActiveCagtegory(cat)}>
                      <CategoryCard category={cat} isActive={activeCategory.id !== cat.id}/>
                    </TouchableOpacity>
                    )
                })
              }
            </ScrollView>
          </View>

          <View className="flex flex-row rounded bg-white justify-center align-center mx-2 my-3 pt-1">
            <TextInput
              placeholder='Search'
              placeholderTextColor={'gray'}
              className="flex pl-2 rounded w-[90%]"
            />
              <MagnifyingGlassIcon size="30" strokeWidth={3} color={'gray'}/>
          </View>

          {/* <View className="h-60 px-2 flex flex-col justify-center items-center relative">
            <Image source={activeCategory.image} className="h-40 px-3 w-[25%] z-10 mb-6 shadow-xl"/>
            <View className="h-1/3 bg-white w-[40%] flex justify-center items-center pt-3 absolute bottom-1 rounded">
              <Text>Very long title for a book</Text>
            </View>
          </View> */}

          {/* <MasonryList
            data={books}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={(item, index) => <View className="h-60 px-2 flex flex-col justify-center items-center relative">
            <Image source={activeCategory.image} className="h-40 px-3 w-[25%] z-10 mb-6 shadow-xl"/>
            <View className="h-1/3 bg-white w-[40%] flex justify-center items-center pt-3 absolute bottom-1 rounded">
              <Text>Very long title for a book</Text>
            </View>
          </View>}
            onEndReachedThreshold={0.1}
          /> */}
        
          
        </View>
      </SafeAreaView>
    </LinearGradient>
    
    
  );
}



