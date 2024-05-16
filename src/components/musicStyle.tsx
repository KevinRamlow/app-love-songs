import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 46,
    flex: 1,
    alignItems: 'center',
    marginBottom: 12
  },   

  display: {
    backgroundColor: '#2C2C2C',
    height: 54,
    width: '90%',
    borderRadius: 10,
  }, 

  musicName: {
    color: '#fff',
    fontFamily: 'Kalam-Regular',
    fontSize: 10,
    marginLeft: '7%'
  },

  musicImage: {
    width: 44,
    height: 44,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 8
  }
})

export default styles
