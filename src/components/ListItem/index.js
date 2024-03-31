import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const ListItem = ({title, subtitle, onPress, style}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {!! subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <Image style={styles.arrow} source={require('../../assets/arrow.png')}/>
    </Pressable>
  )
}

export default React.memo(ListItem)