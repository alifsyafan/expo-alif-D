import { View, Text, Image, ScrollView } from 'react-native';

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Unismuh Makassar</Text>
            <Image
                source={require('../../assets/images/unismuh.jpeg')}
                style={{ width: '100%', height: 400, marginBottom: 15, borderRadius: 10 }}
                resizeMode="cover"
            />
            <Text style={{ fontSize: 16, lineHeight: 22 }}>
                Universitas Muhammadiyah Makassar (Unismuh Makassar) adalah salah satu perguruan tinggi swasta
                terkemuka di Indonesia Timur. Terletak di Kota Makassar, Sulawesi Selatan, Unismuh menawarkan berbagai
                program studi berkualitas yang didukung oleh tenaga pengajar profesional dan fasilitas memadai.
            </Text>
        </ScrollView>
    );
}