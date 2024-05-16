import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1
  }, 
  
  header: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
  }, 

  heartImage: {
    width: 80,
    height: 80,
    marginTop: 64,
  },

  title: {
    color: '#FF007A',
    fontFamily: 'JustAnotherHand-Regular',
    fontSize: 92,
    textShadowColor: '#FF9ACA',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  },

  welcome: {
    color: '#fff',
    fontFamily: 'JustAnotherHand-Regular',
    fontSize: 18,
  },

  iLoveMessage: {
    color: '#FF007A',
    fontFamily: 'JustAnotherHand-Regular',
    fontSize: 18,
    textShadowColor: '#FF9ACA',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },
  
  line: {
    height: 2,
    width: '90%',
    backgroundColor: '#FF007A', 
    marginVertical: 32,
  }
})

export default styles
