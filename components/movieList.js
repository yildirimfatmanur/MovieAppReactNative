import { View, Text, TouchableOpacity, ScrollView,TouchableWithoutFeedback, Dimensions,Image } from 'react-native'
import React from 'react'
import { styles2 } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { image185 } from '../api/moviedb'

let { width, height } = Dimensions.get('window')

export default function MovieList({title,data}) {
    const movieName = "John Wicklll"
    const navigation = useNavigation();
  return (
    <View className="mb-8 space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
            <Text className="text-white text-xl">{title}</Text>
            
        
        </View>
        <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}>
                    {
                    data.map((item, index) => (
                        <TouchableWithoutFeedback key={index} onPress={() => navigation.push("Movie", item)}>
                            <View className="space-y-4 mr-4">
                                <Image
                                    //source={require('../assets/john.jpg')}
                                    //source={{uri:image185(item.poster_path)|| fallbackMoviePoster}}
                                    source = {{uri:image185(item.poster_path)}}
                                    className="rounded-3xl"
                                    style={{
                                        width: width*0.33,
                                        height: height*0.22,
                                    }}
                                />
                                <Text className="text-neutral-300 ml-1">{
                                    item.title.length>15 ? item.title.slice(0,15)+'...' : item.title
                                    
                                }
                                </Text>
                            </View>

                        </TouchableWithoutFeedback>
                    ))
                }
            
        </ScrollView>
    </View>
  )
}