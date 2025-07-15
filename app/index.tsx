import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

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
    alternate: "https://images.alphacoders.com/824/824838.jpg"
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

export default function Index() {
  // State untuk menyimpan status setiap gambar
  const [imageStates, setImageStates] = useState(
    Array(9).fill().map(() => ({
      clickCount: 0,      // Jumlah klik (0, 1, atau 2)
      isAlternate: false, // Apakah gambar alternatif ditampilkan
      scale: 1            // Skala transformasi saat ini
    }))
  );

  const handlePress = (index) => {
    setImageStates(prevStates => {
      const newStates = [...prevStates];
      const currentState = { ...newStates[index] };

      // Reset jika sudah mencapai klik maksimal
      if (currentState.clickCount >= 2) {
        currentState.clickCount = 0;
        currentState.isAlternate = false;
        currentState.scale = 1;
      }
      // Klik pertama
      else if (currentState.clickCount === 0) {
        currentState.clickCount = 1;
        currentState.isAlternate = true;
        currentState.scale = 1.2;
      }
      // Klik kedua
      else {
        currentState.clickCount = 2;
        currentState.isAlternate = true;
        currentState.scale = 2.0;
      }

      newStates[index] = currentState;
      return newStates;
    });
  };

  return (
    <View style={styles.container}>
      {/* Grid Gambar 3x3 */}
      <View style={styles.gridContainer}>
        {imageData.map((imageSet, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            activeOpacity={0.8}
          >
            <Image
              source={{
                uri: imageStates[index].isAlternate
                  ? imageSet.alternate
                  : imageSet.main
              }}
              style={[
                styles.image,
                {
                  transform: [{ scale: imageStates[index].scale }],
                  zIndex: imageStates[index].clickCount > 0 ? 1 : 0,
                },
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
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 306, // (100 + 2) * 3
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 1,
    backgroundColor: "#ddd",
    borderRadius: 4,
  },
});