import { Stack } from 'expo-router';
import React from 'react';

export default function FoodLayout() {
  return (
    <Stack screenOptions={{
      headerShown: true,
      headerBackTitle: "Назад",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen 
        name="woman/snack" 
        options={{
          title: "Перекус",
          headerShown: true,
        }} 
      />
      <Stack.Screen 
        name="woman/breakfast" 
        options={{
          title: "ПП завтрак",
          headerShown: true,
        }} 
      />
      <Stack.Screen 
        name="man/breakfast" 
        options={{
          title: "Полезный завтрак",
          headerShown: true,
        }} 
      />
      <Stack.Screen 
        name="man/dinner" 
        options={{
          title: "Крутой ужин",
          headerShown: true,
        }} 
      />
    </Stack>
  );
}