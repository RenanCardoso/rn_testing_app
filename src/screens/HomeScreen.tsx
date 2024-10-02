import { View, Text } from 'react-native'
import React, { FC } from 'react'
import CustomSafeAreaScrollView from '../components/global/CustomSafeAreaViewScroll'
import { Colors } from '../utils/Colors'

const HomeScreen: FC = () => {
  return (
    <CustomSafeAreaScrollView>
      <Text style={{color: 'white'}}>Teste Completo!</Text>
    </CustomSafeAreaScrollView>
  )
}

export default HomeScreen