import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Inicio from './Inicio';
import Body from './Body';
import Final from './Final';

//export default 
class App extends React.Component{
 constructor(){
   super();
   this.state={
     numero: 8
   }
 }

 aumentar = () => {
   this.setState({
     numero: this.state.numero +1
   })
 }

 disminuir = () => {
   this.setState({
     numero: this.state.numero -1
   })
 }

 render(){
   return(
     <View style={styles.container}>
 

        <Inicio name="Calculadora" />

        <Body numero={this.state.numero}  />
        <Final sumar={this.aumentar} />
       
     </View>  
   );
 }
}



const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
 },
 cajaDos:{
   flex: 3,
   backgroundColor: 'white',
   justifyContent: 'center',
   alignItems: 'center',
 },
 cajaTres:{
   flex: 1,
   backgroundColor: 'red',    
 },
});

export default App;
