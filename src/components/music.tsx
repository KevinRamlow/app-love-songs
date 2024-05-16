import { View, Text, Image, ImageSourcePropType } from "react-native";

import styles from './musicStyle'

interface MusicProps {
  musicName: string;
  musicImage: ImageSourcePropType;
}

export default function Music({ musicName, musicImage }: MusicProps) {
  return (
    <>
      <View>
        <Text style={styles.musicName}>{musicName} - Kevin Ramlow</Text>
      </View>
      
      <View style={styles.container}>
        <View style={styles.display}>
          <Image source={musicImage} style={styles.musicImage} />      
        </View>
      </View>
    </>
  )
}