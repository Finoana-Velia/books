import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon, BellIcon} from 'react-native-heroicons/solid';
import { useState } from 'react';

const categories = ["Action","Roman","Aventure","Science Fiction","Drame","Documentation"]
export default function App() {

  const [activeCategory, setActiveCagtegory] = useState("Action");

  return (

    <LinearGradient className="w-full flex-1" colors={['rgba(224, 231, 255, 1)','rgba(249, 250, 251, 1)']}>
      <SafeAreaView>
        <View className="container">
          <View className="flex-row justify-between items-center px-4">
            <Bars3CenterLeftIcon size="30" />
            <BellIcon size="30"/>
          </View>

          <View className="mt-3 space-y-3">
            <Text className="ml-4 text-3xl font-bold text-gray-500">Best Seller</Text>
          </View>
          <View className="pl-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                categories.map(cat => {
                  <TouchableOpacity
                    onPress={() => setActiveCagtegory(cat)}
                    key={cat}
                    className="bg-blue-200 p-3 px-4 rounded-full mr-2"
                  >
                    <Text>{cat}</Text>
                  </TouchableOpacity>
                })
              }
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
    
    
  );
}


