import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

function Movie({ title, year, icon_name, poster }) {
    return (
        <View>

            <Image
                source={poster}
                style={{ width: 400, height: 500 }}
            />
            <Text>
                {title} ({year})
            </Text>
            <Icon name={icon_name} />
        </View>
    );
}

function AllMovies() {
    return (
        <ScrollView>
            <Movie
                title="Doctor Sleep"
                year="2019"
                icon_name="skull"
                poster={require("../img/doctor-sleep.jpg")}
            />
            <Movie
                title="Midway"
                year="2020"
                icon_name="person-rifle"
                poster={require("../img/midway.jpg")}
            />
        </ScrollView>
    );
}

export default AllMovies;