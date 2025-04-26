import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const snack = () => {
    const router = useRouter();
  return (
    <View>
      <Text>snack</Text>
    </View>
  )
}

export default snack

const styles = StyleSheet.create({})