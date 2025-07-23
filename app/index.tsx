import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Foundation,
  SimpleLineIcons
} from '@expo/vector-icons';

const IconScreen = () => {
  const icons = [
    { name: 'rocket', Component: Ionicons, color: '#e74c3c', label: 'Roket' },
    { name: 'star', Component: FontAwesome, color: '#f1c40f', label: 'Bintang' },
    { name: 'flight', Component: MaterialIcons, color: '#3498db', label: 'Pesawat' },
    { name: 'car', Component: MaterialCommunityIcons, color: '#9b59b6', label: 'Mobil' },
    { name: 'heart', Component: AntDesign, color: '#e91e63', label: 'Hati' },
    { name: 'camera', Component: Entypo, color: '#34495e', label: 'Kamera' },
    { name: 'cloud', Component: Feather, color: '#95a5a6', label: 'Cloud' },
    { name: 'music', Component: FontAwesome5, color: '#1abc9c', label: 'Musik' },
    { name: 'trees', Component: Foundation, color: '#27ae60', label: 'Pohon' },
    { name: 'energy', Component: SimpleLineIcons, color: '#f39c12', label: 'Energi' }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>

      <View style={styles.grid}>
        {icons.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            <icon.Component
              name={icon.name}
              size={48}
              color={icon.color}
            />
            <Text style={styles.label}>{icon.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2c3e50',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 100,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
    color: '#34495e',
  },
});

export default IconScreen;