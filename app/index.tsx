import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* 1. Bentuk Segitiga */}
      {/* Dibuat dengan trik border pada View yang tidak memiliki lebar/tinggi */}
      <View style={styles.triangle} />

      {/* 2. Bentuk Persegi Panjang dengan Teks */}
      <View style={styles.rectangle}>
        <Text style={styles.text}>Muhammad Alif Syafan</Text>
      </View>

      {/* 3. Bentuk Pil (Capsule) dengan Teks */}
      <View style={styles.pill}>
        <Text style={styles.text}>105841114422</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Kontainer utama untuk menengahkan semua bentuk
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f0f0f0', // Latar belakang netral agar bentuk terlihat jelas
  },
  // Gaya untuk membuat segitiga menggunakan properti border.
  // Lebar dan tinggi diatur ke 0, bentuknya sendiri dibuat oleh border.
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,      // Setengah dari lebar alas segitiga
    borderRightWidth: 50,     // Setengah dari lebar alas segitiga
    borderBottomWidth: 100,   // Tinggi segitiga
    borderLeftColor: 'transparent', // Border samping dibuat transparan
    borderRightColor: 'transparent',// Border samping dibuat transparan
    borderBottomColor: '#e74c3c',   // Ini adalah warna segitiga yang terlihat
    marginBottom: 30, // Memberi jarak ke elemen berikutnya
  },
  // Gaya untuk persegi panjang
  rectangle: {
    width: 280, // Lebar tetap
    height: 70, // Tinggi tetap
    backgroundColor: '#3498db', // Warna biru
    justifyContent: 'center',   // Teks di tengah (vertikal)
    alignItems: 'center',       // Teks di tengah (horizontal)
    borderRadius: 10,           // Sudut sedikit membulat
    marginBottom: 30, // Memberi jarak ke elemen berikutnya
    paddingHorizontal: 10,
  },
  // Gaya untuk bentuk pil/kapsul
  pill: {
    width: 280, // Lebar tetap
    height: 70, // Tinggi tetap
    backgroundColor: '#2ecc71', // Warna hijau
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius setengah dari tinggi akan menciptakan bentuk pil sempurna
    borderRadius: 35,
    paddingHorizontal: 10,
  },
  // Gaya untuk teks di dalam bentuk
  text: {
    color: 'white', // Warna teks putih agar kontras
    fontSize: 18,
    fontWeight: 'bold',
  },
});