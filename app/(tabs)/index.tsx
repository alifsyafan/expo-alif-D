import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { DATA_MAHASISWA } from '../../data/mahasiswa';

export default function DaftarMahasiswaScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Daftar Mahasiswa</Text>

            <FlatList
                data={DATA_MAHASISWA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link href={`/user/${item.id}`} asChild>
                        <TouchableOpacity style={styles.itemContainer}>
                            <View style={styles.itemInfo}>
                                <Ionicons name="person-circle-outline" size={24} color="#007AFF" />
                                <Text style={styles.itemText}>{item.nama}</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                        </TouchableOpacity>
                    </Link>
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={{ paddingBottom: 16 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    title: { fontSize: 22, fontWeight: 'bold', paddingHorizontal: 20, paddingTop: 16, paddingBottom: 6 },
    itemContainer: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        paddingVertical: 14, paddingHorizontal: 20, backgroundColor: '#fff',
    },
    itemInfo: { flexDirection: 'row', alignItems: 'center' },
    itemText: { fontSize: 16, marginLeft: 12, flexShrink: 1 },
    separator: { height: 1, backgroundColor: '#E5E5EA', marginLeft: 60 },
});
