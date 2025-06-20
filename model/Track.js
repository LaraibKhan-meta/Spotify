import React, { useEffect } from 'react'
import { View } from 'react-native'
import TrackPlayer from 'react-native-track-player';
import { useSelector } from 'react-redux'

const Track =  () => {
    const select = useSelector((state) => state.track);
    console.log(select);

    useEffect(() => {
        async function trackPlayer()
        {
            await TrackPlayer.add(select);

    //          const queue = await TrackPlayer.getQueue();
    //         console.log('Queue:', queue); 
    //         queue.forEach(track => {
    //             console.log(`${track.id}: ${track.title}`);
    //   });
        //     let trackObject = await TrackPlayer.getTrack(trackIndex);
        // console.log(`Title: ${trackObject.title}`);
        }
        trackPlayer();
    },[])
    

    return (
        <View>

        </View>
    )

}

export default Track;



