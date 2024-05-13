import { StyleSheet } from "react-native";

export const theme = {
    background: '#eab308',
    text: '#eab308'
 }
 export const styles2 = {
    text: {color: theme.text},
    background: {backgroundColor: theme.background}
 }

export const styles = StyleSheet.create({
    container: {
      position: 'relative',
      width: 430,
      height: 932,
      backgroundColor: '#FFFFFF',
      borderRadius: 40,
  
    },
    paddingRT: {
      paddingRight: 20, 
      paddingTop: 20,
      
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
      
      fontWeight: '600',
      fontSize: 20,
      color: '#FFFFFF',
      
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
    whiteText: {
      color: 'white', // Metnin rengini beyaz olarak ayarladık
      fontSize: 20,
      textAlign: 'center',
    },
  });