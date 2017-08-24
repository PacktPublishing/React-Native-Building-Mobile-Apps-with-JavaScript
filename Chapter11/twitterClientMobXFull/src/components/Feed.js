import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { TweetPreviewCard } from './TweetPreviewCard';
import { observer, inject } from 'mobx-react';

@inject('feedStore')
@observer
export class Feed extends React.Component {

    componentDidMount() {
        const { endpoint, params } = this.props;
        this.props.feedStore.getFeedData({ endpoint, params });
    }

    render(){
        const { feedStore: { data }, navigation } = this.props;
        return (
            data.length > 0 ?
            <FlatList data={data} renderItem={({ item }) =>
                <TweetPreviewCard key={item.id_str} navigation={navigation} data={item} />}
                keyExtractor={(item, index) => `tweet-${index}-${item.id}`}
             /> :
            <View style={styles.container}>
                <ActivityIndicator />
            </View>

        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}