import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//export default aaaaa
class Inicio extends React.Component{




 render(){
   return(
     <View style={styles.container}>

         <Text>{this.props.name}</Text>

       
     </View>  
   );
 }
}



const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'green',
  justifyContent: 'center',
  alignItems: 'center',
 },

});

export default Inicio;