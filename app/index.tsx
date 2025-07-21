import React, { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Keep splash screen visible while fonts load
SplashScreen.preventAutoHideAsync();

interface NameItem {
  name: string;
  fontFamily: string;
  type: 'static' | 'variable';
}

export default function App(): JSX.Element | null {
  const [fontsLoaded] = useFonts({
    // STATIC FONTS
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'BitcountPropSingle-Regular': require('../assets/fonts/BitcountPropSingle-Regular.ttf'),
    'BitcountPropSingle-Bold': require('../assets/fonts/BitcountPropSingle-Bold.ttf'),
    'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),

    // VARIABLE FONTS
    'InterVariable': require('../assets/fonts/Inter-Variable.ttf'),
    'RobotoFlex': require('../assets/fonts/Roboto-Variable.ttf'),
    'OpenSansVariable': require('../assets/fonts/OpenSans-Variable.ttf'),
    'BitcountPropSingleVariable': require('../assets/fonts/BitcountPropSingle-Variable.ttf'),
    'RalewayVariable': require('../assets/fonts/Raleway-Variable.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // 10 nama yang akan ditampilkan (5 sebelum + 5 setelah urutan stambuk)
  const names: NameItem[] = [
    // 5 nama sebelum urutan stambuk (Static Fonts)
    { name: "Syahrul Ramadhan", fontFamily: "Inter-Regular", type: "static" },
    { name: "Abdullah Khaeruna Anwar", fontFamily: "Roboto-Regular", type: "static" },
    { name: "Alryadi Asmu'adzan", fontFamily: "OpenSans-Regular", type: "static" },
    { name: "Muhammad Aditya Yudhistira", fontFamily: "BitcountPropSingle-Regular", type: "static" },
    { name: "Wiwin Fuad Sanjaya", fontFamily: "Raleway-Regular", type: "static" },

    // 5 nama setelah urutan stambuk (Variable Fonts)
    { name: "Mutiara", fontFamily: "InterVariable", type: "variable" },
    { name: "M.Fahmi Zulhidayat", fontFamily: "RobotoFlex", type: "variable" },
    { name: "Muh. Hasrul", fontFamily: "OpenSansVariable", type: "variable" },
    { name: "Sultan Alwi Maulana H", fontFamily: "BitcountPropSingleVariable", type: "variable" },
    { name: "M.Ray Togubu", fontFamily: "RalewayVariable", type: "variable" },
  ];

  const staticFonts = names.filter(item => item.type === 'static');
  const variableFonts = names.filter(item => item.type === 'variable');

  const renderNameItem = (item: NameItem, index: number) => (
    <View key={index} style={styles.nameContainer}>
      <Text style={[styles.nameText, { fontFamily: item.fontFamily }]}>
        {item.name}
      </Text>
      <Text style={styles.fontInfo}>
        Font: {item.fontFamily} ({item.type})
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
        backgroundColor="#f8f9fa"
      />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Static Fonts Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Static Fonts (5 fonts)
          </Text>
          <Text style={styles.sectionDescription}>
            5 nama sebelum urutan stambuk
          </Text>
          {staticFonts.map((item, index) => renderNameItem(item, index))}
        </View>

        {/* Variable Fonts Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Variable Fonts (5 fonts)
          </Text>
          <Text style={styles.sectionDescription}>
            5 nama setelah urutan stambuk
          </Text>
          {variableFonts.map((item, index) => renderNameItem(item, index + 5))}
        </View>

        {/* Variable Font Weight Demo */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Variable Font Demo
          </Text>

          <View style={styles.weightDemo}>
            <Text style={[styles.demoText, {
              fontFamily: "InterVariable",
              fontWeight: "100" as any
            }]}>
              Inter Variable - Thin (100)
            </Text>
            <Text style={[styles.demoText, {
              fontFamily: "InterVariable",
              fontWeight: "300" as any
            }]}>
              Inter Variable - Light (300)
            </Text>
            <Text style={[styles.demoText, {
              fontFamily: "InterVariable",
              fontWeight: "400" as any
            }]}>
              Inter Variable - Regular (400)
            </Text>
            <Text style={[styles.demoText, {
              fontFamily: "InterVariable",
              fontWeight: "600" as any
            }]}>
              Inter Variable - SemiBold (600)
            </Text>
            <Text style={[styles.demoText, {
              fontFamily: "InterVariable",
              fontWeight: "700" as any
            }]}>
              Inter Variable - Bold (700)
            </Text>
            <Text style={[styles.demoText, {
              fontFamily: "InterVariable",
              fontWeight: "900" as any
            }]}>
              Inter Variable - Black (900)
            </Text>
          </View>
        </View>

        {/* Font Statistics */}
        <View style={styles.statsSection}>
          <Text style={styles.statsTitle}>Font Statistics</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>10</Text>
              <Text style={styles.statLabel}>Total Fonts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Static Fonts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Variable Fonts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>10</Text>
              <Text style={styles.statLabel}>Total Nama</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#2c3e50',
  },
  subHeader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
    color: '#3498db',
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 25,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  sectionDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  nameContainer: {
    marginBottom: 15,
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  nameText: {
    fontSize: 22,
    marginBottom: 6,
    color: '#2c3e50',
    lineHeight: 28,
  },
  fontInfo: {
    fontSize: 12,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
  weightDemo: {
    marginTop: 10,
  },
  demoText: {
    fontSize: 18,
    marginBottom: 12,
    color: '#34495e',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
    lineHeight: 24,
  },
  statsSection: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    marginVertical: 10,
    minWidth: '40%',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  statLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  footer: {
    backgroundColor: '#27ae60',
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 6,
    lineHeight: 20,
  },
});