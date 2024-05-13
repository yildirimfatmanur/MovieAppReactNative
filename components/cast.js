import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React from 'react'

import { image185 } from '../api/moviedb'

export default function Cast({cast,navigation}) {
    const personName = 'Timothée Chalamet'
    const characterName = 'Paul Atreides'
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      
      <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}>

                {
                    cast && cast.map((person, index) => {
                        return (
                            <TouchableOpacity key={index} className="mr-4 items-center" onPress={() => navigation.navigate('Person', person)}>
                                <View
                                    className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                    <Image
                                        className="rounded-2xl h-24 w-20"
                                        source={{ uri: image185(person?.profile_path)}}
                                    //source={require('../assets/tim.jpg')} 
                                    />
                                </View>
                                <Text className="text-white text-xs mt-1">
                                {person?.original_name}
                                    
                                </Text>
                                <Text className="text-neutral-400 text-xs mt-1">
                                { person?.character}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }


            </ScrollView>
    </View>
  )
}