import React from 'react';
import { Image, View } from 'react-native';

const MediaCard = ({ mediaData }) => (
    <Image style={{
        height: 200,
        width: 300,
        marginTop: 10
    }}
        source={{ uri: mediaData.media_url }}
    />
)

export const MediaList = ({ media }) => (
    <View>
        {media && media.map(md => <MediaCard key={md.id} mediaData={md} />)}
    </View>
)