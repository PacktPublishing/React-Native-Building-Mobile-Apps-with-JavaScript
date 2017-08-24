import React from 'react';
import { FlatList } from 'react-native';
import { TweetPreviewCard } from './TweetPreviewCard';

export const Feed = ({ data, navigation }) => (
    <FlatList data={data} renderItem={({ item }) =>
        <TweetPreviewCard key={item.id_str} navigation={navigation} data={item} />}
        keyExtractor={(item, index) => `tweet-${index}-${item.id}`}
    />
)
