import { View, Text, Image, ScrollView } from 'react-native';

export default function ProfilScreen() {
    return (
        <ScrollView contentContainerStyle={{ padding: 20, alignItems: 'center' }}>
            <Image
                source={require('../../assets/images/profil.jpg')}
                style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20 }}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nama: Muhammad Alif Syafan</Text>
            <Text style={{ fontSize: 16 }}>NIM: 10584111442</Text>
            <Text style={{ fontSize: 16 }}>Kelas: 6-D</Text>
            <Text style={{ fontSize: 16 }}>Jurusan: Teknik Informatika</Text>
            <Text style={{ fontSize: 16 }}>Fakultas: Teknik</Text>
        </ScrollView>
    );
}