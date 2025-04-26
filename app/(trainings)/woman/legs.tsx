import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Exercise } from '../../types';
import exerciseData from '../../data/exercises';
import ExerciseList from '../../components/ExerciseList';
import ExerciseModal from '../../components/ExerciseModal';

const legsExercises = () => {
  const router = useRouter();
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedExercise(null);
  };

  const image = {
    uri: "https://raw.githubusercontent.com/Anr186/AnkiFIT_Source/56706f3bd04e18c3821f7e589129defb6fa39c66/image/Splash.svg",
  };

  const getImageForExercise = (exercise: Exercise) => {
    if (exercise.id === '2') {
      return image;
    }
    return null;
  };

  const imageSource = selectedExercise ? getImageForExercise(selectedExercise) : null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ноги</Text>
      
      <FlatList
        data={exerciseData}
        renderItem={({ item }) => (
          <ExerciseList item={item} onPress={openModal} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <ExerciseModal
        render_image={imageSource}
        visible={modalVisible}
        exercise={selectedExercise}
        onClose={closeModal}
      />

      <TouchableOpacity 
        onPress={() => router.back()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>
          Назад
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    paddingVertical: 8,
  },
  backButton: {
    marginTop: 16,
    width: 160,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default legsExercises;