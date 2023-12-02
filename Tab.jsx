import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { useState,useEffect } from "react";	
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator,FlatList,Image,TouchableOpacity,Modal,StatusBar, StyleSheet, Text,TextInput, TouchableHighlight, View,ScrollView} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import { Button, RadioButton } from "react-native-paper";
import { createStackNavigator } from '@react-navigation/stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Name,Email,Pass,Cpass, tokencookie } from "./Actions";
import { useSelector,useDispatch } from "react-redux";
import { NameIn,PassIn } from "./Actions";
import {search22,moviedataq, moviedata2,search,Namep,Emailp,Rolep,Passp,token,signinaction,token1,pic,moviedata,moviedata1 } from "./Actions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import ImagePicker from 'react-native-image-crop-picker';
import Slider from 'react-native-slider';
import { Buffer } from 'buffer';
import { stat } from "fs";
import FastImage from 'react-native-fast-image';
import Icon11 from 'react-native-vector-icons/FontAwesome5';
import { Search } from "./Reducer/UserData";


   
  

let style1 = StyleSheet.create({
    nav:{
        color:"white",
        fontSize:hp(5),
       
        height:hp(3)
    },

    btn1:{
        borderWidth:1,
        fontSize:hp(3),
        color:"red",
        margin:10,
        borderRadius:10,
        height:hp(7),
        width:wp(70),
        marginLeft:wp(15)
  },

  v1:{
    height:hp(100),
    justifyContent:"center",
    
  },
  t1:{
    fontSize:hp(3),
    textAlign:"center",
    color:"white",
   
  },
  t2:{
    borderWidth:1,
    borderRadius:15,
    backgroundColor:"red",
    height:hp(5),
    justifyContent:"center",
    width:wp(70),
    marginLeft:wp(15)
  },
  t24:{
    borderWidth:1,
    borderRadius:15,
    backgroundColor:"red",
    height:hp(5),
    justifyContent:"center",
    width:wp(70),
    marginLeft:wp(15)
  },
  t33:{
    borderWidth:1,
    borderRadius:15,
    backgroundColor:"red",
    height:hp(3),
    justifyContent:"center",
    width:wp(70),
    marginLeft:wp(15),
    marginBottom:wp(5)
  },
  kil:{
    color:"black",
    marginLeft:wp(20),
    fontSize:hp(2)
  }

})




import { ImageBackground } from 'react-native';

const Home4 = ({navigation}) => {
  const Namep1 = useSelector((state) => state.Namep1);
  const Sea = useSelector((state) => state.Search23);
  const Passp1 = useSelector((state) => state.Passp1);
  let Roleo = useSelector((State)=>State.Rolep1);
  let token1 = useSelector((State)=>State.tokens);
  let [show,setshow]=useState(true);
  let [movie,setmovie]=useState("");
  let [lang,setlang]=useState("");
  let [imdb,setimdb]=useState("");
  let [date,setdate]=useState("");
  let [run,setrun]=useState("");
  let [country,setcountry]=useState("");
  let [loc,setloc]=useState("");
  let [pica,setpic]=useState("");
  let [wname,setwname]=useState("");
  let [tim,setim]=useState("");
  let [cor,setcor]=useState("");
  let mvi = useSelector((state) => state.movb)
  let di = useDispatch();
  let [imh,setg] = useState("");
  let [cat,setqu]=useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  let [po, setpo] = useState("");
  let [act,setac]=useState(false);
  useEffect(()=>{
    di(moviedata(Sea));
  },[]);
  
  let pop = ({ item }) => {
    //     setac(true);
//     let y1 = async () => {
//       await axios
//         .get(`http://10.54.12.120:3001/pic1/${item.pic}`, { responseType: 'arraybuffer' })
//         .then((response) => {
//           const base64 = Buffer.from(response.data, 'binary').toString('base64');
//           setpo('data:image/jpg;base64,' + base64);
//           item.pic=po;
//           setpo("");
//         })
//         .catch((error) => {
//         })
       
//     };

//     // Include y1 in the dependency array
//     y1();
// setac(false);
    return (
      <>
  <View style={{marginTop:hp(1), height: hp(33), width: wp(100), flexDirection: "row", alignItems: "center",borderWidth:1,borderRadius:hp(5) }}>
  <Image source={{ uri: item.pic }} style={{ width: wp(50), height: hp(30), borderWidth: wp(1), borderRadius: wp(20) }} />

  <View style={{ marginLeft: wp(10) }}>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Movie: {item.name}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Time: {item.time}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Date: {item.date}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Location: {item.loc}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Rate: {item.rate}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Runtime: {item.runtime}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Country: {item.country}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Language: {item.languag}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Writer: {item.Writer}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Inventory: {item.cat}</Text>
   
    <TouchableOpacity style={{width:wp(30),height:hp(3),borderWidth:1,borderRadius:30,backgroundColor:"yellow",alignItems:"center"}} onPress={async()=>{
        let id = item._id;
        const moviesResponse = await axios.post('http://10.54.6.233:3001/cart',{
          
              id
        });
        di(moviedata(Sea));

    }}>
      <Text style={{fontSize:hp(2)}}>BUY</Text>
    </TouchableOpacity>

  </View>

</View>


      </>
    );
  };

  
  
  

  const openPicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
        });


      // Append the image to the FormData object
      
      setg(image.path);
      // Update the state with the FormData object
      
    } catch (error) {
      console.warn(error);
    }
  };

  const GH = async () => {
    try {
      // Append other form fields to the FormData object
      const formData = new FormData();
      formData.append('image', {
        uri: imh,
        type: 'image/jpg',
        name: 'test.jpg',
      });
      formData.append('movie', movie);
      formData.append('lang', lang);
      formData.append('imdb', imdb);
      formData.append('date', date);
      formData.append('run', run);
      formData.append('country', country);
      formData.append('loc', loc);
      formData.append('wname', wname);
      formData.append('tim', tim);
      formData.append('cat',cat)
      // Send the FormData object to the server
      const response = await axios.post('http://10.54.6.233:3001/cart', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setmovie("");
     setlang("");
     setimdb("");  
     setdate("");
     setrun("");
     setcountry("");
     setloc("");
     setwname("");
     setqu(0);
     setim("");
      setshow(false);
     di(moviedata(Sea));
    } catch (e) {
      
    }
  }
  
  return (
    <>
        
        <ScrollView>
  <View style={{ marginTop: hp(2), marginBottom: hp(8) }}>
  <TextInput
    placeholder="Search Movie Here"
    value={Sea}
    onChangeText={(t)=>{
      di(search22(t));
      di(moviedata(t));
    }}
    style={{
      fontSize:hp(3),
      borderWidth: 1,
      borderRadius: 30,
      margin: 8,
      padding: 8,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
      backgroundColor: 'white', // Set background color to make it visible
    }}
  />
  </View>
  <FlatList
    data={mvi}
    keyExtractor={(item) => item._id}
    renderItem={pop}
  />
  
</ScrollView>

      </>
  );
};

