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
  const [imageStates, setImageStates] = useState(
    galleryImages.map(() => ({
      isAlternate: false,
      scale: 1.0,
    }))
  );

  const handleImagePress = (index) => {
    setImageStates((currentStates) => {
      const newStates = [...currentStates];
      const targetState = { ...newStates[index] };
      const MAX_SCALE = 2.0; // Batas maksimal skala

      // Cek jika skala sudah mencapai atau melebihi batas maksimal
      if (targetState.scale >= MAX_SCALE) {
        // Reset ke kondisi awal jika sudah maksimal
        targetState.isAlternate = false;
        targetState.scale = 1.0;
      } else {
        // Tampilkan gambar alternatif
        targetState.isAlternate = true;

        // **FITUR 1: Skala meningkat 1.2x pada setiap klik**
        const newScale = targetState.scale * 1.2;

        // **FITUR 2: Skala dibatasi hingga maksimal 2x**
        // Math.min akan memilih nilai yang lebih kecil antara hasil perkalian dan MAX_SCALE.
        // Ini memastikan skala tidak akan pernah melebihi 2.0.
        targetState.scale = Math.min(newScale, MAX_SCALE);
      }

      // **FITUR 3: Perubahan hanya berlaku untuk gambar yang diklik**
      // Hanya elemen pada 'index' yang spesifik yang diperbarui.
      // Elemen lain di dalam array 'newStates' tetap tidak berubah.
      newStates[index] = targetState;
      return newStates;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {galleryImages.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleImagePress(index)}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: imageStates[index].isAlternate ? image.alternateUrl : image.mainUrl }}
              style={[
                styles.imageTile,
                { transform: [{ scale: imageStates[index].scale }] },
                { zIndex: imageStates[index].scale > 1 ? 1 : 0 },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  grid: {
    width: 312,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imageTile: {
    width: 100,
    height: 100,
    margin: 2,
    backgroundColor: "#34495e",
    borderRadius: 8,
  },
});