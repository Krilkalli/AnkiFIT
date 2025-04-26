import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const breakfast = () => {
    const router = useRouter();
  return (
    <View>
      <Text>breakfast</Text>
    </View>
  )
}

export default breakfast

const styles = StyleSheet.create({})