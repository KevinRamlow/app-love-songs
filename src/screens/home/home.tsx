import { Text, View, Image, ScrollView } from 'react-native';
import styles from './homeStyle'
import Music from '../../components/music';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/heart.png')} style={styles.heartImage} />

        <Text style={styles.title}>Músicas de Amor</Text>

        <Text style={styles.welcome}>Aproveite as músicas que foram gravadas especialmente para você meu amor!</Text>
        <Text style={styles.welcome}>Você merece o mundo todo. <Text style={styles.iLoveMessage}>Eu te amo muito!</Text></Text>

        <View style={styles.line} />   
      </View>

      <Music 
        musicName="Domingo de manhã" 
        musicImage={require('../../assets/domingo-de-manha.png')}
      />      
    </ScrollView>
  );
}