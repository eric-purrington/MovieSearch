import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, TextInput, ScrollView, ActivityIndicator } from "react-native";

import API from "../api";
import SearchSVG from "../components/SearchSVG";
import Result from "../components/Result";
import Movie from "../components/Movie";

const Search = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [mostPopular, setMostPopular] = useState([]);
    const [chosenMovie, setChosenMovie] = useState();
    const [displayChosen, setDisplayChosen] = useState(false);
    const [loading, setLoading] = useState(false);

    const moviesToMap = query ? movies : mostPopular;

    useEffect(() => {

        getMostPopular();

    }, [])

    const getMostPopular = async () => {
        try {
            setLoading(true)
            const results = await API.queryMostPopular();
            setMostPopular(results);
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const getMovies = async (value) => {
        setQuery(value);
        try {
            setLoading(true)
            const results = await API.searchByMovie(value);
            setMovies(results);
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const onChoose = (movie) => {
        setChosenMovie(movie)
        setDisplayChosen(true)
    }

    const renderMovies = () => {
        return (
            moviesToMap.map(movie => {
                return (
                    <Result key={movie.id} movie={movie} onChoose={onChoose}/>
                )
            })
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cinema Seeker</Text>

            <View style={styles.searchCon}>
                <View style={styles.svg}>
                    <SearchSVG />
                </View>

                <TextInput 
                    style={styles.queryInput} 
                    placeholder="Search" 
                    placeholderTextColor = "rgba(175, 175, 175, 1)"
                    autoCapitalize="words"
                    value={query} 
                    onChangeText={(value) => getMovies(value)}
                />
            </View>

            <Text style={styles.resultHeader}>{mostPopular === moviesToMap ? "Current Top Rated" : `Movies Matching: ${query}`}</Text>

            {loading ? 
                <ActivityIndicator size="large" style={styles.loader} /> : 
                <ScrollView style={styles.resultList}>
                    {renderMovies()}
                </ScrollView>
            }

            {displayChosen && <Movie setDisplay={setDisplayChosen} display={displayChosen} movie={chosenMovie} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
    },
    header: {
        textAlign: "center",
        fontSize: 32,
        marginTop: 75,
        fontWeight: "500",
        marginBottom: 25,
    },
    searchCon: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
    },
    svg: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: -29,
    },
    queryInput: {
        width: "100%",
        borderColor: "rgba(175, 175, 175, 1)",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 39,
        paddingVertical: 10,
        color: "black",
        fontSize: 18,
    },
    resultHeader: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20,
    },
    loader: {
        marginTop: 50,
    }
});

export default Search;
