import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { DATA_MAHASISWA } from '../../../data/mahasiswa';

export default function DetailMahasiswaScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const navigation = useNavigation();
    const [imgError, setImgError] = useState(false);

    const mahasiswa = DATA_MAHASISWA.find((m) => m.id === id);

    useEffect(() => {
        if (mahasiswa) {
            navigation.setOptions?.({ headerTitle: mahasiswa.nama });
        }
    }, [mahasiswa, navigation]);

    if (!mahasiswa) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
                <Text style={styles.errorText}>Mahasiswa tidak ditemukan.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image
                source={
                    imgError
                        ? { uri: 'https://placehold.co/150x150/EFEFEF/AAAAAA?text=Foto' }
                        : { uri: mahasiswa.fotoUrl }
                }
                onError={() => setImgError(true)}
                style={styles.foto}
            />
            <Text style={styles.nama}>{mahasiswa.nama}</Text>
            <Text style={styles.nim}>NIM: {mahasiswa.nim}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F2F2F7', alignItems: 'center', padding: 20 },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F7' },
    foto: {
        width: 150, height: 150, borderRadius: 75, marginBottom: 20,
        borderWidth: 3, borderColor: '#fff', backgroundColor: '#EFEFEF',
        shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4,
    },
    nama: { fontSize: 22, fontWeight: 'bold', marginBottom: 6, textAlign: 'center' },
    nim: { fontSize: 16, color: 'gray' },
    errorText: { marginTop: 10, fontSize: 16, color: 'red' },
});
