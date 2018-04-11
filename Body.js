import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

 class Body extends React.Component {
     
  render() {
    return (
      <View style={styles.container}>
        <Text>
           {this.props.numero}
         </Text>
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

export default Body;