import { Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from "react";
import { useRouter } from 'expo-router';
import * as FileSystem from 'expo-file-system';

interface User {
  id: string;
  name: string;
  age: string;
  weight: string;
  height: string;
  gender: string;
}

const filePath = `${FileSystem.documentDirectory}user.json`;

const Indata: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const saveUser = async () => {
    const updatedUser: User = {
      id: Date.now().toString(),
      name,
      age,
      weight,
      height,
      gender,
    };

    await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedUser));

    if (gender === 'male') {
      router.replace('/training');
    } else if (gender === 'female') {
      router.replace('/wtraining');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <Text style={{ 
            fontSize: 28, 
            fontWeight: '600',
            marginBottom: 16,
            textAlign: 'center'
          }}>
            Расскажите немного о себе
          </Text>
          
          <Text style={{ 
            fontSize: 16, 
            color: '#666',
            marginBottom: 32,
            textAlign: 'center',
            paddingHorizontal: 20
          }}>
            Эта информация необходима, чтобы обеспечить правильную персонализацию в приложении AnkiFIT.
          </Text>

          <View style={{
            backgroundColor: '#f0f0f0',
            borderRadius: 20,
            padding: 20,
            marginBottom: 32
          }}>
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 8 }}>Имя:</Text>
              <TextInput
                placeholder="Как вас зовут?"
                value={name}
                onChangeText={setName}
                style={{
                  fontSize: 16,
                  color: '#666',
                  paddingVertical: 4
                }}
              />
            </View>

            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 8 }}>Возраст:</Text>
              <TextInput
                placeholder="Сколько вам лет?"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
                style={{
                  fontSize: 16,
                  color: '#666',
                  paddingVertical: 4
                }}
              />
            </View>

            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 8 }}>Рост:</Text>
              <TextInput
                placeholder="Какого вы роста?"
                value={height}
                onChangeText={setHeight}
                keyboardType="numeric"
                style={{
                  fontSize: 16,
                  color: '#666',
                  paddingVertical: 4
                }}
              />
            </View>

            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 8 }}>Вес:</Text>
              <TextInput
                placeholder="не указан."
                value={weight}
                onChangeText={setWeight}
                keyboardType="numeric"
                style={{
                  fontSize: 16,
                  color: '#666',
                  paddingVertical: 4
                }}
              />
            </View>
          </View>

          <View style={{ marginBottom: 32 }}>
            <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 16 }}>Пол:</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 32 }}>
              <TouchableOpacity 
                onPress={() => setGender('male')}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <View style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  borderWidth: 2,
                  borderColor: '#000',
                  backgroundColor: gender === 'male' ? '#000' : '#fff',
                  marginRight: 8
                }} />
                <Text style={{ fontSize: 16 }}>Мужской</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => setGender('female')}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <View style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  borderWidth: 2,
                  borderColor: '#000',
                  backgroundColor: gender === 'female' ? '#000' : '#fff',
                  marginRight: 8
                }} />
                <Text style={{ fontSize: 16 }}>Женский</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={saveUser}
            style={{
              backgroundColor: '#f0f0f0',
              paddingVertical: 16,
              borderRadius: 16,
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '500' }}>Готово</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Indata;

