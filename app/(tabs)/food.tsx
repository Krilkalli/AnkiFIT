import React from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { useRouter } from 'expo-router'

const Food = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        <Text className="text-3xl font-bold mb-6 text-center">Питание</Text>
        
        <TouchableOpacity 
          onPress={() => router.push("../man/breakfast")}
          className="mb-4 rounded-xl overflow-hidden"
        >
          <Image
            source={require('../../assets/images/breakfast1.png')}
            className="w-full h-32"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-black opacity-30" />
          <View className="absolute inset-y-10 left-0 flex items-center px-4">
            <Text className="text-white text-3xl font-bold">
              Завтрак
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push("../woman/snack")}
          className="mb-4 rounded-xl overflow-hidden"
        >
          <Image
            source={require('../../assets/images/poldnik1.png')}
            className="w-full h-32"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-black opacity-30" />
          <View className="absolute inset-y-10 left-0 flex items-center px-4">
            <Text className="text-white text-3xl font-bold">
              Полдник
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push("../man/dinner")}
          className="mb-4 rounded-xl overflow-hidden"
        >
          <Image
            source={require('../../assets/images/dinner1.png')}
            className="w-full h-32"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-black opacity-30" />
          <View className="absolute inset-y-10 left-0 flex items-center px-4">
            <Text className="text-white text-3xl font-bold">
              Обед
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Food

