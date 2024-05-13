import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, Platform, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme'

import { fetchPerson, fetchPersonMovie, image342 } from '../api/moviedb'
import MovieList from '../components/movieList'

let { width, height } = Dimensions.get('window')
const ios = Platform.OS == "ios";
const topMargin = ios ? '' : ' my-3';

export default function PersonScreen() {
    const { params: item } = useRoute();
    const navigation = useNavigation();
    const [personMovie,setPersonMovie] = useState([1,2,3,4])
    const [person, setPerson] = useState([])
    const [isFavourite, toggleFavourite] = useState(false);
    useEffect(() => {
      getPersonDetails(item.id)
      getPersonMovies(item.id)
    }, [item])
    const getPersonDetails = async id => {
      const data = await fetchPerson(id)
      
      if (data) setPerson(data)
      setLoading(false)
  }
  const getPersonMovies = async id => {
    const data = await fetchPersonMovie(id)
    
    if (data && data.cast) setPersonMovie(data.cast)
    setLoading(false)
}

    return (
        <ImageBackground source={require('../assets/arka_plan.png')} style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={styles.paddingRT}>
                <SafeAreaView className={"flex-row justify-between items-center mx-4 z-10 " + topMargin}>
                    <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size={28} strokeWidth={2.5} color={"white"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                        <HeartIcon size={35} color={isFavourite ? theme.background : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>

                <View className="flex-row justify-center" style={{ shadowColor: 'gray', shadowRadius: 40, shadowOffset: { width: 0, height: 5 }, shadowOpacity: 1 }}>
                    <View className="items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2">
                        <Image 
                        source={{ uri: image342(person?.profile_path)}}
                        //source={require('../assets/tim.jpg')} 
                        style={{ height: height * 0.43, width: width * 0.74 }} />
                    </View>
                
                </View>
                <View className="mt-6">
                    <Text className="text-3xl text-white font-bold text-center">
                    {person?.name}
                    </Text>
                    <Text className="text-neutral-500 text-base text-center">
                    {person?.place_of_birth}
                    </Text>
                </View>

                <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full ">
                <View className="border-r-neutral-400 px-2 items-center">
                  <Text className="text-white font-semibold ">Gender</Text>
                  <Text className="text-neutral-300 text-sm">
                    {/* Male */}
                    {person?.gender ==1 ? "Female": "Male"}
                  </Text>
                </View>
                <View className="border-r-neutral-400 px-2 items-center">
                  <Text className="text-white font-semibold">Birthday</Text>
                  <Text className="text-neutral-300 text-sm">
                  {person?.birthday}
                  </Text>
                </View>
                <View className=" border-r-neutral-400 px-2 items-center">
                  <Text className="text-white font-semibold">Job</Text>
                  <Text className="text-neutral-300 text-sm">
                    Acting
                  </Text>
                </View>
                
              </View>
              <View className="my-6 mx-4 space-y-2">
                <Text className="text-white text-lg text-center">Biography</Text>
                <Text className="text-neutral-400 tracking-wide text-center">
                  {person?.biography}
                </Text>
                
              </View>
            </ScrollView>
        </ImageBackground>
    )
}
