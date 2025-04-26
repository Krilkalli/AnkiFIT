import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions, TextInput } from 'react-native';
import React, { useState, useEffect } from "react";
import { useRouter } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import { format, parseISO } from 'date-fns';
import { LineChart } from 'react-native-chart-kit';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface User {
  id: string;
  name: string;
  age: string;
  weight: string;
  height: string;
  gender: string;
}

interface DailyPlan {
  date: string;
  plan: string;
}

const userFilePath = `${FileSystem.documentDirectory}user.json`;
const plansFilePath = `${FileSystem.documentDirectory}data.json`;

const Profile: React.FC = () => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [gender, setGender] = useState<string>('male');
  const [plans, setPlans] = useState<DailyPlan[]>([]);
  const [weightData, setWeightData] = useState<number[]>([75, 75.2, 75, 74.8, 75, 75.2, 75]);

  useEffect(() => {
    loadUser();
    loadPlans();
  }, []);

  const loadUser = async () => {
    const fileInfo = await FileSystem.getInfoAsync(userFilePath);

    if (fileInfo.exists) {
      const jsonData = await FileSystem.readAsStringAsync(userFilePath);
      const existingUser = JSON.parse(jsonData) as User;
      setUser(existingUser);
      setName(existingUser.name);
      setAge(existingUser.age);
      setWeight(existingUser.weight);
      setHeight(existingUser.height);
      setGender(existingUser.gender);
    }
  };

  const loadPlans = async () => {
    const fileInfo = await FileSystem.getInfoAsync(plansFilePath);
    if (fileInfo.exists) {
      const jsonData = await FileSystem.readAsStringAsync(plansFilePath);
      setPlans(JSON.parse(jsonData));
    }
  };

  const saveUser = async () => {
    const updatedUser: User = {
      id: user?.id || Date.now().toString(),
      name,
      age,
      weight,
      height,
      gender,
    };

    setUser(updatedUser);
    await FileSystem.writeAsStringAsync(userFilePath, JSON.stringify(updatedUser));
    setEditing(false);
  };

  if (!user && !editing) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Данных пользователя нет. Нажмите "Редактировать", чтобы добавить их.</Text>
        <TouchableOpacity onPress={() => setEditing(true)} style={{ backgroundColor: '#007AFF', borderRadius: 8, paddingVertical: 12, paddingHorizontal: 24, marginTop: 16 }}>
          <Text style={{ color: '#fff', fontWeight: '600' }}>Редактировать</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: '600', marginBottom: 20 }}>
          Профиль
        </Text>

        {/* Profile Card */}
        <View style={{ flexDirection: 'row', marginBottom: 24 }}>
          <View style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: '#FFA500',
            marginRight: 16,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image
              source={require('../../assets/images/SplashScreen.png')}
              style={{ width: 80, height: 80, borderRadius: 40, }}
            />
          </View>

          <View style={{
            backgroundColor: '#FF6B00',
            borderRadius: 20,
            padding: 8,
            height: 36,
            justifyContent: 'center'
          }}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>
              23 дня в ударе
            </Text>
          </View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: '#214770',
              borderRadius: 15,
              paddingHorizontal: 12,
              paddingVertical: 6,
            }}
            onPress={() => setEditing(!editing)}
          >
            <Text style={{ color: '#fff', fontWeight: '600' }}>
              {editing ? 'Отмена' : 'Редактировать'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Stats Card */}
        <View style={{
          backgroundColor: '#F5F5F5',
          borderRadius: 16,
          padding: 20,
          marginBottom: 24
        }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            <Text style={{ color: '#666' }}>Имя:</Text>
            {editing ? (
              <TextInput
                value={name}
                onChangeText={setName}
                style={{ borderBottomWidth: 1, borderColor: '#007AFF', paddingBottom: 2, width: '50%', textAlign: 'right' }}
              />
            ) : (
              <Text>{user?.name }</Text>
            )}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            <Text style={{ color: '#666' }}>Возраст:</Text>
            {editing ? (
              <TextInput
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
                style={{ borderBottomWidth: 1, borderColor: '#007AFF', paddingBottom: 2, width: '50%', textAlign: 'right' }}
              />
            ) : (
              <Text>{user?.age} лет</Text>
            )}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            <Text style={{ color: '#666' }}>Рост:</Text>
            {editing ? (
              <TextInput
                value={height}
                onChangeText={setHeight}
                keyboardType="numeric"
                style={{ borderBottomWidth: 1, borderColor: '#007AFF', paddingBottom: 2, width: '50%', textAlign: 'right' }}
              />
            ) : (
              <Text>{user?.height} см.</Text>
            )}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            <Text style={{ color: '#666' }}>Вес:</Text>
            {editing ? (
              <TextInput
                value={weight}
                onChangeText={setWeight}
                keyboardType="numeric"
                style={{ borderBottomWidth: 1, borderColor: '#007AFF', paddingBottom: 2, width: '50%', textAlign: 'right' }}
              />
            ) : (
              <Text>{user?.weight} кг.</Text>
            )}
          </View>

          <View style={{ marginTop: 8 }}>
            <Text style={{ color: '#666', marginBottom: 8 }}>Пол:</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', marginRight: 24 }}
                onPress={() => !editing && setGender('male')}
              >
                <View style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#000',
                  backgroundColor: gender === 'male' ? '#000' : 'transparent',
                  marginRight: 8
                }} />
                <Text>Мужской</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => !editing && setGender('female')}
              >
                <View style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#000',
                  backgroundColor: gender === 'female' ? '#000' : 'transparent',
                  marginRight: 8
                }} />
                <Text>Женский</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {editing && (
          <TouchableOpacity
            style={{
              backgroundColor: '#007AFF',
              borderRadius: 8,
              paddingVertical: 12,
              alignItems: 'center',
              marginBottom: 24,
            }}
            onPress={saveUser}
          >
            <Text style={{ color: '#fff', fontWeight: '600' }}>Сохранить</Text>
          </TouchableOpacity>
        )}

        {/* Weight Chart */}
        <View style={{ marginBottom: 24 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            <Text style={{ color: '#666' }}>Текущий</Text>
            <View>
              <Text style={{ textAlign: 'right' }}>Самый большой вес</Text>
              <Text style={{ textAlign: 'right' }}>Самый легкий вес</Text>
            </View>
          </View>

          <Text style={{ fontSize: 24, fontWeight: '600', marginBottom: 16 }}>{user?.weight} кг</Text>

          <LineChart
            data={{
              labels: ['24', '25', '26', '27', '28', '29', '30'],
              datasets: [{
                data: weightData
              }]
            }}
            width={Dimensions.get('window').width - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
        {editing ? (
          <>
            <TextInput
              placeholder="Имя"
              value={name}
              onChangeText={setName}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,
              }}
            />
            <TextInput
              placeholder="Возраст"
              value={age}
              onChangeText={setAge}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,
              }}
            />
            <TextInput
              placeholder="Вес"
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,
              }}
            />
            <TextInput
              placeholder="Рост"
              value={height}
              onChangeText={setHeight}
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,
              }}
            />
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Выберите пол:</Text>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <TouchableOpacity
                onPress={() => setGender('male')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 20,
                }}
              >
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: '#000',
                    backgroundColor: gender === 'male' ? '#000' : '#fff',
                    marginRight: 5,
                  }}
                />
                <Text>Мужской</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setGender('female')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: '#000',
                    backgroundColor: gender === 'female' ? '#000' : '#fff',
                    marginRight: 5,
                  }}
                />
                <Text>Женский</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={saveUser} style={{ backgroundColor: '#007AFF', borderRadius: 8, paddingVertical: 12, paddingHorizontal: 24, marginTop: 16 }}>
              <Text style={{ color: '#fff', fontWeight: '600' }}>Сохранить</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Планы тренировок</Text>
            {plans
              .sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime())
              .map((plan, index) => (
                <View key={index} style={{ marginBottom: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
                  <Text style={{ fontWeight: 'bold' }}>{format(new Date(plan.date), 'dd.MM')}</Text>
                  <Text>{plan.plan}</Text>
                </View>
              ))}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Profile;

