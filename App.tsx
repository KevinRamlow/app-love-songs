import Home from './src/screens/home/home'

import React, { useState } from 'react'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'


const fetchFonts = () => {
  return Font.loadAsync({
    'JustAnotherHand-Regular': require('./src/assets/fonts/JustAnotherHand-Regular.ttf'),
    'Kalam-Regular': require('./src/assets/fonts/Kalam-Regular.ttf'),
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <Home />
  )
}
