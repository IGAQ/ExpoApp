import React from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import flagsData from "../data/flags.json";
import { SvgXml } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';

const FlagsScreen = () => {
    const navigation = useNavigation();
    const flags = flagsData.flags;
    
    return (
        <ScrollView>
            <View style={styles.header}> 
            <AntDesign name="caretleft" size={24} color="black" onPress={() => navigation.navigate("Home")} />
                <Text style={styles.headerText}>LGBTQA+ Flags</Text>
            </View>
        {flags.map((flag) => (
            <View key={flag.name}style={styles.container}>
                <Text style={styles.title}>{flag.name}</Text>
                <SvgXml xml= {flag.svg} style={{width: 200, height: 200, marginTop: 0}} />
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
        marginBottom: 0,
    },
    header: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 30,
        backgroundColor: "#dfeeff",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 8,
    },
    backarrow: {
        backgroundColor: "#fff",
        color: "#000",
        fontSize: 24,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: -20,
    },
});

export default FlagsScreen;