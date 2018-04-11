import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

 class Final extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Aumentar" onPress={this.props.sumar} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'purple',
     justifyContent: 'center',
     alignItems: 'center',
    },
   
   });

export default Final;