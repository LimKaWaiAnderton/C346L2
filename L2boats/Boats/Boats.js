import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Boats({ name, description, picture }) {
  return (
    <View style={style.container}>
      <View style={style.boat}>
        <Icon name="ship" size={30} color="white" />
        <Text style={style.title}>{name}</Text>
      </View>
      <Text style={style.description}>{description}</Text>
      <Image source={picture} style={style.image} />
    </View>
  );
}

const style = StyleSheet.create({
  boat: {
    flexDirection: 'row',
    backgroundColor: '#444',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    width: 350,
    padding: 5, alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    marginLeft: 5,
  },
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'lightgray',
    padding: 10,
    width: 360,
  },
  description: {
    backgroundColor: '#F5F5F5',
    padding: 5,
    textAlign: 'center',
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 12,
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 10,
  },
});

function AllBoats() {
  return (
    <ScrollView >
      <View style={{ backgroundColor: 'whtite', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{
          marginTop: 50, backgroundColor: 'lightgray', height: 30
          , textAlign: 'center', fontSize: 20, fontWeight: 'bold', borderColor: 'black', borderWidth: 2,
          width: 350, textTransform: 'uppercase'
        }}>GetABoat - For Sale</Text>
        <Boats
          name="Sea Ray 500 Sundancer"
          description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
          picture={require('../assets/sea_ray.jpg')}
        />
        <Boats
          name="Four Winns Horizon 180"
          description="A sporty look and refined details truly set the Horizon 180 above all others"
          picture={require('../assets/four_winns.jpg')}
        />
        <Boats
          name="Flipper 640 ST"
          description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
          picture={require('../assets/flipper.jpg')}
        />
        <Boats
          name="Princess V48"
          description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
          picture={require('../assets/princess.jpg')}
        />
        <Boats
          name="Bayliner 175 Bowrider"
          description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
          picture={require('../assets/bayliner.jpg')}
        />
        <Boats
          name="Fairline Targa 47"
          description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
          picture={require('../assets/fairline.jpg')}
        />
      </View>

    </ScrollView>
  );
}

export default AllBoats;
