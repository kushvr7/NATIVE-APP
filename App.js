import { StatusBar } from 'expo-status-bar';
import React , { useState} from 'react';
import { StyleSheet , Text, Image , Button,View , SafeAreaView, TextInput} from 'react-native';

export default function App() {
  
  console.log("hy");
   const [a,seta] = useState("Changed bro");
  //  style={styles.container}
  return (
    <View style={styles.container}>
      {/* <Text style={styles.tex}>{a}</Text> */}
      <View style={{flexDirection:'row' , justifyContent:'space-evenly' , alignItems:'center'}}>
      <TextInput placeholder="INPUT" style={{borderBottomColor:'red' , borderBottomWidth:2 , padding:10}} />
      <Button style={styles.but} title="Click" onPress={() => seta("Yeah !! bro ...")}/>
     </View>
     </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#10182056',
    padding:30,
    height:'100%',
  },
  tex:{
    color:'black',
  },
  but:{
    backgroundColor: 'red',
    top:'50%',
    // padding:40,
  },

});



// ======================================================================


