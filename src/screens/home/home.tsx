import { Text, View, Image } from 'react-native';
import styles from './homeStyle'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/heart.png')} style={styles.heartImage}></Image>

        <Text style={styles.title}>Músicas de Amor</Text>

        <Text style={styles.welcome}>Aproveite as múscias que foram gravadas especialmente para você meu amor!</Text>
        <Text style={styles.welcome}>Você merece o mundo todo. <Text style={styles.iLoveMessage}>Eu te amo muito!</Text></Text>
        
        <View style={styles.line} />
      </View>
    </View>
  );
}