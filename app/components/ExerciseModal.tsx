import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, Dimensions, SafeAreaView, StatusBar } from 'react-native';
import { Exercise } from '../types';

interface imageSource {
  uri: string;
}

interface ExerciseModalProps {
  visible: boolean;
  exercise: Exercise | null;
  onClose: () => void;
  render_image: imageSource | null;
}

const { width, height } = Dimensions.get('window');

const image2 = require("../../assets/images/chestlover.png");

const ExerciseModal = ({ visible, exercise, onClose, render_image }: ExerciseModalProps) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={visible}
    onRequestClose={onClose}
  >
    <SafeAreaView style={styles.modalContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.modalTitle}>{exercise?.title}</Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
        >
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image 
            source={image2} 
            style={styles.image} 
            resizeMode="cover"
          />
          <Text style={styles.brandText}>Ank1FIT</Text>
        </View>
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.modalDescription}>{exercise?.description}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={onClose}
        >
          <Text style={styles.modalButtonText}>Закрыть</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  closeButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    marginLeft: 16,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#666',
  },
  imageContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: width,
    height: height * 0.4,
    marginBottom: 16,
  },
  brandText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
  },
  descriptionContainer: {
    padding: 20,
    flex: 1,
  },
  modalDescription: {
    fontSize: 18,
    lineHeight: 26,
    color: '#333',
    textAlign: 'left',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: 'white',
  },
  modalButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ExerciseModal;