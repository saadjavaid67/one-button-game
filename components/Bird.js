import React from 'react';
import { View } from 'react-native';

const Bird = ({birdBottom, birdLeft}) => {

    // Set height + width for your bird
    const birdWidth = 70
    const birdHeight = 50
    const birdColor = '#CD5588'

    // Make a square for your "bird"
    return (
        <View style={{
            backgroundColor:birdColor,
            width: birdWidth,
            height: birdHeight,
            position:'absolute',
            left: birdLeft - (birdWidth/2),
            bottom: birdBottom - (birdHeight/2)
        }}></View>
    )
}

export default Bird