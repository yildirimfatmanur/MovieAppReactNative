import { View, Text, Platform, ImageBackground,StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon,MagnifyingGlassIcon } from "react-native-heroicons/outline";
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { fetchTrendingMovies,fetchUpcomingMovies } from "../api/moviedb";

const ios = Platform.OS == "ios"
export default function HomeScreen() {
  const [trending, setTrending] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [topRated, setTopRated] = useState([])
  const navigation = useNavigation();

  useEffect(()=>{
    getTrendingMovies();
    getUpcomingMovies()
    getTopRatedMovies()
  },[])

  const getTrendingMovies=async()=>{
    const data = await fetchTrendingMovies();
    console.log('..................',data);
    if(data && data.results) setTrending(data.results)
}
const getUpcomingMovies=async()=>{
  const data = await fetchUpcomingMovies()
  if(data && data.results) setUpcoming(data.results)
  setLoading(false)
}


const getTopRatedMovies=async()=>{
  const data = await fetchTrendingMovies()
  if(data && data.results) setTopRated(data.results)
  setLoading(false)
}

  return (
   <ImageBackground source={require('../assets/arka_plan.png')}style={styles.container}>
    <View className="flex-1" style={styles.paddingRT}>
        <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
            <StatusBar style='light'/>
            <View className="flex-row justify-between items-center" >
            <Bars3CenterLeftIcon color="white" strokeWidth={2} size={30}/>
            <Text style={styles.whiteText} className="text-3xl font-bold">MOVIES</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
        {trending.length>0 && <TrendingMovies data={trending} />}
          <MovieList title="Latest Movies" data={upcoming}/>
          <MovieList title="Top rated" data={topRated} />
        </ScrollView>
   </View>
   </ImageBackground>
  )
}

