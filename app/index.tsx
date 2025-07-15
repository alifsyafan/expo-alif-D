import { Image as ExpoImage } from "expo-image";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [imageStates, setImageStates] = useState(
    Array.from({ length: 9 }, () => ({
      isAlternate: false,
      scale: 1,
      clickCount: 0
    }))
  );

  const imageData = [
    {
      main: "https://images.alphacoders.com/134/1341120.png",
      alternate: "https://images5.alphacoders.com/462/462370.jpg"
    },
    {
      main: "https://images5.alphacoders.com/133/1330264.png",
      alternate: "https://images4.alphacoders.com/417/41774.jpg"
    },
    {
      main: "https://images.alphacoders.com/824/824838.jpg",
      alternate: "https://images.alphacoders.com/773/773531.jpg"
    },
    {
      main: "https://images4.alphacoders.com/135/1358294.jpeg",
      alternate: "https://images3.alphacoders.com/121/121797.jpg"
    },
    {
      main: "https://images3.alphacoders.com/133/1330268.png",
      alternate: "https://images2.alphacoders.com/437/437349.jpg"
    },
    {
      main: "https://images2.alphacoders.com/634/6340.jpg",
      alternate: "https://images6.alphacoders.com/681/681657.jpg"
    },
    {
      main: "https://images.alphacoders.com/135/1357436.jpeg",
      alternate: "https://images8.alphacoders.com/136/thumb-1920-1363709.png"
    },
    {
      main: "https://images.alphacoders.com/554/55473.jpg",
      alternate: "https://images4.alphacoders.com/242/242474.jpg"
    },
    {
      main: "https://images7.alphacoders.com/456/456120.jpg",
      alternate: "https://images6.alphacoders.com/407/407482.jpg"
    }
  ];

  // Fungsi untuk menangani klik gambar
  const handleImagePress = (index) => {
    setImageStates(prevStates => {
      const newStates = [...prevStates];
      const currentState = newStates[index];

      // Maksimal 2 klik per gambar
      if (currentState.clickCount < 2) {
        newStates[index] = {
          ...currentState,
          isAlternate: !currentState.isAlternate,
          scale: currentState.scale === 1 ? 1.2 :
            currentState.scale === 1.2 ? 2.4 : 1,
          clickCount: currentState.clickCount + 1
        };
      }

      return newStates;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.triangle} />

      <View style={styles.rectangle}>
        <Text style={styles.text}>Muhammad Alif Syafan</Text>
      </View>

      <View style={styles.pill}>
        <Text style={styles.text}>105841114422</Text>
      </View>

      {/* Grid gambar 3x3 */}
      <View style={styles.gridContainer}>
        {imageData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageContainer}
            onPress={() => handleImagePress(index)}
          >
            <ExpoImage
              source={{
                uri: imageStates[index].isAlternate ? item.alternate : item.main
              }}
              style={[
                styles.image,
                {
                  transform: [{ scale: imageStates[index].scale }]
                }
              ]}
              contentFit="cover"
            />
          </TouchableOpacity>
        ))}
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
    marginBottom: 30,
  },
  // Gaya untuk teks di dalam bentuk
  text: {
    color: 'white', // Warna teks putih agar kontras
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Kontainer untuk grid gambar
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  // Kontainer untuk setiap gambar
  imageContainer: {
    width: 90,
    height: 90,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Gaya untuk gambar
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});