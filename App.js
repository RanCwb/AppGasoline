import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal, SafeAreaView, TouchableOpacity, Image, TextInput, Alert, Button} from 'react-native';



export default function App() {

  const [modalVisible,setModal] = useState(false)

  
  

  const [valor1, setValor1] = useState(' ');
  const [valor2, setValor2] = useState(' ');

  const [resultado, setResultado] = useState('');
  
  

    function divide() {z

      const resultado = parseFloat(valor1) / parseFloat(valor2)
      setResultado(resultado.toFixed(2))

      if (resultado < 0.7 ){
        setModal(true)
       
      } else if (resultado > 0.7) {
        alert('abasteça com gasolina')
       setModal(false)
          
      }else{

        (valor1 && valor2 == ' ')
          alert('Digite os preços!')
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

         <View>

        <TouchableOpacity style={styles.cont} onPress={divide}>
          <Text style={styles.botaoB}>Calcular</Text>
        </TouchableOpacity>

          <Modal  style={styles.modalsty}visible={modalVisible} transparent={false} animationType={'fade'} >

               
            <View style={styles.modalFooter}>
                  <Image
                    style={styles.imgSecond}
                    source={require('./src/img/logo.png')}
                    />
                     <Text style={styles.finalTxt}>Você deve abastecer com alcool!</Text>
                  <TouchableOpacity style={styles.modalButton}  onPress={()=> setModal(false)}>
                      <Text style={styles.finalBtn}>Calcular Novamente! </Text>
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
    fontSize:24
  


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
   height:150,
   width:150,
  alignSelf: 'center',
  marginTop: 'auto',
  justifyContent:'space-around'
    
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
    backgroundColor:'#ffff'
  },

  botaoEdit:{

    height:50,
    justifyContent:'center',
    alignItems:'center',




  }




});
