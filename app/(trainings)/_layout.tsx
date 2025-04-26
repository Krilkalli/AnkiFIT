import { Stack } from 'expo-router';
import React from 'react';

export default function TrainingsLayout() {
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
        name="woman/legs" 
        options={{
          title: "Ноги",
          headerShown: true,
        }} 
      />
      <Stack.Screen 
        name="woman/abs" 
        options={{
          title: "Пресс",
          headerShown: true,
        }} 
      />
      <Stack.Screen 
        name="man/hands" 
        options={{
          title: "Упражнения для рук",
          headerShown: true,
        }} 
      />
      <Stack.Screen 
        name="man/chest" 
        options={{
          title: "Грудные мышцы",
          headerShown: true,
        }} 
      />
    </Stack>
  );
}