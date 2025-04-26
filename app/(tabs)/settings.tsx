import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMinimalistTheme, setIsMinimalistTheme] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationTrackingEnabled, setLocationTrackingEnabled] = useState(true);

  const handlePlayMarketReview = () => {
    // Здесь должна быть ссылка на ваше приложение в Play Market
    Linking.openURL('https://github.com/Anr186/AnkiFIT_Source/blob/master/image/SplashScreen.png?raw=true');
  };

  const handleSave = () => {
    // Здесь должна быть логика сохранения настроек
    console.log('Настройки сохранены');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Настройки</Text>
      
      <View style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <Ionicons name="moon-outline" size={24} color="#666" />
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>Тема приложения</Text>
            <Text style={styles.settingSubtitle}>темная/светлая</Text>
          </View>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
        />
      </View>

      <View style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <Ionicons name="color-palette-outline" size={24} color="#666" />
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>Стиль темы</Text>
            <Text style={styles.settingSubtitle}>-Минималистичная{'\n'}-Киберпанк(в разработке)</Text>
          </View>
        </View>
        <Switch
          value={isMinimalistTheme}
          onValueChange={setIsMinimalistTheme}
        />
      </View>

      <TouchableOpacity style={styles.settingItem} onPress={handlePlayMarketReview}>
        <View style={styles.settingLeft}>
          <Ionicons name="chatbox-outline" size={24} color="#666" />
          <View style={styles.textContainer}>
            <Text style={[styles.settingTitle, styles.linkText]}>Отзыв в Play Market</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <Ionicons name="notifications-outline" size={24} color="#666" />
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>Уведомления о пропусках</Text>
            <Text style={styles.settingSubtitle}>Помогут не забыть о приложении</Text>
          </View>
        </View>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      <View style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <Ionicons name="location-outline" size={24} color="#666" />
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>Отслеживание геолокации</Text>
            <Text style={styles.settingSubtitle}>Необходимо для беговых тренировок</Text>
          </View>
        </View>
        <Switch
          value={locationTrackingEnabled}
          onValueChange={setLocationTrackingEnabled}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Сохранить</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    marginRight: 16,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  linkText: {
    color: '#007AFF',
  },
  saveButton: {
    backgroundColor: '#E5E5E5',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default settings;