const Home = () => {
  let mvi = useSelector((state) => state.movb)
  let di = useDispatch();
 
  
  useEffect(()=>{
    di(moviedataq());
  },[mvi])
  useEffect(()=>{
    di(moviedata(""));
  },[])
  const data = [
    { uri: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780794450151/disney-pixar-toy-story-9780794450151_hr.jpg' },
    { uri: 'https://lumiere-a.akamaihd.net/v1/images/au_marvel_shang-chiandthelegendofthetenrings_payoff_mov_cc4c0527.jpeg' },
    { uri: 'https://i.pinimg.com/736x/f3/f0/4a/f3f04a485eaad60915d70bb3df8e6440.jpg' },
    { uri: 'https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg' },
    { uri: 'https://w0.peakpx.com/wallpaper/290/515/HD-wallpaper-the-dark-knight-batman-cool-dark-joker-knight-movie-naqvi-superhero.jpg' },
    // Add more items as needed
  ];

 // ... (previous code)

// ... (previous code)

// ... (previous code)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(3),
  },
  sliderContainer: {
    width: wp('100%'),
    aspectRatio: 10 / 9, // Adjust the aspect ratio as needed
  },
  slide: {
    width: wp('100%'),
    height: hp('100%'),
    borderRadius: 8,
    overflow: 'hidden', // Ensure the entire image is displayed
  },
  image: {
    width: wp(100),
    height: hp(60),
    objectFit:"scale-down"
  },
  paginationContainer: {
    marginTop: hp('1%'),
    marginBottom: hp('2%'),
  },
  paginationDot: {
    width: wp('2%'),
    height: wp('2%'),
    borderRadius: wp('1%'),
    marginHorizontal: wp('1%'),
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
});

// ... (remaining code)


// ... (remaining code)

// ... (remaining code)

  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      {item.uri.startsWith('http') ? (
        <Image source={{ uri: item.uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <Text style={styles.title}>{item.uri}</Text>
      )}
    </View>
  );
  
  let pop1 = ({ item }) => {
    return (
      <>
        <View style={{ flex: 1, marginTop: hp(1), height: hp(38), width: wp(50), flexDirection: "column", alignItems: "center" }}>
          <Image source={{ uri: item.pic }} style={{ width: hp(25), height: hp(30), objectFit:"scale-down",  borderRadius: wp(5) }} />
          <Text style={{ marginTop:hp(2),color:"black",fontSize: hp(3), fontWeight: '900', fontStyle: 'italic', fontFamily: 'Arial', lineHeight: 34 }}>
          Movie: {item.name}
        </Text>
        </View>
      </>
    );
  };
  
    
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={wp('100%')} // Use wp for slider width
          itemWidth={wp('100%')} // Use wp for item width
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      </View>
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
    <FlatList
  data={mvi}
  keyExtractor={(item) => item._id}
  renderItem={pop1}
  numColumns={2}
  contentContainerStyle={{ flexDirection: 'column' }}
  style={{margin:hp(1)}}
/>


    </ScrollView>
  );
};






