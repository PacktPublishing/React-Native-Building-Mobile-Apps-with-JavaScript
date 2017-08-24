import React from 'react';
import { Image, View } from 'react-native';

const MediaCard = ({ mediaData }) => (
    <Image style={{
        height: mediaData.sizes.thumb.h,
        width: mediaData.sizes.thumb.w,
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