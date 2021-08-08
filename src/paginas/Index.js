import React, {Component} from 'react'
import { View,TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

export default function Index(props){
    return(
        <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
            <Text>
                essa e a pagina inicial
            </Text>

            <Image 
    style = {{width:150, height:150}} 
    source = {{uri: 'https://d1uz88p17r663j.cloudfront.net/resized/35e84bc5c9aa36a87d92055b7d719a5c_hamburguer-caseiro-toque-argentino-receitas-nestle_1200_600.jpg'}}  
  />


            <TouchableOpacity style={style.button} onPress={()=> props.clicarParaEnviar()}>
          <Text>Proxima Refeição</Text>
            </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={()=> props.clicarParaEnviar2()}>
          <Text>Ofertas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={()=> props.clicarParaEnviar0()}>
          <Text>Cupons</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={style.button}
          onPress={()=> props.cancelar()}
        >
          <Text>Cancelar notificações</Text>
            </TouchableOpacity>

        </View>
    )
}
const style = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: 200,
      marginTop: 10
    }
  });