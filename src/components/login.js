import React from 'react';

//Importaciones
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  AppRegistry,
  TextInput,
  Image
} from "react-native";

//Components
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Usuario' };
    this.state2 = { text: 'Contraseña' };
  }

  onPress(){
    Alert.alert(
      "Esta es una alerta",
      "Cuidado :O",
      [
        
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OKi", 
          onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  }
  render() {
    return <View style={styles.container}>
        <Image
          style={{width: 300, height: 105}}
          source={{uri: 'https://virtef.com/img/Virtef4.png'}} />

        <TextInput 
          style={{ height: 60, borderColor: "gray", borderWidth: 1 }} 
          onChangeText={text => this.setState( { text } )} 
          value={this.state.text} />

        <TextInput 
          style={{ height: 60, borderColor: "gray", borderWidth: 1 }}
          
          onChangeText={text => this.setState( { text } )} 
          value={this.state2.text}/>

        <Text> </Text>
        
        
        
        <Button style={styles.boton} onPress={this.onPress} title="Iniciar Sesión" color="#282D33" accessibilityLabel="Learn more about this purple button" />

        <Text>¿Olvidaste tu contraseñas?</Text>

        <Text>Registrate</Text>

        <Button style={styles.boton} onPress={this.onPress} title="Facebook" color="#36a9e0" accessibilityLabel="Face" />

        <Button style={styles.boton} onPress={this.onPress} title="Correo" color="#282D33" accessibilityLabel="Mail" />

      </View>;
  }
}

AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  boton: {
    marginTop: 50,
    fontSize: 40
  }
});