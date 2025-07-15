import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const photoCollection = [
  { idx: 1, primaryImage: "https://images.alphacoders.com/134/1341120.png", secondaryImage: "https://images5.alphacoders.com/462/462370.jpg" },
  { idx: 2, primaryImage: "https://images5.alphacoders.com/133/1330264.png", secondaryImage: "https://images4.alphacoders.com/417/41774.jpg" },
  { idx: 3, primaryImage: "https://images.alphacoders.com/824/824838.jpg", secondaryImage: "https://images.alphacoders.com/773/773531.jpg" },
  { idx: 4, primaryImage: "https://images4.alphacoders.com/135/1358294.jpeg", secondaryImage: "https://images3.alphacoders.com/121/121797.jpg" },
  { idx: 5, primaryImage: "https://images3.alphacoders.com/133/1330268.png", secondaryImage: "https://images2.alphacoders.com/437/437349.jpg" },
  { idx: 6, primaryImage: "https://images2.alphacoders.com/634/6340.jpg", secondaryImage: "https://images6.alphacoders.com/681/681657.jpg" },
  { idx: 7, primaryImage: "https://images.alphacoders.com/135/1357436.jpeg", secondaryImage: "https://images.alphacoders.com/824/824838.jpg" },
  { idx: 8, primaryImage: "https://images.alphacoders.com/554/55473.jpg", secondaryImage: "https://images4.alphacoders.com/242/242474.jpg" },
  { idx: 9, primaryImage: "https://images7.alphacoders.com/456/456120.jpg", secondaryImage: "https://images6.alphacoders.com/407/407482.jpg" },
];

export default function Index() {
  // State untuk menyimpan kondisi setiap gambar
  const [photoStates, setPhotoStates] = useState(
    photoCollection.map(() => ({
      isAlternative: false,
      currentScale: 1,
    }))
  );

  /**
   * Fungsi untuk menangani klik pada gambar
   * Mengubah gambar dan meningkatkan skala hingga maksimum 2.0
   */
  const onImageTap = (imageIndex) => {
    setPhotoStates((previousStates) => {
      const updatedStates = [...previousStates];
      const currentImage = updatedStates[imageIndex];

      // Hitung skala baru dengan peningkatan 1.2x, maksimum 2.0
      const updatedScale = Math.min(currentImage.currentScale * 1.2, 2.0);

      // Update state untuk gambar yang diklik
      updatedStates[imageIndex] = {
        isAlternative: !currentImage.isAlternative,
        currentScale: updatedScale,
      };

      return updatedStates;
    });
  };

  // Fungsi untuk mereset scale gambar
  const resetScale = (imageIndex) => {
    setPhotoStates((previousStates) => {
      const updatedStates = [...previousStates];
      updatedStates[imageIndex] = {
        ...updatedStates[imageIndex],
        currentScale: 1,
      };
      return updatedStates;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>

      {/* Grid gambar 3x3 dengan interaksi */}
      <View style={styles.photoGrid}>
        {photoCollection.map((photo, index) => (
          <TouchableOpacity
            key={photo.idx}
            onPress={() => onImageTap(index)}
            onLongPress={() => resetScale(index)}
            style={styles.imageWrapper}
          >
            <Image
              source={{
                uri: photoStates[index].isAlternative
                  ? photo.secondaryImage
                  : photo.primaryImage
              }}
              style={[
                styles.gridPhoto,
                { transform: [{ scale: photoStates[index].currentScale }] },
              ]}
            />
            {/* Indikator scale */}
            <View style={styles.scaleIndicator}>
              <Text style={styles.scaleText}>
                {photoStates[index].currentScale.toFixed(1)}x
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    paddingVertical: 35,
    backgroundColor: "#F8F8F8",
    minHeight: "100%",
  },
  headerBox: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 25,
  },
  nameText: {
    color: "#FFB6C1",
    fontSize: 26,
    fontWeight: "600",
  },
  idText: {
    fontWeight: "bold",
    color: "#87CEEB",
    fontSize: 16,
  },
  photoGrid: {
    width: 330,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 25,
  },
  imageWrapper: {
    marginBottom: 15,
    overflow: "visible",
    width: 100,
    height: 100,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  gridPhoto: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: "#E0E0E0",
  },
  scaleIndicator: {
    position: "absolute",
    bottom: -25,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  scaleText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  instructionBox: {
    backgroundColor: "#E6F3FF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "flex-start",
  },
  instructionText: {
    fontSize: 14,
    color: "#2C3E50",
    marginBottom: 5,
    textAlign: "left",
  },
});