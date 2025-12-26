import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon, BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import { useEffect, useState } from 'react';
import { categories } from './helpers/Categories';
import CategoryCard from './components/CategoryCard';
import { getByCategory } from './api/BooksService';


export default function App() {

  const [activeCategory, setActiveCagtegory] = useState(categories[0]);
  const [books, setBooks] = useState([]);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    getByCategory(activeCategory).then(response => {
      setTimeout(() => {
        setResponse(response);
        setBooks(response.items);
      },2000);
    });
  });

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

          
        
          
        </View>
      </SafeAreaView>
    </LinearGradient>
    
    
  );
}



