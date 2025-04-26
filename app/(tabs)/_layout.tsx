import { StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface TabIconProps {
  iconName: React.ComponentProps<typeof Ionicons>['name'] | React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  iconType: 'Ionicons' | 'MaterialCommunityIcons';
  name: string;
}

const TabIcon: React.FC<TabIconProps> = ({ iconName, iconType, name}) => {
  return (
    <View style={styles.tabIconContainer}>
      {iconType === 'Ionicons' ? (
        <Ionicons name={iconName as React.ComponentProps<typeof Ionicons>['name']} size={30}/>
      ) : (
        <MaterialCommunityIcons name={iconName as React.ComponentProps<typeof MaterialCommunityIcons>['name']} size={30}/>
      )}
      <Text style={[styles.tabIconText]}>{name}</Text>
    </View>
  )
};

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: '#8E8E93',
      tabBarStyle: styles.tabBar,
    }}>
      <Tabs.Screen 
        name="training" 
        options={{
          title: "", 
          headerShown: false, 
          tabBarIcon: () => <TabIcon iconName="barbell-outline" iconType="Ionicons" name=""  />
        }}
      />
      <Tabs.Screen 
        name="food" 
        options={{
          title: "", 
          headerShown: false, 
          tabBarIcon: () => <TabIcon iconName="restaurant-outline" iconType="Ionicons" name="" />
        }}
      />
      <Tabs.Screen 
        name="chatbot" 
        options={{
          title: "", 
          headerShown: false, 
          tabBarIcon: () => <TabIcon iconName="robot-love-outline" iconType="MaterialCommunityIcons" name="" />
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: "", 
          headerShown: false, 
          tabBarIcon: () => <TabIcon iconName="person-outline" iconType="Ionicons" name="" />
        }}
      />
      <Tabs.Screen 
        name="settings" 
        options={{
          title: "", 
          headerShown: false, 
          tabBarIcon: () => <TabIcon iconName="settings-outline" iconType="Ionicons" name=""/>
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
  },
  tabIconText: {
    marginVertical: -20
  },
  tabBar: {
    backgroundColor: '#F2F2F7',
    height: 60
  },
});

export default TabsLayout

