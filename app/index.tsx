import { Image as ExpoImage } from "expo-image";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

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
        let newScale;
        if (currentState.clickCount === 0) {
          newScale = 1.2; // Klik pertama: scale 1.2x
        } else if (currentState.clickCount === 1) {
          newScale = 2.4;
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
      <View style={styles.gridContainer}>
        {imageData.map((item, index) => (
          <View
            key={index}
            style={[
              styles.imageContainer,
              {
                zIndex: imageStates[index].scale > 1 ? 10 : 1,
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
                    zIndex: imageStates[index].scale > 1 ? 10 : 1,
                  }
                ]}
                contentFit="cover"
              />
            </TouchableOpacity>
          </View>
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
    backgroundColor: '#f0f0f0',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: 270,
    height: 270,
    backgroundColor: '#ffffff',
    padding: 0,
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
  imageContainer: {
    width: 90,
    height: 90,
    margin: 0,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e9ecef',
  },
  image: {
    width: 86,
    height: 86,
    borderRadius: 10,
  },
  touchableArea: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});