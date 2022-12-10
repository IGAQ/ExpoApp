import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button
            title="Go to Terms"
            onPress={() => navigation.navigate("Terms")}
        />
        <Button
            title="Go to Flags"
            onPress={() => navigation.navigate("Flags")}
        />
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;