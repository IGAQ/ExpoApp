import React from "react";
import { View, StyleSheet, Button, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import termsData from "../data/terms.json";
import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';

const Spacer = styled.View`
    height: ${(props) => props.size}px;
`;

const TermsScreen = () => {
    const terms = termsData.terms;
    const navigation = useNavigation();

    return (
        <ScrollView >
            <View style={styles.header}>
                
            <AntDesign name="caretleft" size={24} color="black" onPress={() => navigation.navigate("Home")} />
                <Text style={styles.headerText}>LGBTQA+ Terms</Text>
            </View>
                <View>
                        <Spacer size = '55' />
                        <View>
                            <Text style={styles.letter} id = 'a'>
                                A
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(0,7).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'b'>
                                B
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(8,19).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'c'>
                                C
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(19,26).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'd'>
                                D
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(26,34).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'f'>
                                F
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(34,39).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'g'>
                                G
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(39,66).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'h'>
                                H
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(66,80).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'i'>
                                 I 
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(80,83).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'k'>
                                K
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(83,84).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id ='l'>
                                L
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(84,89).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'm'>
                                M
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(89,102).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'n'>
                                N
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(102,105).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id ='o'>
                                O
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(105,110).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id ='p'>
                                P
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(110,123).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'q'>
                                Q
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(123,129).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'r'>
                                R
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(129,130).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 's'>
                                S
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(130,141).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 't'>
                                T
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(141,160).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'v'>
                                V
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(160,161).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                            <Spacer size = '45' />
                            <Text style={styles.letter} id = 'w'>
                                W
                            </Text>
                            <Spacer size = '20' />
                            {terms.slice(161,163).map(term => 
                                <View key = {term.term}>     
                                    <Text style={styles.tittle}>{term.term}</Text>
                                    <Text style={styles.text}>{term.definition}</Text>
                                </View>
                            )}
                        </View>
                    </View>
                    <Spacer size = '100' />
            </ScrollView>
    );
}



const styles = StyleSheet.create({
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
    letter: {
        borderRadius: 50,
        backgroundColor: "#A5CEFF",
        fontSize: 30,
        width: 50,
        height: 50,
        textAlign: "center",
    },
    tittle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        padding: 10,
    },
    text: {
        fontSize: 20,
        color: "black",
        padding: 10,
    },
});

export default TermsScreen;