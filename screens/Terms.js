import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import termsData from "../data/terms.json";

const TermsScreen = () => {
    const navigation = useNavigation();
    const terms = termsData.terms;

    return (
        <ScrollView >
        <Text>TermsScreen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
        />
        {terms.map((term) => (
            <View key={term.term}>
                <Text>{term.term}</Text>
                <Text>{term.definition}</Text>
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

export default TermsScreen;