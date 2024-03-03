import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/arka_plan2.png')}style={styles.container}>
      <Text style={styles.universeOfMovies}>Universe of Movies</Text>
      <Image source={require('./assets/main_icon.png')} style={styles.iconImage} />
      <View style={styles.actionButtons}>
        <View style={styles.button1}><Text style={[styles.buttonText,styles.button1Text]}>Login</Text></View>
        <View style={styles.button2}><Text style={[styles.buttonText,styles.button2Text]}>Register</Text></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 430,
    height: 932,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
  },
  m2: {
    position: 'absolute',
    width: 298,
    height: 277,
    left: 59,
    top: 288,
    borderRadius: 50,
    backgroundColor: '#FFAC4A',
    transform: [{ blur: 150 }],
    overflow: 'hidden', 
   
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'absolute',
    width: 350,
    height: 60,
    left: 40,
    top: 600,
    justifyContent: 'space-between',
  },
  button1: {
    width: 160,
    height: 60,
    backgroundColor: '#FFAC4A',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    width: 160,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Poppins'
  },
  button1Text: {
    color: '#FFFFFF', 
    fontWeight: 'bold',
  },
  
  button2Text: {
    color: '#0A0A0A', 
    fontWeight: 'bold',
  },
  universeOfMovies: {
    position: 'absolute',
    width: 288,
    height: 45,
    left: 64,
    top: 172,
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 30,
    color: '#FFAC4A',
    textAlign: 'center',
  },
  iconImage: {
    width: 298,
    height: 277,
    position: 'absolute',
    left: 59,
    top: 250,
  },
});
