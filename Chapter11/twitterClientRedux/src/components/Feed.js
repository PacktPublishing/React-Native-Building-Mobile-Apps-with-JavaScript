import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { TweetPreviewCard } from './TweetPreviewCard';
import { getFeedData } from '../core/actions';
import { connect } from 'react-redux';

class FeedContainer extends React.Component {

    componentDidMount() {
        this.props.getFeedData(this.props.endpoint);
    }
    
    render(){
        const { data, navigation } = this.props;
        return (
            data.length > 0 ?
            <FlatList data={data} renderItem={({ item }) =>
                <TweetPreviewCard 
                key={item.id_str} 
                navigation={navigation} 
                data={item} />}
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


export const Feed = connect(({ feed }) => ({ data: feed.data }), { getFeedData })(FeedContainer)