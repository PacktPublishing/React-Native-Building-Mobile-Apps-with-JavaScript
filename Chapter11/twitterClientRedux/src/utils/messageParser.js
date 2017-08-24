import React from 'react';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';

const Link = ({ text, onPress }) =>
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>
            {text}
        </Text>
    </TouchableOpacity>;


export const parseMessageForHashTags = (text, id, navigate) => {
    const parsedMessage =
        text.split(/(\S*#(?:\[[^\]]+\]|\S+))|(\S*@(?:\[[^\]]+\]|\S+))/g)
            .filter(text => text)
            .map(text => {
                if (text[0] === '#') {
                    return <Link key={`hashtag-${text}-${id}`} text={text} onPress={() => navigate(
                        "hashtag",
                        { hashtag: text }
                    )} />;
                }
                if (text[0] === '@') {
                    return <Link key={`profile-${text}-${id}`} text={text} onPress={() => navigate(
                        "profile",
                        { user: text }
                    )} />;
                }
                return <Text key={`text-${text}-${id}`}>{text}</Text>
            });
    return parsedMessage;
}


const styles = StyleSheet.create({
    link: {
        color: "#2980b9"
    }
})