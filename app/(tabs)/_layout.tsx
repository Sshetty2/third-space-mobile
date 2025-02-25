import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout () {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth : 1,
          borderTopColor : '#f0f0f0'
        },
        tabBarActiveTintColor  : '#FF4B91',
        tabBarInactiveTintColor: '#666666',
        headerShown            : false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title     : 'Home',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title     : 'Explore',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="compass" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title     : 'Chat',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title     : 'Community',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="people" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title     : 'Profile',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
