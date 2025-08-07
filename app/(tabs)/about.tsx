import { ScrollView, Text } from 'react-native';

export default function AboutScreen() {
    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Tentang Aplikasi</Text>
            <Text style={{ fontSize: 16, lineHeight: 22 }}>
                Aplikasi ini dibuat sebagai tugas React Native 8 dari Lab Aplikasi Komputasi Bergerak. Aplikasi ini memiliki
                tiga halaman utama:
                {'\n\n'}1. <Text style={{ fontWeight: 'bold' }}>Home</Text> - Menampilkan informasi dan gambar tentang Unismuh Makassar.
                {'\n\n'}2. <Text style={{ fontWeight: 'bold' }}>About</Text> - Menjelaskan tujuan dan isi dari aplikasi ini.
                {'\n\n'}3. <Text style={{ fontWeight: 'bold' }}>Profil</Text> - Menampilkan data diri pembuat aplikasi seperti nama, NIM, kelas, dan jurusan.
            </Text>
        </ScrollView>
    );
}