const Home3 = ({navigation}) => {
  const Namep1 = useSelector((state) => state.Namep1);
  const Sea = useSelector((state) => state.Search);
  const Passp1 = useSelector((state) => state.Passp1);
  let Roleo = useSelector((State)=>State.Rolep1);
  let token1 = useSelector((State)=>State.tokens);
  let [show,setshow]=useState(true);
  let [movie,setmovie]=useState("");
  let [lang,setlang]=useState("");
  let [imdb,setimdb]=useState("");
  let [date,setdate]=useState("");
  let [run,setrun]=useState("");
  let [country,setcountry]=useState("");
  let [loc,setloc]=useState("");
  let [pica,setpic]=useState("");
  let [wname,setwname]=useState("");
  let [tim,setim]=useState("");
  let [cor,setcor]=useState("");
  let mvi = useSelector((state) => state.movb)
  let di = useDispatch();
  let [imh,setg] = useState("");
  let [cat,setqu]=useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  let [po, setpo] = useState("");
  let [act,setac]=useState(false);
    useEffect(()=>{
         di(moviedata(Sea));
    },[]);
  let pop = ({ item }) => {
//     setac(true);
//     let y1 = async () => {
//       await axios
//         .get(`http://10.54.12.120:3001/pic1/${item.pic}`, { responseType: 'arraybuffer' })
//         .then((response) => {
//           const base64 = Buffer.from(response.data, 'binary').toString('base64');
//           setpo('data:image/jpg;base64,' + base64);
//           item.pic=po;
//           setpo("");
//         })
//         .catch((error) => {
//         })
       
//     };

//     // Include y1 in the dependency array
//     y1();
// setac(false);
    return (
      <>
  <View style={{marginTop:hp(1), height: hp(33), width: wp(100), flexDirection: "row", alignItems: "center",borderWidth:1,borderRadius:hp(5) }}>
  <Image source={{ uri: item.pic }} style={{ width: wp(50), height: hp(30), borderWidth: wp(1), borderRadius: wp(20) }} />

  <View style={{ marginLeft: wp(10) }}>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Movie: {item.name}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Time: {item.time}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Date: {item.date}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Location: {item.loc}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Rate: {item.rate}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Runtime: {item.runtime}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Country: {item.country}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Language: {item.language}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Writer: {item.writer}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Quantity: {item.cat}</Text>
    <TouchableOpacity style={{width:wp(10),borderWidth:1,borderRadius:30,backgroundColor:"yellow",alignItems:"center"}} onPress={()=>{
      di(moviedata2(item._id,item.cat,Sea));
    }}>
      <Icon11 name="minus" size={hp(4)} />
    </TouchableOpacity>

  </View>

</View>


      </>
    );
  };

  
  
  

  const openPicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
        });


      // Append the image to the FormData object
      
      setg(image.path);
      // Update the state with the FormData object
      
    } catch (error) {
      console.warn(error);
    }
  };

  const GH = async () => {
    try {
      // Append other form fields to the FormData object
      const formData = new FormData();
      formData.append('image', {
        uri: imh,
        type: 'image/jpg',
        name: 'test.jpg',
      });
      formData.append('movie', movie);
      formData.append('lang', lang);
      formData.append('imdb', imdb);
      formData.append('date', date);
      formData.append('run', run);
      formData.append('country', country);
      formData.append('loc', loc);
      formData.append('wname', wname);
      formData.append('tim', tim);
      formData.append('cat',cat)
      // Send the FormData object to the server
      const response = await axios.post('http://10.54.6.233:3001/movie', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setmovie("");
     setlang("");
     setimdb("");  
     setdate("");
     setrun("");
     setcountry("");
     setloc("");
     setwname("");
     setqu(0);
     setim("");
      setshow(false);
     di(moviedata(Sea));
    } catch (e) {
      
    }
  }
  
  return (
    <>
        
        <ScrollView>
  <View style={{ marginTop: hp(2), marginBottom: hp(8) }}>
  <TextInput
    placeholder="Search Movie Here"
    value={Sea}
    onChangeText={(t)=>{
      di(search(t));
      di(moviedata(t));
    }}
    style={{
      fontSize:hp(3),
      borderWidth: 1,
      borderRadius: 30,
      margin: 8,
      padding: 8,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
      backgroundColor: 'white', // Set background color to make it visible
    }}
  />
  </View>
  <FlatList
    data={mvi}
    keyExtractor={(item) => item._id}
    renderItem={pop}
  />
  
</ScrollView>

      </>
  );
};

