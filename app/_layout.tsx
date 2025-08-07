import { Stack, useNavigation } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import React from "react";

export default function RootLayout() {

  return <Stack >
    <Stack.Screen name="(tabs)" options={{
      headerShown: false
    }} />
  </Stack>
}