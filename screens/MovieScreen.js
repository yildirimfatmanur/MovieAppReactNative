import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground, Dimensions, Platform,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { styles } from '../theme'
import { HeartIcon } from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/cast'
import { fetchMovieCredits, fetchMovieDetails, image500 } from '../api/moviedb'

var {width,height} = Dimensions.get("window")
const ios = Platform.OS == "ios";
const topMargin = ios ? '' : " mt-5"
const movieName = "Dune Çöl Gezegeni"

export default function MovieScreen() {
    const { params: item } = useRoute()
    const navigation = useNavigation()
    const [isFavourite, toggleFavourite] = useState(false)
    const [cast, setCast] = useState([1,2,3,4,5,6,7,8])
    const [movie, setMovie] = useState({})
    useEffect( ()=>{
        console.log(item.id);
        getMovieDetails(item.id)
        getMovieCredits(item.id)
    },[item])

    const getMovieDetails = async id => {
        const data = await fetchMovieDetails(id)
        console.log(data)
        if (data) setMovie(data)
        setLoading(false)
    }

    const getMovieCredits = async id => {
        const data = await fetchMovieCredits(id)
        if (data && data.cast) setCast(data.cast)
        setLoading(false)
    }

    
  return (
    
        <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{ paddingBottom: 50 }} >
        <View className="w-full">
            <SafeAreaView className={"absolute z-20 w-full flex-row  justify-between items-center px-4"+ topMargin} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={28} strokeWidth={2.5} color={"white"} />
                </TouchableOpacity>
                <TouchableOpacity >
                        <HeartIcon size={35} color={isFavourite ? theme.background : "white"} />

                    </TouchableOpacity>
            </SafeAreaView>
            <View>
                <Image 
                source={{ uri: image500(movie?.poster_path) }}
                style={{ width, height: height * 0.65 }}
                />
                <LinearGradient
                                    colors={['transparent','rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                                    style={{ width, height: height * 0.40 }}
                                    start={{ x: 0.5, y: 0 }}
                                    end={{ x: 0.5, y: 1 }}
                                    className="absolute bottom-0" />
                
            </View>
        </View>
        <View style={{ marginTop: -(height * 0.12) }} className="space-y-3">
            <Text className="text-neutral-300" style={{  textAlign: 'center', fontSize: 30, fontWeight: 'bold', letterSpacing: 1 }}>
                {movie?.title}
            </Text>

            <Text className="text-neutral-400 font-semibold text-base text-center">
            {movie?.status} / {movie?.release_date} / {movie?.runtime}
            </Text>

            <Text className="text-neutral-400 mx-10 tracking-wide text-center" >
                    
                   {movie?.overview}
                </Text>
        </View>
        <Cast navigation={navigation} cast={cast}/>
    </ScrollView>
    
  )
}