const Home2 = ({navigation}) => {
  const Namep1 = useSelector((state) => state.Namep1);
  const Sea = useSelector((state) => state.Search);
  const Passp1 = useSelector((state) => state.Passp1);
  let Roleo = useSelector((State)=>State.Rolep1);
  let token1 = useSelector((State)=>State.tokens);
  let [show,setshow]=useState(false);
  let [movie,setmovie]=useState("");
  let [lang,setlang]=useState("");
  let [imdb,setimdb]=useState("");
  let [date,setdate]=useState("");
  let [run,setrun]=useState("");
  let [country,setcountry]=useState("");
  let [loc,setloc]=useState("");
  let [pica,setpic]=useState("");
  let [wname,setwname]=useState("");
  let [tim,setim]=useState("");
  let [cor,setcor]=useState("");
  let mvi = useSelector((state) => state.movb)
  let di = useDispatch();
  let [imh,setg] = useState("");
  let [cat,setqu]=useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  let [po, setpo] = useState("");
  let [act,setac]=useState(false);

  useEffect(()=>{
    di(moviedata(Sea));
  },[])
  let pop = ({ item }) => {
    //     setac(true);
//     let y1 = async () => {
//       await axios
//         .get(`http://10.54.12.120:3001/pic1/${item.pic}`, { responseType: 'arraybuffer' })
//         .then((response) => {
//           const base64 = Buffer.from(response.data, 'binary').toString('base64');
//           setpo('data:image/jpg;base64,' + base64);
//           item.pic=po;
//           setpo("");
//         })
//         .catch((error) => {
//         })
       
//     };

//     // Include y1 in the dependency array
//     y1();
// setac(false);
    return (
      <>
  <View style={{marginTop:hp(1), height: hp(33), width: wp(100), flexDirection: "row", alignItems: "center",borderWidth:1,borderRadius:hp(5) }}>
  <Image source={{ uri: item.pic }} style={{ width: wp(50), height: hp(30), borderWidth: wp(1), borderRadius: wp(20) }} />

  <View style={{ marginLeft: wp(10) }}>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Movie: {item.name}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Time: {item.time}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Date: {item.date}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Location: {item.loc}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Rate: {item.rate}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Runtime: {item.runtime}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Country: {item.country}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Language: {item.languag}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Writer: {item.Writer}</Text>
    <Text style={{fontWeight:"bold",fontSize:hp(2)}}>Quantity: {item.cat}</Text>
    <TouchableOpacity style={{width:wp(10),borderWidth:1,borderRadius:30,backgroundColor:"yellow",alignItems:"center"}} onPress={()=>{
      di(moviedata1(item._id,item.cat,Sea));
    }}>
      <Icon11 name="plus" size={hp(4)} />
    </TouchableOpacity>

  </View>

</View>


      </>
    );
  };

  
  
  

  const openPicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
        });


      // Append the image to the FormData object
      
      setg(image.path);
      // Update the state with the FormData object
      
    } catch (error) {
      console.warn(error);
    }
  };

  const GH = async () => {
    try {
      // Append other form fields to the FormData object
      const formData = new FormData();
      formData.append('image', {
        uri: imh,
        type: 'image/jpg',
        name: 'test.jpg',
      });
      formData.append('movie', movie);
      formData.append('lang', lang);
      formData.append('imdb', imdb);
      formData.append('date', date);
      formData.append('run', run);
      formData.append('country', country);
      formData.append('loc', loc);
      formData.append('wname', wname);
      formData.append('tim', tim);
      formData.append('cat',cat)
      // Send the FormData object to the server
      const response = await axios.post('http://10.54.6.233:3001/movie', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setmovie("");
     setlang("");
     setimdb("");  
     setdate("");
     setrun("");
     setcountry("");
     setloc("");
     setwname("");
     setqu(0);
     setim("");
      setshow(false);
     di(moviedata(Sea));

    } catch (e) {
      
    }
  }
  
  return (
    <>
      {show==true ? 
      (
        <>
        <ScrollView >
        <TouchableHighlight style={[style1.t24,{marginTop:hp(3)}]}>
        <Text style={style1.t1} onPress={async()=>{
           di(moviedata(Sea));
          setshow(false);
        }}>Available Movies</Text>
        </TouchableHighlight>
        <Text style={[style1.t1,{color:"black"}]}>OR</Text>
        <TextInput style={[style1.btn1]} onChangeText={(t)=>{setmovie(t)}} placeholder="Enter Movie Name"></TextInput>
        <TextInput style={[style1.btn1]} onChangeText={(t)=>{setlang(t)}} placeholder="Enter Language"></TextInput>
        <TextInput style={[style1.btn1]}  onChangeText={(t)=>{setimdb(t)}} placeholder="Enter Imdb Rating"></TextInput>
        <TextInput style={[style1.btn1]}  onChangeText={(t)=>{setdate(t)}} placeholder="Enter Date"></TextInput>
        <TextInput style={[style1.btn1]}  onChangeText={(t)=>{setrun(t)}} placeholder="Enter Run Time"></TextInput>
        <TextInput  style={[style1.btn1]} onChangeText={(t)=>{setcountry(t)}} placeholder="Enter Country"></TextInput>
        <TextInput style={[style1.btn1]} onChangeText={(t)=>{setloc(t)}} placeholder="Enter Location"></TextInput>
        <TextInput style={[style1.btn1]} onChangeText={(t)=>{setwname(t)}} placeholder="Enter Writer Name"></TextInput>
        <TextInput style={[style1.btn1]} onChangeText={(t)=>{setim(t)}} placeholder="Enter Time"></TextInput>
        <TextInput style={[style1.btn1]} onChangeText={(t)=>{setqu(t)}} placeholder="Enter Quantity"></TextInput>
        <TouchableHighlight style={style1.t33} onPress={()=>{
     openPicker();
   }}>
      <Text style={[style1.t1,{fontSize:hp(2)}]}>Upload Image</Text>
   </TouchableHighlight>
        <TouchableHighlight style={style1.t2} onPress={GH}>
        <Text style={style1.t1}>Submit</Text>
        </TouchableHighlight>
        <Modal animationType="slide"
        transparent={true} visible={isModalVisible}>
          <View style={{borderWidth:3,borderRadius:40,height:hp(23),width:wp(70),backgroundColor:"#e67e22",marginTop:hp(30),marginLeft:wp(15)}}>
            <Text style={{fontSize:hp(3),textAlign:"center",marginTop:hp(7)}}>{cor}</Text>
            <Button labelStyle={{fontSize:hp(3),paddingTop:20,color:"red"}} onPress={() => setModalVisible(false)} >Close</Button>
          </View>
        </Modal>
      </ScrollView>
        </>
      ):(
        <>
        <ScrollView>
  <View style={{ marginTop: hp(2), marginBottom: hp(8) }}>
  <TextInput
    placeholder="Search Movie Here"
    value={Sea}
    onChangeText={(t)=>{
      di(search(t));
      di(moviedata(t));
    }}
    style={{
      fontSize:hp(3),
      borderWidth: 1,
      borderRadius: 30,
      margin: 8,
      padding: 8,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
      backgroundColor: 'white', // Set background color to make it visible
    }}
  />
  </View>
  <FlatList
    data={mvi}
    keyExtractor={(item) => item._id}
    renderItem={pop}
  />
  <TouchableHighlight style={style1.t24}>
    <Text
      style={style1.t1}
      onPress={() => {
        setshow(true);
      }}
    >
      Enter New Movie
    </Text>
  </TouchableHighlight>
</ScrollView>

      </>
      )}
    
    </>
  );
};

