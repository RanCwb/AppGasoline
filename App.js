import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, Image, TextInput, Alert, Button, NativeAppEventEmitter} from 'react-native';



export default function App() {

  const [modalVisible1,setModal1] = useState(false)

  const [modalVisible2,setModal2] = useState(false);

  const [valor1, setValor1] = useState(null);

  const [valor2, setValor2] = useState('');
 
  const [resultado, setResultado] = useState('');

  const [text, setText] = useState('Limpar');   

    function limpar() {

     setValor1('');

     setValor2('');

    }

    function divide() {

      const resultado = parseFloat(valor1) / parseFloat(valor2)

      setResultado(resultado.toFixed(2))

      if (resultado < 0.7) {

        setModal1(true)

      } else if ( resultado > 0.7) {

        setModal2(true)

      }  else  {
        
        valor1 && valor2 === ' '

         alert('Digite os preços')

      }

    } 
    
  return (

    <SafeAreaView style={styles.container}>
        <View style={styles.areaImg}>
            <Image
            source={require('./src/img/cb.webp')}
            style={styles.img}
            />
            <Text style={styles.atext}>VEJA QUAL A MELHOR OPÇÃO!</Text>
        </View>

        <View style={styles.arebtn}>

            <View style={styles.areaV}>

           <TextInput
            placeholder='Digite o preço da GASOLINA'
            style={styles.txtInput}
            keyboardType="numeric"
            value={valor1}
            onChangeText={setValor1}     
            />

            <TextInput
            placeholder='Digite o Preço do ETANOL'
            style={styles.txtInput}
            keyboardType='numeric'
            value={valor2}
            onChangeText={setValor2}     
            />
            </View>
          
        </View>

         <View style={styles.tcont}>

        <TouchableOpacity style={styles.cont} onPress={divide}>
          <Text style={styles.botaoB}>Calcular</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.cont} onPress={limpar}>
          <Text style={styles.botaoB}>{text}</Text>
        </TouchableOpacity>
        

          <Modal  style={styles.modalsty}visible={modalVisible1} transparent={false} animationType={'fade'} >

              <View style={styles.modalFooter}>
                    <Image
                      style={styles.imgSecond}
                      source={require('./src/img/logo.png')}
                      />
                      <Text style={styles.finalTxt}>Você deve abastecer com alcool!</Text>
                    <TouchableOpacity style={styles.modalButton}  onPress={()=> setModal1(false)}>
                        <Text style={styles.finalBtn}>CALCULAR NOVAMENTE </Text>
                    </TouchableOpacity>
              </View>

          </Modal>

            <Modal style={styles.modalsty} visible={modalVisible2} transparent={false} animationType={'fade'}>
                  <View style={styles.modalFooter}>
                      <Image
                        source={require('./src/img/alcool.jpg')}
                        style={styles.imgSecond}
                      />
                      <Text style={styles.finalTxt}>Você deve abastecer com Gasolina!!</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={()=> setModal2(false)}>
                              <Text style={styles.finalBtn}>CALCULAR NOVAMENTE</Text>
                        </TouchableOpacity>
                  </View>


            </Modal>

         </View>
           

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
   flex : 1,
    backgroundColor: '#787772',
    alignItems:'center',
    paddingTop:100,
    
  },

  finalTxt:{
    textAlign:'center',
    paddingBottom:30,
    fontWeight:'bold',
    fontSize:24,
    margin:10
  
  },

  cont:{


  },
  tcont:{

  display:'flex'

  },  
  modalsty:{
   


  },
 modalButton:{

        height:150,    
        display:'flex'
  },  
  finalBtn:{
      paddingTop:10,
      backgroundColor:'#ffff',
      textAlign:'center',
      justifyContent:'center',
      alignItems:'center',
      height:40,
      marginLeft:40,
      marginRight:40,
      borderRadius:30,
      fontWeight:'bold',
      fontSize:18
      
  },

  imgSecond:{
   height:200,
   width:200,
  alignSelf: 'center',
  marginTop: 'auto',
  justifyContent:'space-around',
  borderRadius:30

    
  },

  modalFooter:{

    display:'flex',
    backgroundColor:'#787772',
    flex:1,
    paddingBottom:250
  },

  areaT:{

    alignItems:'center',
    flexDirection:'row',
    justifyContent: 'space-around',
    margin:15

  },

  areaImg:{

      display: 'flex',
       alignItems:'center',
    justifyContent:'center',

  },

  arebtn:{

    padding:40
    


  },
  img:{
    width: 250,
    height:250,
    borderRadius:50,
   
  },

  atext:{
    fontWeight:'bold',
    fontSize:23,
    marginTop:20
  },

  txtInput:{

    backgroundColor:'#ffff',
    width: 250,
    margin: 20,
    borderRadius:10,
    textAlign:'center',
    height:50,
    fontSize:20,

  

  },

  botaoB:{

    padding:15,
    height:50,
    alignContent:'center',
    borderRadius: 20,
    fontWeight:'bold',
    fontSize:18,
    marginHorizontal:50,
    textAlign:'center',
    backgroundColor:'#ffff',
    margin:10
  },

  botaoEdit:{

    height:50,
    justifyContent:'center',
    alignItems:'center',




  }




});
