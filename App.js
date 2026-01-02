import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon, BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import { useEffect, useState } from 'react';
import { categories } from './helpers/Categories';
import CategoryCard from './components/CategoryCard';
import { getByCategory, getByTitle } from './api/BooksService';
import MasonryList from '@react-native-seoul/masonry-list';
import Shelf from './components/Shelf';
import Loading from './components/Loading';


export default function App() {

  const [activeCategory, setActiveCagtegory] = useState(categories[0]);
  const [books, setBooks] = useState([]);
  const [response, setResponse] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    setResponse(null);
    getByCategory(activeCategory).then(
      response => {
        setTimeout(() => {
          setResponse(response);
          setBooks(response.items);
        },2000)
      }
    );
  },[]);

  const _changeCategory = (category) => {
    setResponse(null);
    getByCategory(category.title).then(
      response => {
        setTimeout(() => {
          setResponse(response);
          setBooks(response.items);
          setActiveCagtegory(category);
        },2000)
      }
    );
  }

  const _onSearch = (category,text) => {
    setResponse(null);
    getByTitle(category,text).then(
      response => {
        setTimeout(() => {
          setResponse(response);
          setBooks(response.items);
        },2000)
      }
    );
  }



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
                    <TouchableOpacity key={cat.id} onPress={() => _changeCategory(cat)}>
                      <CategoryCard category={cat} isActive={activeCategory.id !== cat.id}/>
                    </TouchableOpacity>
                    )
                })
              }
            </ScrollView>
          </View>

          <View className="flex flex-row rounded bg-white justify-center align-center mx-2 my-3 pt-1">
            <TextInput
              value={text}
              onChangeText={setText}
              onSubmitEditing={() => _onSearch(activeCategory.title, text)}
              placeholder='Search'
              placeholderTextColor={'gray'}
              className="flex pl-2 rounded w-[90%]"
            />
              <MagnifyingGlassIcon size="30" strokeWidth={3} color={'gray'}/>
          </View>

          {response ? <FlatList
            style={{alignSelf : "stretch"}}
            contentContainerStyle={{
              paddingHorizontal : 24,
              alignSelf : 'stretch',
              paddingBottom : 550
            }}
            numColumns={2}
            data={books}
            renderItem={({item}) => (
              <Shelf book={item}/>
            )}
          /> : <Loading />}
        
          
        </View>
      </SafeAreaView>
    </LinearGradient>
    
    
  );
}