// Define Home component before using it in Tab component
const Home1 = ({navigation}) => {
  const Namep1 = useSelector((state) => state.Namep1);
  const Emailp1 = useSelector((state) => state.Emailp1);
  const Passp1 = useSelector((state) => state.Passp1);
  let Roleo = useSelector((state) => state.Rolep1);
  let token1 = useSelector((state) => state.tokens);
  let pic2 = useSelector((state)=> state.pic1);
  let disp1 =  useDispatch();
  let [imagedata,setimgdata]=useState("");
  let im1 = async()=>{
    try{
      let r2 = await axios.get("http://10.54.6.233:3001/dataall",{
        params:{
         token1
        }
      }); 
      
      
        disp1(Namep(r2.data.name));
        disp1(Emailp(r2.data.email));
        disp1(Rolep(r2.data.role));
        disp1(pic(r2.data.file))
      
      await axios
      .get(`http://10.54.6.233:3001/pic/${pic2}`, { responseType: 'arraybuffer' })
      .then((response) => {
        const base64 = Buffer.from(response.data, 'binary').toString('base64');
        setimgdata('data:image/jpg;base64,' + base64);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  } catch (e) {
    console.error('Error:', e);
  }
  };

    useEffect(() => {
      // Replace 'your_image_name.jpg' with the actual image name you want to fetch
      im1();
      
    }, []);
  

  
  return (
    <>
      <View>
     <Image source={{ uri: imagedata }} style={{ resizeMode: 'cover', width: wp(50), height: hp(30) , borderWidth:wp(1) , borderWidth:wp(20),borderRadius:wp(20), marginLeft:wp(27), marginTop:wp(13) , marginBottom:wp(17)}} />
        <Text style={{color:"#d63031",fontSize:hp(4),fontWeight:"bold",marginLeft:wp(25)}}>Name: {Namep1}</Text>
        <Text style={{color:"#d63031",fontSize:hp(4),fontWeight:"bold",marginLeft:wp(25)}}>Email: {Emailp1}</Text>
        <Text style={{color:"#d63031",fontSize:hp(4),fontWeight:"bold",marginLeft:wp(25)}}>Role: {Roleo}</Text>
        <View>
    </View>
      </View>
    </>
  );
};


let Signin = ({ navigation }) => {
  let Nameo = useSelector((state) => state.Namep1);
  let Emailo = useSelector((state) => state.Emailp1);
  let Passo = useSelector((state) => state.Passp1);
  let Roleo = useSelector((state) => state.Rolep1);
  let token1 = useSelector((state) => state.tokens);

  let [NameError, setn] = useState("");
  let [PassError, setp] = useState("");
  let Name = useSelector((state) => state.NameSI);
  let Pass = useSelector((state) => state.PassSI);
  let disp = useDispatch();
  let [cor, setcor] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);

  let DS = async () => {
    if (!Name) {
      setn("*field is required");
    }

    if (!Pass) {
      setp("*field is required");
    }

    if (NameError === "" && PassError === "") {
      try {
        let response = await axios.get("http://10.54.6.233:3001/signin", {
          params: {
            Name: Name,
            Pass: Pass,
          },
        });

        // Handle the response based on the data received
        if (response.data.message === "password not match") {
          setcor("password not match");
          setModalVisible(true);
        } else if (response.data.message === "ID not found") {
          setcor("ID not found");
          setModalVisible(true);
        } else if (response.data.message === "Successfully") {
          // Access reply object if needed
          const reply = response.data.reply;

          disp(Namep(Name));
          disp(Passp(Pass));

          try {
            let r1 = await axios.get("http://10.54.6.233:3001/jwt", {
              params: {
                Name: Nameo,
              },
            });
         
            disp(Rolep(reply.role));
            disp(token(r1.data));
            disp(signinaction("true"));
            navigation.navigate("HomeScreen");
          } catch (error) {
            // Handle error
          }
        }
      } catch (error) {
        setcor("Not found");
        setModalVisible(true);
      }
    }
  };

  return (
    <>
      <ScrollView>
        <View style={style1.v1}>
          <TextInput
            placeholder="Enter Name"
            style={[style1.btn1]}
            onChangeText={(t) => {
              disp(NameIn(t));
              setn("");
            }}
          ></TextInput>
          <Text style={style1.kil}>{NameError}</Text>

          <TextInput
            placeholder="Enter Password"
            style={[style1.btn1]}
            onChangeText={(t) => {
              disp(PassIn(t));
              setp("");
            }}
          ></TextInput>
          <Text style={style1.kil}>{PassError}</Text>

          <TouchableHighlight
            style={style1.t2}
            onPress={() => {
              DS();
            }}
          >
            <Text style={style1.t1}>Submit</Text>
          </TouchableHighlight>

          <Text style={[style1.t1, { color: "black" }]}>OR</Text>

          <TouchableHighlight
            style={style1.t2}
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text style={style1.t1}>Register</Text>
          </TouchableHighlight>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
        >
          <View
            style={{
              borderWidth: 3,
              borderRadius: 40,
              height: hp(23),
              width: wp(70),
              backgroundColor: "#e67e22",
              marginTop: hp(30),
              marginLeft: wp(15),
            }}
          >
            <Text
              style={{ fontSize: hp(3), textAlign: "center", marginTop: hp(7) }}
            >
              {cor}
            </Text>
            <Button
              labelStyle={{ fontSize: hp(3), paddingTop: 20, color: "red" }}
              onPress={() => setModalVisible(false)}
            >
              Close
            </Button>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
};


let Signup = ({navigation})=>{
 let Name1 = useSelector((State)=>State.NameSg);
 let Email1 = useSelector((State)=>State.EmailSg);
 let Pass1 = useSelector((State)=>State.PassSg);
 let Cpass1 = useSelector((State)=>State.CpassSg);
 let disp = useDispatch();
 let [NameError,setn]=useState("");
 let [EmailError,sete]=useState("");
 let [PassError,setp]=useState("");
 let [CpassError,setc]=useState("");
 const [isModalVisible, setModalVisible] = useState(false);
 let [imgpath,setpath]=useState("");
 let [corr,setcorr] = useState("");
 let [slidervalue,setslider]=useState(false);
 const isEmailValid = () => {
  // Regular expression for a basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailRegex.test(Email1);
};


//
const openPicker = async () => {
  try {
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });

    console.log(image);

    // Send the image to the backend
    setpath(image.path);
  } catch (error) {
    console.log(error);
  }
};



//

 let DS = async()=>{
  if(!Name1)
  {
    setn("*field is required");
  }

  if(!Email1)
  {
    sete("*field is reqquired");
  }

  else if (!isEmailValid()) {
    sete("*Email is not valid");
  } 
  
  if(!Pass1)
  {
    setp("*field is required");
  }

  if(!Cpass1)
  {
    setc("*field is required");
  }
 if(Cpass1!=Pass1)
  {
    setc("*Confirm password is same");
  }

  if(NameError=="" && EmailError=="" && PassError=="" && CpassError=="")
  {

    try{
      const formData = new FormData();
      formData.append('image', {
        uri: imgpath,
        type: 'image/jpeg',
        name: 'test.jpg',
      });
      
      formData.append('Name1', Name1);
      formData.append('Email1', Email1);
      formData.append('Pass1', Pass1);
      
      let reply = await axios.post("http://10.54.6.233:3001/userdata", formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
      setcorr(reply.data);
      setModalVisible(true);
     

    }
    catch(err)
    {
      setcorr("try again");
    }
  }

 }
 return(
  <>
  <ScrollView>
  <View style={style1.v1}>
  
    <TextInput
    placeholder="Enter Name"
    style={[style1.btn1]}
    onChangeText={
      (e)=>{
        disp(Name(e));
        setn("");
      }
    }
    ></TextInput>
<Text style={style1.kil}>{NameError}</Text>
<TextInput
    placeholder="Enter Email"
    style={[style1.btn1]}
    onChangeText={
      (e)=>{
        disp(Email(e));
        sete("");
      }
    }
    ></TextInput>
<Text style={style1.kil}>{EmailError}</Text>
<TextInput
    placeholder="Enter Password"
    style={[style1.btn1]}
    onChangeText={
      (e)=>{
        disp(Pass(e));
        setp("");
      }
    }
    ></TextInput>
<Text style={style1.kil}>{PassError}</Text>
    <TextInput
    placeholder="Confirm Password"
    style={[style1.btn1]}
    onChangeText={
      (e)=>{
        disp(Cpass(e));
        setc("");
      }
    }
    ></TextInput>
  <Text style={style1.kil}>{CpassError}</Text>

  <TouchableHighlight style={style1.t33} onPress={()=>{
     openPicker();
   }}>
      <Text style={[style1.t1,{fontSize:hp(2)}]}>Upload Image</Text>
   </TouchableHighlight>

  {slidervalue && <Text style={style1.kil}>Image is not uploaded</Text>}
   <TouchableHighlight style={style1.t2} onPress={()=>{
      DS();
   }}>
      <Text style={style1.t1}>Submit</Text>
   </TouchableHighlight>

   <Modal animationType="slide"
        transparent={true} visible={isModalVisible}>
          <View style={{borderWidth:3,borderRadius:40,height:hp(23),width:wp(70),backgroundColor:"#e67e22",marginTop:hp(30),marginLeft:wp(15)}}>
            <Text style={{fontSize:hp(3),textAlign:"center",marginTop:hp(7)}}>{corr}</Text>
            <Button labelStyle={{fontSize:hp(3),paddingTop:20,color:"red"}} onPress={() => setModalVisible(false)} >Close</Button>
          </View>
        </Modal>
  </View>

 
      
  </ScrollView>
  </>
 )
}





let Funinfo =({navigation})=>{
  
  let signo = useSelector((State)=>State.rw);
  let Nameo = useSelector((State)=>State.Namep1);
  let Emailo = useSelector((State)=>State.Emailp1);
  let Passo = useSelector((State)=>State.Passp1);
  let Roleo = useSelector((State)=>State.Rolep1);
  let token2 = useSelector((State)=>State.tokens);
  let disp = useDispatch();
    return(
        <>
        {signo =="false" && <Button labelStyle={[style1.nav,{fontSize:hp(1.6)}]} onPress={()=>{
           navigation.navigate('Signin');
        }}>Sign in</Button>}

      {signo=="true" && <Button labelStyle={[style1.nav,{fontSize:hp(1.6)}]} onPress={async()=>{
          disp(Namep(""));
          disp(Emailp(""));
          disp(Passp(""));
          disp(Rolep("Guest"));
          disp(token1(""));
          disp(signinaction("false"));
          await AsyncStorage.removeItem("cookie");
        }}>Sign out</Button>}
        </>
    )
} 

let HomeStack = ({navigation})=>{
    let Stack = createStackNavigator();
    return (
        <>
        <Stack.Navigator key="HomeStack">
                <Stack.Screen
                  
                  name="HomeScreen"
                  component={Home}
                  options={{
                  headerRight:()=>(
                    
                    <Funinfo navigation={navigation}></Funinfo>                   
                    
                  ),
                  headerStyle:{
                    backgroundColor:"red",
                    shadowColor:"black",
                    elevation:10,
                    height:hp(7)
                  },
                  headerTintColor:"white",
                  headerTitleAlign:"center",
                  headerTitleStyle:{
                    fontSize:hp(3),
                    fontWeight:"bold"
                  }
                  }}
                />

                <Stack.Screen
               
                  name="Signin"
                  component={Signin}
                  options={{
                 
                  headerStyle:{
                    backgroundColor:"red",
                    shadowColor:"black",
                    elevation:10,
                    height:hp(7)
                  },
                  headerTintColor:"white",
                  headerTitleAlign:"center",
                  headerTitleStyle:{
                    fontSize:hp(3),
                    fontWeight:"bold"
                  }
                  }}
                />
             
              <Stack.Screen
                  name="Signup"
                  component={Signup}
                  options={{
                 
                  headerStyle:{
                    backgroundColor:"red",
                    shadowColor:"black",
                    elevation:10,
                    height:hp(7)
                  },
                  headerTintColor:"white",
                  headerTitleAlign:"center",
                  headerTitleStyle:{
                    fontSize:hp(3),
                    fontWeight:"bold"
                  }
                  }}
                />
              </Stack.Navigator>
        </>
    )
}

let MovieStack = ({navigation})=>{
    let Stack = createStackNavigator();
    return (
        <>
        <Stack.Navigator>
                <Stack.Screen
                  name="Movies"
                  component={Home4}
                  options={{
                  headerRight:()=>(
                    <>
                    <Funinfo navigation={navigation}></Funinfo>                   
                    </>
                  ),
                  headerStyle:{
                    backgroundColor:"red",
                    shadowColor:"black",
                    elevation:10,
                    height:hp(7)
                  },
                  headerTintColor:"white",
                  headerTitleAlign:"center",
                  headerTitleStyle:{
                    fontSize:hp(3),
                    fontWeight:"bold"
                  }
                  }}
                />
              </Stack.Navigator>
        </>
    )
}


let ProfileStack = ({navigation})=>{
    let Stack = createStackNavigator();
    return (
        <>
        <Stack.Navigator>
                <Stack.Screen
                  name="Profile"
                  component={Home1}
                  options={{
                  headerRight:()=>(
                    <>
                    <Funinfo navigation={navigation}></Funinfo>                   
                    </>
                  ),
                  headerStyle:{
                    backgroundColor:"red",
                    shadowColor:"black",
                    elevation:10,
                    height:hp(7)
                  },
                  headerTintColor:"white",
                  headerTitleAlign:"center",
                  headerTitleStyle:{
                    fontSize:hp(3),
                    fontWeight:"bold"
                  }
                  }}
                />
              </Stack.Navigator>
        </>
    )
}



let CartStack = ({navigation})=>{
    let Stack = createStackNavigator();
    return (
        <>
        <Stack.Navigator>
                <Stack.Screen
                  name="Cart"
                  component={Home}
                  options={{
                  headerRight:()=>(
                    <>
                    <Funinfo navigation={navigation}></Funinfo>                   
                    </>
                  ),
                  headerStyle:{
                    backgroundColor:"red",
                    shadowColor:"black",
                    elevation:10,
                    height:hp(7)
                  },
                  headerTintColor:"white",
                  headerTitleAlign:"center",
                  headerTitleStyle:{
                    fontSize:hp(3),
                    fontWeight:"bold"
                  }
                  }}
                />
              </Stack.Navigator>
        </>
    )
}

let AddStack = ({navigation})=>{
  let Stack = createStackNavigator();
  return (
      <>
      <Stack.Navigator>
              <Stack.Screen
                name="Add Movies"
                component={Home2}
                options={{
                headerRight:()=>(
                  <>
                  <Funinfo navigation={navigation}></Funinfo>                   
                  </>
                ),
                headerStyle:{
                  backgroundColor:"red",
                  shadowColor:"black",
                  elevation:10,
                  height:hp(7)
                },
                headerTintColor:"white",
                headerTitleAlign:"center",
                headerTitleStyle:{
                  fontSize:hp(3),
                  fontWeight:"bold"
                }
                }}
              />
            </Stack.Navigator>
      </>
  )
}


let Minusstack = ({navigation})=>{
  let Stack = createStackNavigator();
  return (
      <>
      <Stack.Navigator>
              <Stack.Screen
                name="Delete Movies"
                component={Home3}
                options={{
                headerRight:()=>(
                  <>
                  <Funinfo navigation={navigation}></Funinfo>                   
                  </>
                ),
                headerStyle:{
                  backgroundColor:"red",
                  shadowColor:"black",
                  elevation:10,
                  height:hp(7)
                },
                headerTintColor:"white",
                headerTitleAlign:"center",
                headerTitleStyle:{
                  fontSize:hp(3),
                  fontWeight:"bold"
                }
                }}
              />
            </Stack.Navigator>
      </>
  )
}

let r = async()=>{
  let disp = useDispatch();
  let token1 = useSelector((State)=>State.tokens);
  let Nameo = useSelector((State)=>State.Namep1);
  let Emailo = useSelector((State)=>State.Emailp1);
  let Passo = useSelector((State)=>State.Passp1);
  let Roleo = useSelector((State)=>State.Rolep1);
  try{

    disp(tokencookie());
    
    let r2 = await axios.get("http://10.54.6.233:3001/dataall",{
      params:{
       token1
      }
    }); 
    
    if(r2.data!="not")
    {
      disp(Namep(r2.data.name));
      disp(Emailp(r2.data.email));
      disp(Rolep(r2.data.role));
      disp(pic(r2.data.file))
      disp(signinaction("true"));
    }
  }
  catch(e)
  {
    
  }
}

let Tab = () => {
    let Tabs = createBottomTabNavigator();
    let Nameo = useSelector((State)=>State.Namep1);
    let Emailo = useSelector((State)=>State.Emailp1);
    let Passo = useSelector((State)=>State.Passp1);
    let Roleo = useSelector((State)=>State.Rolep1);
    let token1 = useSelector((State)=>State.tokens);
    r();
   
    return (
        <>
            <NavigationContainer>

                <StatusBar
                    animated={true}
                    backgroundColor={"red"}
                    barStyle={'dark-content'}
                ></StatusBar>

                               { Roleo=="Guest" && <Tabs.Navigator 
                  screenOptions={{
                    tabBarActiveTintColor:"black",
                    tabBarInactiveTintColor:"black",
                    tabBarShowLabel:false,
                    tabBarStyle:{
                      height:hp(8)
                    },
                    tabBarIconStyle:{
                      height:hp(10),
                      width:wp(10)
                    }
                }}
                
                >
                 <Tabs.Screen
            name="Home1"
            component={HomeStack}
            options={{
              tabBarActiveBackgroundColor: 'red',
              tabBarInactiveBackgroundColor: '#eb4d4b',
              tabBarIcon: ({ size, color }) => <Icon1 name="home" size={hp(4)} color={color} />,
              headerShown:false
            }}
          />         
                </Tabs.Navigator>
}

               { Roleo=="Customer" && <Tabs.Navigator 
                  screenOptions={{
                    tabBarActiveTintColor:"black",
                    tabBarInactiveTintColor:"black",
                    tabBarShowLabel:false,
                    tabBarStyle:{
                      height:hp(8)
                    },
                    tabBarIconStyle:{
                      height:hp(10),
                      width:wp(10)
                    }
                }}
                
                >
                 <Tabs.Screen
            name="Home1"
            component={HomeStack}
            options={{
              tabBarActiveBackgroundColor: 'red',
              tabBarInactiveBackgroundColor: '#eb4d4b',
              tabBarIcon: ({ size, color }) => <Icon1 name="home" size={hp(4)} color={color} />,
              headerShown:false
            }}
          />
                       <Tabs.Screen 
                        name="Movies1"
                        component={MovieStack}
                        options={{
                            tabBarActiveBackgroundColor:"red",
                            tabBarInactiveBackgroundColor:"#eb4d4b",
                            tabBarIcon:({size,color})=>(
                                <Icon2 name="movie-roll" size={hp(4)} color={color} />
                            ),
                            headerShown:false
                        }}
                    />


                     
                     <Tabs.Screen 
                        name="Profile1"
                        component={ProfileStack}
                        options={{
                            tabBarActiveBackgroundColor:"red",
                            tabBarInactiveBackgroundColor:"#eb4d4b",
                            tabBarIcon:({size,color})=>(
                                <Icon2 name="face-man-profile" size={hp(4)} color={color} />
                            ),
                            headerShown:false
                        }}
                    />

                        

                </Tabs.Navigator>
}
{ Roleo=="Admin" && <Tabs.Navigator 
                  screenOptions={{
                    tabBarActiveTintColor:"black",
                    tabBarInactiveTintColor:"black",
                    tabBarShowLabel:false,
                    tabBarStyle:{
                      height:hp(8)
                    },
                    tabBarIconStyle:{
                      height:hp(10),
                      width:wp(10)
                    }
                }}
                
                >
                 <Tabs.Screen
            name="Home1"
            component={HomeStack}
            options={{
              tabBarActiveBackgroundColor: 'red',
              tabBarInactiveBackgroundColor: '#eb4d4b',
              tabBarIcon: ({ size, color }) => <Icon1 name="home" size={hp(4)} color={color} />,
              headerShown:false
            }}
          />
                      
                   
                    
                   
                    <Tabs.Screen 
                        name="Add1"
                        component={AddStack}
                        options={{
                            tabBarActiveBackgroundColor:"red",
                            tabBarInactiveBackgroundColor:"#eb4d4b",
                            tabBarIcon:({size,color})=>(
                                <Icon4 name="add-circle-outline" size={hp(4)} color={color} />
                            ),
                            headerShown:false
                        }}
                    />

                      < Tabs.Screen 
                        name="Delete1"
                        component={Minusstack}
                        options={{
                            tabBarActiveBackgroundColor:"red",
                            tabBarInactiveBackgroundColor:"#eb4d4b",
                            tabBarIcon:({size,color})=>(
                                <Icon2 name="delete-forever" size={hp(4)} color={color} />
                            ),
                            headerShown:false
                        }}
                    />
                    <Tabs.Screen 
                        name="Profile1"
                        component={ProfileStack}
                        options={{
                            tabBarActiveBackgroundColor:"red",
                            tabBarInactiveBackgroundColor:"#eb4d4b",
                            tabBarIcon:({size,color})=>(
                                <Icon2 name="face-man-profile" size={hp(4)} color={color} />
                            ),
                            headerShown:false
                        }}
                    />
                        

                </Tabs.Navigator>
}

            </NavigationContainer>
        </>
    )
}



export { Tab };

