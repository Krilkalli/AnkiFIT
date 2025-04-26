import { TouchableOpacity, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import React from 'react'

const wFood = () => {
  const router = useRouter();
  return (
    <View className="flex-1 p-4 justify-center">
      <Text className="text-xl mb-4 text-center">Полезные перекусы</Text>
      
      <TouchableOpacity 
        onPress={() => router.push("../woman/breakfast")}
        className="mb-4 p-8 rounded-lg bg-green-500 shadow-md"
      >
        <Text className="text-white text-xl font-bold mb-2 text-center">
          ПП завтрак
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => router.push("../woman/snack")}
        className="mb-4 p-8 rounded-lg bg-green-500 shadow-md"
      >
        <Text className="text-white text-xl font-bold mb-2 text-center">
          Перекус
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default wFood