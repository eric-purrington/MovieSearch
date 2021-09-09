import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Result = ({movie, onChoose}) => {
    let monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    let date = new Date(movie.release_date)
    let formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

    return (
        <TouchableOpacity style={styles.container} onPress={() => onChoose(movie)}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.date}>{movie.release_date ? formattedDate : "Date Unknown"}</Text>
            <View style={styles.hr} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
    },
    date: {
        fontSize: 16,
        color: "rgba(175, 175, 175, 1)",
        marginTop: 5,
        marginBottom: 10,
    },
    hr: {
        width: "100%",
        borderBottomColor: "rgba(175, 175, 175, 1)",
        borderBottomWidth: 1,
    }
});

export default Result;