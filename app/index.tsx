import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

// DATA: 9 pasang gambar (utama dan alternatif)
const galleryImages = [
  { mainUrl: "https://images.alphacoders.com/134/1341120.png", alternateUrl: "https://images5.alphacoders.com/462/462370.jpg" },
  { mainUrl: "https://images5.alphacoders.com/133/1330264.png", alternateUrl: "https://images4.alphacoders.com/417/41774.jpg" },
  { mainUrl: "https://images.alphacoders.com/824/824838.jpg", alternateUrl: "https://images.alphacoders.com/773/773531.jpg" },
  { mainUrl: "https://images4.alphacoders.com/135/1358294.jpeg", alternateUrl: "https://images3.alphacoders.com/121/121797.jpg" },
  { mainUrl: "https://images3.alphacoders.com/133/1330268.png", alternateUrl: "https://images2.alphacoders.com/437/437349.jpg" },
  { mainUrl: "https://images2.alphacoders.com/634/6340.jpg", alternateUrl: "https://images6.alphacoders.com/681/681657.jpg" },
  { mainUrl: "https://images.alphacoders.com/135/1357436.jpeg", alternateUrl: "https://images.alphacoders.com/824/824838.jpg" },
  { mainUrl: "https://images.alphacoders.com/554/55473.jpg", alternateUrl: "https://images4.alphacoders.com/242/242474.jpg" },
  { mainUrl: "https://images7.alphacoders.com/456/456120.jpg", alternateUrl: "https://images6.alphacoders.com/407/407482.jpg" }
];

export default function InteractiveImageGrid() {
  // State untuk melacak status setiap gambar (apakah versi alternatif & skala pembesarannya)
  const [imageStates, setImageStates] = useState(
    galleryImages.map(() => ({
      isAlternate: false,
      scale: 1.0,
    }))
  );

  const handleImagePress = (index) => {
    setImageStates((currentStates) => {
      // Buat salinan state agar tidak mengubah state asli secara langsung
      const newStates = [...currentStates];
      const targetState = { ...newStates[index] };
      const MAX_SCALE = 2.0;

      // Jika skala sudah mencapai atau melebihi maksimal, reset ke kondisi awal
      if (targetState.scale >= MAX_SCALE) {
        targetState.isAlternate = false;
        targetState.scale = 1.0;
      } else {
        // Jika belum, tampilkan gambar alternatif dan perbesar ukurannya
        targetState.isAlternate = true;
        const newScale = targetState.scale * 1.2;
        // Gunakan Math.min untuk memastikan skala tidak melebihi MAX_SCALE
        targetState.scale = Math.min(newScale, MAX_SCALE);
      }

      newStates[index] = targetState;
      return newStates;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {galleryImages.map((image, index) => {
          const state = imageStates[index];
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleImagePress(index)}
              activeOpacity={0.8}
            >
              <Image
                source={{
                  uri: state.isAlternate ? image.alternateUrl : image.mainUrl
                }}
                style={[
                  styles.imageTile,
                  {
                    transform: [{ scale: state.scale }],
                    // zIndex memastikan gambar yang membesar akan tampil di atas gambar lain
                    zIndex: state.scale > 1 ? 1 : 0
                  },
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Kontainer utama untuk menengahkan grid
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50", // Latar belakang gelap agar gambar lebih menonjol
  },
  // Kontainer untuk grid 3x3
  grid: {
    width: 312, // (lebar 100 + margin 2*2) * 3 kolom = 312
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  // Style untuk setiap sel gambar
  imageTile: {
    width: 100,
    height: 100,
    margin: 2,
    backgroundColor: "#34495e", // Warna placeholder saat gambar sedang loading
    borderRadius: 8,
  },
});