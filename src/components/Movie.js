import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, Image, ScrollView, Platform } from "react-native";
import ExitSVG from "./ExitSVG";

const Movie = ({movie, display, setDisplay}) => {
    let monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    let date = new Date(movie.release_date)
    let formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    let imageSrc = "https://image.tmdb.org/t/p/w500" + movie.poster_path

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={display}
            onRequestClose={() => setDisplay(!display)}
        >
            <View style={styles.container}>

                <TouchableOpacity style={{...styles.backBtn, top: Platform.OS === "ios" ? 40 : 20}} onPress={() => setDisplay(!display)}>
                    <ExitSVG />
                </TouchableOpacity>

                <ScrollView contentContainerStyle={styles.scroll} bounces={false}>
                    {movie.poster_path ? 
                        <Image style={styles.poster} source={{ uri: imageSrc }} /> : 
                        <View style={styles.noImage}>
                            <Text style={styles.noImageText}>No Image Available</Text>
                        </View>
                    }
                    
                    <View style={styles.wordCon}>
                        <Text style={styles.title}>{movie.title} - {movie.vote_average}/10</Text>
                        <Text style={styles.text}>{movie.release_date ? formattedDate : "Date Unknown"}</Text>
                        <Text style={styles.extraHead}>Overview</Text>
                        <Text style={styles.text}>{movie.overview}</Text>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "rgba(250, 250, 250, 1)",
        marginBottom: 15,
    },
    scroll: {
        paddingBottom: 40
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        color: "rgba(175, 175, 175, 1)",
    },
    backBtn: {
        height: 30,
        width: 30,
        position: "absolute",
        left: 20,
        paddingRight: 3,
        backgroundColor: "rgba(250, 250, 250, 0.5)",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99,
    },
    poster: {
        height: 600,
        zIndex: 2,
    },
    noImage: {
        height: 500,
        width: "100%",
        zIndex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    noImageText: {
        fontSize: 20,
        fontWeight: "500",
    },
    wordCon: {
        marginTop: 15,
        paddingHorizontal: 30,
    },
    extraHead: {
        marginTop: 25,
        fontWeight: "500",
        fontSize: 16,
    }
});

export default Movie;