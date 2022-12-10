import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Image source={require("../assets/Logo.png")} style={styles.logo} />
            <Text style={styles.title}>I got a Queery Resources</Text>
            <View style={styles.buttonView}>
                <Text
                    style={styles.button}
                    onPress={() => navigation.navigate("Terms")}
                >   
                    Terms
                </Text>
                <Text
                    style={styles.button}
                    onPress={() => navigation.navigate("Flags")}
                >
                    Flags
                </Text>
            </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo : {
        width: 200,
        height: 200,
        marginBottom: 0,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 8,
    },
    buttonView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
    },
    button: {
        backgroundColor: "#A5CEFF",
        color: "#000",
        fontSize: 20,
        borderRadius: 10,
        padding: 20,
        margin: 10,
    },
});

export default HomeScreen;