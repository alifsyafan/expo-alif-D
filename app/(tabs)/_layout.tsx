import { AntDesign } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabBarLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({ size, color }) => (
                    <AntDesign name="home" size={size} color={color} />
                )
            }} />

            <Tabs.Screen name="about" options={{
                title: "About",
                tabBarIcon: ({ size, color }) => (
                    <AntDesign name="user" size={size} color={color} />
                )
            }} />

            <Tabs.Screen
                name="profil" options={{
                    title: "Profil",
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="user" size={size} color={color} />
                    ),
                }}
            />

        </Tabs>
    )
}