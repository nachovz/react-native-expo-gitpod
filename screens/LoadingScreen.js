import React from 'react';
import { View, Text } from 'react-native';

export default function LoadingScreen() {
  return(
    <View style={styles.container}>
      <Text>
        shopday
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    background: '#00a82b'
  }
})