import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Home({navigation}) {
    return (
        <View>
            <Text>Trang chủ nè!!!</Text>
            <TouchableOpacity onPress={() => navigation.push('SearchPage')}>
                <Text>Chuyển trang nè</Text>
            </TouchableOpacity>
        </View>
    )
}


