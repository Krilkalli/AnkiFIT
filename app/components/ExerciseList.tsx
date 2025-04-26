import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Exercise } from '../types';

interface ExerciseListProps {
  item: Exercise;
  onPress: (item: Exercise) => void;
}

const ExerciseList = ({ item, onPress }: ExerciseListProps) => (
  <TouchableOpacity 
    style={styles.listItem} 
    onPress={() => onPress(item)}
  >
    <Text style={styles.listItemText}>{item.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ExerciseList;