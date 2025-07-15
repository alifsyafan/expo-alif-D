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
        // Logika penskalaan yang benar:
        // Klik 1: scale 1.2x (dari 1x)
        // Klik 2: scale 2.4x (dari 1.2x) - ini adalah 2x dari scale sebelumnya
        let newScale;
        if (currentState.clickCount === 0) {
          newScale = 1.2; // Klik pertama
        } else if (currentState.clickCount === 1) {
          newScale = 2.4; // Klik kedua (2x dari 1.2)
        }

        newStates[index] = {
          ...currentState,
          isAlternate: !currentState.isAlternate,
          scale: newScale,
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

      {/* Grid gambar 3x3 dengan visual yang jelas */}
      <View style={styles.gridContainer}>
        {imageData.map((item, index) => (
          <View
            key={index}
            style={[
              styles.imageContainer,
              {
                zIndex: imageStates[index].scale > 1 ? 10 : 1, // Container yang membesar di atas
              }
            ]}
          >
            <TouchableOpacity
              style={styles.touchableArea}
              onPress={() => handleImagePress(index)}
            >
              <ExpoImage
                source={{
                  uri: imageStates[index].isAlternate ? item.alternate : item.main
                }}
                style={[
                  styles.image,
                  {
                    transform: [{ scale: imageStates[index].scale }],
                    zIndex: imageStates[index].scale > 1 ? 10 : 1, // Gambar yang membesar di atas
                  }
                ]}
                contentFit="cover"
              />
              {/* Debug info untuk verifikasi - dapat dihapus */}
              <View style={styles.debugContainer}>
                <Text style={styles.debugText}>
                  Scale: {imageStates[index].scale}x
                </Text>
                <Text style={styles.debugText}>
                  Clicks: {imageStates[index].clickCount}/2
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
  // Kontainer untuk grid gambar 3x3 - DIPERBAIKI
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Distribusi merata
    alignItems: 'flex-start',
    width: 300, // Diperbesar untuk memberi ruang scale
    height: 300, // Diperbesar untuk memberi ruang scale
    backgroundColor: '#ffffff',
    padding: 15, // Padding diperbesar
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  // Kontainer untuk setiap gambar - DIPERBAIKI
  imageContainer: {
    width: 80, // Ukuran tetap untuk grid 3x3
    height: 80, // Ukuran tetap untuk grid 3x3
    marginBottom: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    // overflow: 'hidden', // DIHAPUS - ini mencegah gambar membesar
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e9ecef',
  },
  // Gaya untuk gambar - DIPERBAIKI
  image: {
    width: 76, // Sedikit lebih kecil dari container
    height: 76, // Sedikit lebih kecil dari container
    borderRadius: 10,
  },
  // Debug container untuk verifikasi penskalaan
  debugContainer: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  debugText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
  // Touchable area untuk klik
  touchableArea: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});