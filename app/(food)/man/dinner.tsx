import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Dinner = () => {
    const router = useRouter();
    return (
        <View>
            <Text>Dinner</Text>
        </View>
  )
}

export default Dinner

const styles = StyleSheet.create({})