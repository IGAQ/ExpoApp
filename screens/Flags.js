import React from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import flagsData from "../data/flags.json";
import { SvgXml } from 'react-native-svg';


const FlagsScreen = () => {
    const navigation = useNavigation();
    const flags = flagsData.flags;
    
    return (
        <ScrollView>
        <Text>FlagsScreen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
        />
        {flags.map((flag) => (
            <View key={flag.name}>
                <Text>{flag.name}</Text>
                <SvgXml xml= {flag.svg} style={{width: 200, height: 200}} />
            </View>
            ))}
        </ScrollView>
    );
    }

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default FlagsScreen;
    