import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: { backgroundColor: '#F8F8F8' },
                headerTintColor: '#000',
                tabBarActiveTintColor: '#007AFF',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Daftar Mahasiswa',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="user/[id]"
                options={{
                    href: null,                     
                    title: 'Detail Mahasiswa',     
                    headerTintColor: '#007AFF',
                }}
            />
        </Tabs>
    );
}