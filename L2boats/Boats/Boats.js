import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Boats({ name, description, picture }) {
  return (
    <View>
      <View
        style={{
          marginBottom: 20,
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}
      >
        {/* Container for icon and name */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
          }}
        >
          <Icon
            name="ship"
            size={24}
            color="#0F0F0F"
            style={{ marginRight: 8 }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            {name}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 14,
            color: '#666',
            marginBottom: 10,
          }}
        >
          {description}
        </Text>
        <Image
          source={picture}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'cover',
            borderRadius: 8,
          }}
        />
      </View>
    </View>

  );
}

function AllBoats() {
  return (
    <ScrollView>
      <Text>GetABoat - For Sale</Text>
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
    </ScrollView>
  );
}

export default AllBoats;
