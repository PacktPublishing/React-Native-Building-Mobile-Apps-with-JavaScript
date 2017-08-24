import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';

export const actionTypes = {
    GET_LOGGED_INFO__STARTED: 'GET_LOGGED_INFO__STARTED',
    GET_LOGGED_INFO__SUCCESS: 'GET_LOGGED_INFO__SUCCESS',
    GET_LOGGED_INFO__ERROR: 'GET_LOGGED_INFO__ERROR',
    GET_FEED_DATA: 'GET_FEED_DATA',
    GET_FEED_DATA_SUCCESS: 'GET_FEED_DATA_SUCCESS',
    GET_USER_DATA: 'GET_USER_DATA',
    GET_USER_DATA_SUCCESS: 'GET_USER_DATA_SUCEESS',
    LOGIN: 'LOGIN',
    LOGIN_SUCESS: 'LOGIN_SUCCESS',
    POST_TWEET: 'POST_TWEET',
    POST_TWEET_SUCCESS: 'POST_TWEET_SUCCESS',
}

export const getLoggedInfoFromAsyncStorage = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_LOGGED_INFO__STARTED
    })    
    
    AsyncStorage.getItem('@TwitterClient:authToken').then(result => {
        if (result !== null) {
            dispatch({
                type: actionTypes.GET_LOGGED_INFO__SUCCESS,
                payload: result
             })
            dispatch(getUser());
        } else {
            dispatch(NavigationActions.navigate({ routeName: "login" }))
        }    
    }).catch(error => {
        dispatch({
          type: actionTypes.GET_LOGGED_INFO__ERROR,
          payload: error
        });
    });

}

export const getUser = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_USER_DATA,
        payload: {
            user: '@VladimirNovick'
        }
    });
    setTimeout(() => {
        dispatch({
            type: actionTypes.GET_USER_DATA_SUCCESS,
            payload: {
                user: {
                    name: "OAuth Dancer",
                    profile_sidebar_fill_color: "DDEEF6",
                    profile_background_tile: true,
                    profile_sidebar_border_color: "C0DEED",
                    profile_image_url: "http://a0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
                    created_at: "Wed Mar 03 19:37:35 +0000 2010",
                    location: "San Francisco, CA",
                    follow_request_sent: false,
                    id_str: "119476949",
                    is_translator: false,
                    profile_link_color: "0084B4",
                    entities: {
                        url: {
                            urls: [{
                                expanded_url: null,
                                url: "http://bit.ly/oauth-dancer",
                                indices: [0, 26],
                                display_url: null
                            }],
                        },
                        description: null
                    },
                    default_profile: false,
                    url: "http://bit.ly/oauth-dancer",
                    contributors_enabled: false,
                    favourites_count: 7,
                    utc_offset: null,
                    profile_image_url_https: "https://si0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
                    id: 119476949,
                    listed_count: 1,
                    profile_use_background_image: true,
                    profile_text_color: "333333",
                    followers_count: 28,
                    lang: "en",
                    protected: false,
                    geo_enabled: true,
                    notifications: false,
                    description: "",
                    profile_background_color: "C0DEED",
                    verified: false,
                    time_zone: null,
                    profile_background_image_url_https: "https://si0.twimg.com/profile_background_images/80151733/oauth-dance.png",
                    statuses_count: 166,
                    profile_background_image_url: "http://a0.twimg.com/profile_background_images/80151733/oauth-dance.png",
                    default_profile_image: false,
                    friends_count: 14,
                    following: false,
                    show_all_inline_media: false,
                    screen_name: "oauth_dancer"
                }
            }
        });
        dispatch(NavigationActions.navigate({
            routeName: "mainFlow"
        }));
    }, 3000)
}

export const login = (data) => (dispatch) => {
    dispatch({
        type: actionTypes.LOGIN,
        payload: data
    })
    setTimeout(() => {
        dispatch({
            type: actionTypes.LOGIN_SUCESS,
            payload: {
                user: {
                    name: "OAuth Dancer",
                    profile_sidebar_fill_color: "DDEEF6",
                    profile_background_tile: true,
                    profile_sidebar_border_color: "C0DEED",
                    profile_image_url: "http://a0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
                    created_at: "Wed Mar 03 19:37:35 +0000 2010",
                    location: "San Francisco, CA",
                    follow_request_sent: false,
                    id_str: "119476949",
                    is_translator: false,
                    profile_link_color: "0084B4",
                    entities: {
                        url: {
                            urls: [{
                                expanded_url: null,
                                url: "http://bit.ly/oauth-dancer",
                                indices: [0, 26],
                                display_url: null
                            }],
                        },
                        description: null
                    },
                    default_profile: false,
                    url: "http://bit.ly/oauth-dancer",
                    contributors_enabled: false,
                    favourites_count: 7,
                    utc_offset: null,
                    profile_image_url_https: "https://si0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
                    id: 119476949,
                    listed_count: 1,
                    profile_use_background_image: true,
                    profile_text_color: "333333",
                    followers_count: 28,
                    lang: "en",
                    protected: false,
                    geo_enabled: true,
                    notifications: false,
                    description: "",
                    profile_background_color: "C0DEED",
                    verified: false,
                    time_zone: null,
                    profile_background_image_url_https: "https://si0.twimg.com/profile_background_images/80151733/oauth-dance.png",
                    statuses_count: 166,
                    profile_background_image_url: "http://a0.twimg.com/profile_background_images/80151733/oauth-dance.png",
                    default_profile_image: false,
                    friends_count: 14,
                    following: false,
                    show_all_inline_media: false,
                    screen_name: "oauth_dancer"
                }
            }
        })
        dispatch(NavigationActions.navigate({
            routeName: "mainFlow"
        }));
    },300)
}

export const postTweet = (text, closeModalCallback) => (dispatch) => {
    dispatch({
        type: actionTypes.POST_TWEET,
        payload: {
            text
        }
    })
    closeModalCallback();
    setTimeout(() => {
        dispatch({
            type: actionTypes.POST_TWEET_SUCCESS,
            payload: {
                text
            }
        })
    }, 3000)
}


export const getFeedData = (endpoint) => (dispatch) => {
    dispatch({
        type: actionTypes.GET_FEED_DATA,
        payload: {
            endpoint
        }
    })

    setTimeout(() => {
        dispatch({
            type: actionTypes.GET_FEED_DATA_SUCCESS,
            payload: {
                data: [{
                    coordinates: null,
                    truncated: false,
                    created_at: "Tue Aug 28 21:16:23 +0000 2012",
                    favorited: false,
                    id_str: "240558470661799936",
                    in_reply_to_user_id_str: null,
                    entities: {
                        urls: [],
                        hashtags: [],
                        user_mentions: [],
                    },
                    text: "just another test",
                    contributors: null,
                    id: 240558470661799936,
                    retweet_count: 10,
                    in_reply_to_status_id_str: null,
                    geo: null,
                    retweeted: true,
                    in_reply_to_user_id: null,
                    place: null,
                    source: "OAuth Dancer Reborn",
                    user: {
                        name: "OAuth Dancer",
                        profile_sidebar_fill_color: "DDEEF6",
                        profile_background_tile: true,
                        profile_sidebar_border_color: "C0DEED",
                        profile_image_url: "http://a0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
                        created_at: "Wed Mar 03 19:37:35 +0000 2010",
                        location: "San Francisco, CA",
                        follow_request_sent: false,
                        id_str: "119476949",
                        is_translator: false,
                        profile_link_color: "0084B4",
                        entities: {
                            url: {
                                urls: [{
                                    expanded_url: null,
                                    url: "http://bit.ly/oauth-dancer",
                                    indices: [0, 26],
                                    display_url: null
                                }],
                            },
                            description: null
                        },
                        default_profile: false,
                        url: "http://bit.ly/oauth-dancer",
                        contributors_enabled: false,
                        favourites_count: 7,
                        utc_offset: null,
                        profile_image_url_https: "https://si0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
                        id: 119476949,
                        listed_count: 1,
                        profile_use_background_image: true,
                        profile_text_color: "333333",
                        followers_count: 28,
                        lang: "en",
                        protected: false,
                        geo_enabled: true,
                        notifications: false,
                        description: "",
                        profile_background_color: "C0DEED",
                        verified: false,
                        time_zone: null,
                        profile_background_image_url_https: "https://si0.twimg.com/profile_background_images/80151733/oauth-dance.png",
                        statuses_count: 166,
                        profile_background_image_url: "http://a0.twimg.com/profile_background_images/80151733/oauth-dance.png",
                        default_profile_image: false,
                        friends_count: 14,
                        following: false,
                        show_all_inline_media: false,
                        screen_name: "oauth_dancer"
                    },
                    in_reply_to_screen_name: null,
                    in_reply_to_status_id: null
                    },
                    {
                        coordinates: {
                            coordinates: [-122.25831, 37.871609],
                            type: "Point"
                        },
                        truncated: false,
                        created_at: "Tue Aug 28 21:08:15 +0000 2012",
                        favorited: false,
                        id_str: "240556426106372096",
                        in_reply_to_user_id_str: null,
                        entities: {
                            urls: [{
                                expanded_url: "http://blogs.ischool.berkeley.edu/i290-abdt-s12/",
                                url: "http://t.co/bfj7zkDJ",
                                indices: [79, 99],
                                display_url: "blogs.ischool.berkeley.edu/i290-abdt-s12/"
                            }],
                            hashtags: [],
                            user_mentions: [{
                                name: "Cal",
                                id_str: "17445752",
                                id: 17445752,
                                indices: [60, 64],
                                screen_name: "Cal"
                            },
                            {
                                name: "Othman Laraki",
                                id_str: "20495814",
                                id: 20495814,
                                indices: [70, 77],
                                screen_name: "othman"
                            }
                            ],
                            media: [{
                                id: 266031293949698048,
                                id_str: "266031293949698048",
                                indices: [17, 37],
                                media_url: "https:\/\/pbs.twimg.com\/media\/DF_56VwXUAAIISB.jpg",
                                media_url_https: "https:\/\/pbs.twimg.com\/media\/A7EiDWcCYAAZT1D.jpg",
                                url: "http:\/\/t.co\/bAJE6Vom",
                                display_url: "pic.twitter.com\/bAJE6Vom",
                                expanded_url: "http:\/\/twitter.com\/BarackObama\/status\/266031293945503744\/photo\/1",
                                type: "photo",
                                sizes: {
                                    medium: {
                                        w: 600,
                                        h: 399,
                                        resize: "fit"
                                    },
                                    thumb: {
                                        w: 150,
                                        h: 150,
                                        resize: "crop"
                                    },
                                    small: {
                                        w: 340,
                                        h: 226,
                                        resize: "fit"
                                    },
                                    large: {
                                        w: 800,
                                        h: 532,
                                        resize: "fit"
                                    }
                                }
                            }]
                        },
                        text: 'lecturing at the "analyzing big data with #twitter" class at @cal with @othman vladjs.com',
                        contributors: null,
                        id: 240556426106372096,
                        retweet_count: 3,
                        in_reply_to_status_id_str: null,
                        geo: {
                            coordinates: [37.871609, -122.25831],
                            type: "Point"
                        },
                        retweeted: false,
                        possibly_sensitive: false,
                        in_reply_to_user_id: null,
                        place: {
                            name: "Berkeley",
                            country_code: "US",
                            country: "United States",
                            attributes: {},
                            url: "http://api.twitter.com/1/geo/id/5ef5b7f391e30aff.json",
                            id: "5ef5b7f391e30aff",
                            bounding_box: {
                                coordinates: [
                                    [
                                        [-122.367781, 37.835727],
                                        [-122.234185, 37.835727],
                                        [-122.234185, 37.905824],
                                        [-122.367781, 37.905824]
                                    ]
                                ],
                                type: "Polygon"
                            },
                            full_name: "Berkeley, CA",
                            place_type: "city"
                        },
                        source: "Safari on iOS",
                        user: {
                            name: "Raffi Krikorian",
                            profile_sidebar_fill_color: "DDEEF6",
                            profile_background_tile: false,
                            profile_sidebar_border_color: "C0DEED",
                            profile_image_url: "http://a0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
                            created_at: "Sun Aug 19 14:24:06 +0000 2007",
                            location: "San Francisco, California",
                            follow_request_sent: false,
                            id_str: "8285392",
                            is_translator: false,
                            profile_link_color: "0084B4",
                            entities: {
                                url: {
                                    urls: [{
                                        expanded_url: "http://about.me/raffi.krikorian",
                                        url: "http://t.co/eNmnM6q",
                                        indices: [0, 19],
                                        display_url: "about.me/raffi.krikorian"
                                    }]
                                },
                                description: {
                                    urls: []
                                }
                            },
                            default_profile: true,
                            url: "http://t.co/eNmnM6q",
                            contributors_enabled: false,
                            favourites_count: 724,
                            utc_offset: -28800,
                            profile_image_url_https: "https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
                            id: 8285392,
                            listed_count: 619,
                            profile_use_background_image: true,
                            profile_text_color: "333333",
                            followers_count: 18752,
                            lang: "en",
                            protected: false,
                            geo_enabled: true,
                            notifications: false,
                            description: "Director of @twittereng's Platform Services. I break things.",
                            profile_background_color: "C0DEED",
                            verified: false,
                            time_zone: "Pacific Time (US & Canada)",
                            profile_background_image_url_https: "https://si0.twimg.com/images/themes/theme1/bg.png",
                            statuses_count: 5007,
                            profile_background_image_url: "http://a0.twimg.com/images/themes/theme1/bg.png",
                            default_profile_image: false,
                            friends_count: 701,
                            following: true,
                            show_all_inline_media: true,
                            screen_name: "raffi"
                        },
                        in_reply_to_screen_name: null,
                        in_reply_to_status_id: null
                    },
                    {
                        coordinates: null,
                        truncated: false,
                        created_at: "Tue Aug 28 19:59:34 +0000 2012",
                        favorited: false,
                        id_str: "240539141056638977",
                        in_reply_to_user_id_str: null,
                        entities: {
                            urls: [],
                            hashtags: [],
                            user_mentions: []
                        },
                        text: "You'd be right more often if you thought you were wrong.",
                        contributors: null,
                        id: 240539141056638977,
                        retweet_count: 1,
                        in_reply_to_status_id_str: null,
                        geo: null,
                        retweeted: false,
                        in_reply_to_user_id: null,
                        place: null,
                        source: "web",
                        user: {
                            name: "Taylor Singletary",
                            profile_sidebar_fill_color: "FBFBFB",
                            profile_background_tile: true,
                            profile_sidebar_border_color: "000000",
                            profile_image_url: "http://a0.twimg.com/profile_images/2546730059/f6a8zq58mg1hn0ha8vie_normal.jpeg",
                            created_at: "Wed Mar 07 22:23:19 +0000 2007",
                            location: "San Francisco, CA",
                            follow_request_sent: false,
                            id_str: "819797",
                            is_translator: false,
                            profile_link_color: "c71818",
                            entities: {
                                url: {
                                    urls: [{
                                        expanded_url: "http://www.rebelmouse.com/episod/",
                                        url: "http://t.co/Lxw7upbN",
                                        indices: [0, 20],
                                        display_url: "rebelmouse.com/episod/"
                                    }]
                                },
                                description: {
                                    urls: []
                                }
                            },
                            default_profile: false,
                            url: "http://t.co/Lxw7upbN",
                            contributors_enabled: false,
                            favourites_count: 15990,
                            utc_offset: -28800,
                            profile_image_url_https: "https://si0.twimg.com/profile_images/2546730059/f6a8zq58mg1hn0ha8vie_normal.jpeg",
                            id: 819797,
                            listed_count: 340,
                            profile_use_background_image: true,
                            profile_text_color: "D20909",
                            followers_count: 7126,
                            lang: "en",
                            protected: false,
                            geo_enabled: true,
                            notifications: false,
                            description: "Reality Technician, Twitter API team, synthesizer enthusiast; a most excellent adventure in timelines. I know it's hard to believe in something you can't see.",
                            profile_background_color: "000000",
                            verified: false,
                            time_zone: "Pacific Time (US & Canada)",
                            profile_background_image_url_https: "https://si0.twimg.com/profile_background_images/643655842/hzfv12wini4q60zzrthg.png",
                            statuses_count: 18076,
                            profile_background_image_url: "http://a0.twimg.com/profile_background_images/643655842/hzfv12wini4q60zzrthg.png",
                            default_profile_image: false,
                            friends_count: 5444,
                            following: true,
                            show_all_inline_media: true,
                            screen_name: "episod"
                        },
                        in_reply_to_screen_name: null,
                        in_reply_to_status_id: null
                    },
                    {
                        coordinates: null,
                        truncated: false,
                        created_at: "Tue Aug 28 21:16:23 +0000 2012",
                        favorited: true,
                        id_str: "240558470661799936",
                        in_reply_to_user_id_str: null,
                        entities: {
                            urls: [],
                            hashtags: [],
                            user_mentions: [],
                        },
                        text: "just another test",
                        contributors: null,
                        id: 240558470661799936,
                        retweet_count: 0,
                        in_reply_to_status_id_str: null,
                        geo: null,
                        retweeted: false,
                        in_reply_to_user_id: null,
                        place: null,
                        source: "OAuth Dancer Reborn",
                        user: {
                            name: "OAuth Dancer",
                            profile_sidebar_fill_color: "DDEEF6",
                            profile_background_tile: true,
                            profile_sidebar_border_color: "C0DEED",
                            profile_image_url: "http://a0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
                            created_at: "Wed Mar 03 19:37:35 +0000 2010",
                            location: "San Francisco, CA",
                            follow_request_sent: false,
                            id_str: "119476949",
                            is_translator: false,
                            profile_link_color: "0084B4",
                            entities: {
                                url: {
                                    urls: [{
                                        expanded_url: null,
                                        url: "http://bit.ly/oauth-dancer",
                                        indices: [0, 26],
                                        display_url: null
                                    }],
                                },
                                description: null
                            },
                            default_profile: false,
                            url: "http://bit.ly/oauth-dancer",
                            contributors_enabled: false,
                            favourites_count: 7,
                            utc_offset: null,
                            profile_image_url_https: "https://si0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
                            id: 119476949,
                            listed_count: 1,
                            profile_use_background_image: true,
                            profile_text_color: "333333",
                            followers_count: 28,
                            lang: "en",
                            protected: false,
                            geo_enabled: true,
                            notifications: false,
                            description: "",
                            profile_background_color: "C0DEED",
                            verified: false,
                            time_zone: null,
                            profile_background_image_url_https: "https://si0.twimg.com/profile_background_images/80151733/oauth-dance.png",
                            statuses_count: 166,
                            profile_background_image_url: "http://a0.twimg.com/profile_background_images/80151733/oauth-dance.png",
                            default_profile_image: false,
                            friends_count: 14,
                            following: false,
                            show_all_inline_media: false,
                            screen_name: "oauth_dancer"
                        },
                        in_reply_to_screen_name: null,
                        in_reply_to_status_id: null
                    },
                    {
                        coordinates: {
                            coordinates: [-122.25831, 37.871609],
                            type: "Point"
                        },
                        truncated: false,
                        created_at: "Tue Aug 28 21:08:15 +0000 2012",
                        favorited: false,
                        id_str: "240556426106372096",
                        in_reply_to_user_id_str: null,
                        entities: {
                            urls: [{
                                expanded_url: "http://blogs.ischool.berkeley.edu/i290-abdt-s12/",
                                url: "http://t.co/bfj7zkDJ",
                                indices: [79, 99],
                                display_url: "blogs.ischool.berkeley.edu/i290-abdt-s12/"
                            }],
                            hashtags: [],
                            user_mentions: [{
                                name: "Cal",
                                id_str: "17445752",
                                id: 17445752,
                                indices: [60, 64],
                                screen_name: "Cal"
                            },
                            {
                                name: "Othman Laraki",
                                id_str: "20495814",
                                id: 20495814,
                                indices: [70, 77],
                                screen_name: "othman"
                            }
                            ],
                            media: [{
                                id: 266031293949698048,
                                id_str: "266031293949698048",
                                indices: [17, 37],
                                media_url: "https:\/\/pbs.twimg.com\/media\/DF_56VwXUAAIISB.jpg",
                                media_url_https: "https:\/\/pbs.twimg.com\/media\/A7EiDWcCYAAZT1D.jpg",
                                url: "http:\/\/t.co\/bAJE6Vom",
                                display_url: "pic.twitter.com\/bAJE6Vom",
                                expanded_url: "http:\/\/twitter.com\/BarackObama\/status\/266031293945503744\/photo\/1",
                                type: "photo",
                                sizes: {
                                    medium: {
                                        w: 600,
                                        h: 399,
                                        resize: "fit"
                                    },
                                    thumb: {
                                        w: 150,
                                        h: 150,
                                        resize: "crop"
                                    },
                                    small: {
                                        w: 340,
                                        h: 226,
                                        resize: "fit"
                                    },
                                    large: {
                                        w: 800,
                                        h: 532,
                                        resize: "fit"
                                    }
                                }
                            }]
                        },
                        text: 'lecturing at the "analyzing big data with #twitter" class at @cal with @othman  vladjs.com',
                        contributors: null,
                        id: 240556426106372096,
                        retweet_count: 3,
                        in_reply_to_status_id_str: null,
                        geo: {
                            coordinates: [37.871609, -122.25831],
                            type: "Point"
                        },
                        retweeted: false,
                        possibly_sensitive: false,
                        in_reply_to_user_id: null,
                        place: {
                            name: "Berkeley",
                            country_code: "US",
                            country: "United States",
                            attributes: {},
                            url: "http://api.twitter.com/1/geo/id/5ef5b7f391e30aff.json",
                            id: "5ef5b7f391e30aff",
                            bounding_box: {
                                coordinates: [
                                    [
                                        [-122.367781, 37.835727],
                                        [-122.234185, 37.835727],
                                        [-122.234185, 37.905824],
                                        [-122.367781, 37.905824]
                                    ]
                                ],
                                type: "Polygon"
                            },
                            full_name: "Berkeley, CA",
                            place_type: "city"
                        },
                        source: "Safari on iOS",
                        user: {
                            name: "Raffi Krikorian",
                            profile_sidebar_fill_color: "DDEEF6",
                            profile_background_tile: false,
                            profile_sidebar_border_color: "C0DEED",
                            profile_image_url: "http://a0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
                            created_at: "Sun Aug 19 14:24:06 +0000 2007",
                            location: "San Francisco, California",
                            follow_request_sent: false,
                            id_str: "8285392",
                            is_translator: false,
                            profile_link_color: "0084B4",
                            entities: {
                                url: {
                                    urls: [{
                                        expanded_url: "http://about.me/raffi.krikorian",
                                        url: "http://t.co/eNmnM6q",
                                        indices: [0, 19],
                                        display_url: "about.me/raffi.krikorian"
                                    }]
                                },
                                description: {
                                    urls: []
                                }
                            },
                            default_profile: true,
                            url: "http://t.co/eNmnM6q",
                            contributors_enabled: false,
                            favourites_count: 724,
                            utc_offset: -28800,
                            profile_image_url_https: "https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
                            id: 8285392,
                            listed_count: 619,
                            profile_use_background_image: true,
                            profile_text_color: "333333",
                            followers_count: 18752,
                            lang: "en",
                            protected: false,
                            geo_enabled: true,
                            notifications: false,
                            description: "Director of @twittereng's Platform Services. I break things.",
                            profile_background_color: "C0DEED",
                            verified: false,
                            time_zone: "Pacific Time (US & Canada)",
                            profile_background_image_url_https: "https://si0.twimg.com/images/themes/theme1/bg.png",
                            statuses_count: 5007,
                            profile_background_image_url: "http://a0.twimg.com/images/themes/theme1/bg.png",
                            default_profile_image: false,
                            friends_count: 701,
                            following: true,
                            show_all_inline_media: true,
                            screen_name: "raffi"
                        },
                        in_reply_to_screen_name: null,
                        in_reply_to_status_id: null
                    },
                    {
                        coordinates: null,
                        truncated: false,
                        created_at: "Tue Aug 28 19:59:34 +0000 2012",
                        favorited: false,
                        id_str: "240539141056638977",
                        in_reply_to_user_id_str: null,
                        entities: {
                            urls: [],
                            hashtags: [],
                            user_mentions: []
                        },
                        text: "You'd be right more often if you thought you were wrong.",
                        contributors: null,
                        id: 240539141056638977,
                        retweet_count: 1,
                        in_reply_to_status_id_str: null,
                        geo: null,
                        retweeted: false,
                        in_reply_to_user_id: null,
                        place: null,
                        source: "web",
                        user: {
                            name: "Taylor Singletary",
                            profile_sidebar_fill_color: "FBFBFB",
                            profile_background_tile: true,
                            profile_sidebar_border_color: "000000",
                            profile_image_url: "http://a0.twimg.com/profile_images/2546730059/f6a8zq58mg1hn0ha8vie_normal.jpeg",
                            created_at: "Wed Mar 07 22:23:19 +0000 2007",
                            location: "San Francisco, CA",
                            follow_request_sent: false,
                            id_str: "819797",
                            is_translator: false,
                            profile_link_color: "c71818",
                            entities: {
                                url: {
                                    urls: [{
                                        expanded_url: "http://www.rebelmouse.com/episod/",
                                        url: "http://t.co/Lxw7upbN",
                                        indices: [0, 20],
                                        display_url: "rebelmouse.com/episod/"
                                    }]
                                },
                                description: {
                                    urls: []
                                }
                            },
                            default_profile: false,
                            url: "http://t.co/Lxw7upbN",
                            contributors_enabled: false,
                            favourites_count: 15990,
                            utc_offset: -28800,
                            profile_image_url_https: "https://si0.twimg.com/profile_images/2546730059/f6a8zq58mg1hn0ha8vie_normal.jpeg",
                            id: 819797,
                            listed_count: 340,
                            profile_use_background_image: true,
                            profile_text_color: "D20909",
                            followers_count: 7126,
                            lang: "en",
                            protected: false,
                            geo_enabled: true,
                            notifications: false,
                            description: "Reality Technician, Twitter API team, synthesizer enthusiast; a most excellent adventure in timelines. I know it's hard to believe in something you can't see.",
                            profile_background_color: "000000",
                            verified: false,
                            time_zone: "Pacific Time (US & Canada)",
                            profile_background_image_url_https: "https://si0.twimg.com/profile_background_images/643655842/hzfv12wini4q60zzrthg.png",
                            statuses_count: 18076,
                            profile_background_image_url: "http://a0.twimg.com/profile_background_images/643655842/hzfv12wini4q60zzrthg.png",
                            default_profile_image: false,
                            friends_count: 5444,
                            following: true,
                            show_all_inline_media: true,
                            screen_name: "episod"
                        },
                        in_reply_to_screen_name: null,
                        in_reply_to_status_id: null
                    },
                    {
                        coordinates: null,
                        truncated: false,
                        created_at: "Tue Aug 28 21:16:23 +0000 2012",
                        favorited: false,
                        id_str: "240558470661799936",
                        in_reply_to_user_id_str: null,
                        entities: {
                            urls: [],
                            hashtags: [],
                            user_mentions: [],
                        },
                        text: "just another test",
                        contributors: null,
                        id: 240558470661799936,
                        retweet_count: 0,
                        in_reply_to_status_id_str: null,
                        geo: null,
                        retweeted: false,
                        in_reply_to_user_id: null,
                        place: null,
                        source: "OAuth Dancer Reborn",
                        user: {
                            name: "OAuth Dancer",
                            profile_sidebar_fill_color: "DDEEF6",
                            profile_background_tile: true,
                            profile_sidebar_border_color: "C0DEED",
                            profile_image_url: "http://a0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
                            created_at: "Wed Mar 03 19:37:35 +0000 2010",
                            location: "San Francisco, CA",
                            follow_request_sent: false,
                            id_str: "119476949",
                            is_translator: false,
                            profile_link_color: "0084B4",
                            entities: {
                                url: {
                                    urls: [{
                                        expanded_url: null,
                                        url: "http://bit.ly/oauth-dancer",
                                        indices: [0, 26],
                                        display_url: null
                                    }],
                                },
                                description: null
                            },
                            default_profile: false,
                            url: "http://bit.ly/oauth-dancer",
                            contributors_enabled: false,
                            favourites_count: 7,
                            utc_offset: null,
                            profile_image_url_https: "https://si0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
                            id: 119476949,
                            listed_count: 1,
                            profile_use_background_image: true,
                            profile_text_color: "333333",
                            followers_count: 28,
                            lang: "en",
                            protected: false,
                            geo_enabled: true,
                            notifications: false,
                            description: "",
                            profile_background_color: "C0DEED",
                            verified: false,
                            time_zone: null,
                            profile_background_image_url_https: "https://si0.twimg.com/profile_background_images/80151733/oauth-dance.png",
                            statuses_count: 166,
                            profile_background_image_url: "http://a0.twimg.com/profile_background_images/80151733/oauth-dance.png",
                            default_profile_image: false,
                            friends_count: 14,
                            following: false,
                            show_all_inline_media: false,
                            screen_name: "oauth_dancer"
                        },
                        in_reply_to_screen_name: null,
                        in_reply_to_status_id: null
                    },
                    {
                        coordinates: {
                            coordinates: [-122.25831, 37.871609],
                            type: "Point"
                        },
                        truncated: false,
                        created_at: "Tue Aug 28 21:08:15 +0000 2012",
                        favorited: false,
                        id_str: "240556426106372096",
                        in_reply_to_user_id_str: null,
                        entities: {
                            urls: [{
                                expanded_url: "http://blogs.ischool.berkeley.edu/i290-abdt-s12/",
                                url: "http://t.co/bfj7zkDJ",
                                indices: [79, 99],
                                display_url: "blogs.ischool.berkeley.edu/i290-abdt-s12/"
                            }],
                            hashtags: [],
                            user_mentions: [{
                                name: "Cal",
                                id_str: "17445752",
                                id: 17445752,
                                indices: [60, 64],
                                screen_name: "Cal"
                            },
                            {
                                name: "Othman Laraki",
                                id_str: "20495814",
                                id: 20495814,
                                indices: [70, 77],
                                screen_name: "othman"
                            }
                            ],
                            media: [{
                                id: 266031293949698048,
                                id_str: "266031293949698048",
                                indices: [17, 37],
                                media_url: "https:\/\/pbs.twimg.com\/media\/DF_56VwXUAAIISB.jpg",
                                media_url_https: "https:\/\/pbs.twimg.com\/media\/A7EiDWcCYAAZT1D.jpg",
                                url: "http:\/\/t.co\/bAJE6Vom",
                                display_url: "pic.twitter.com\/bAJE6Vom",
                                expanded_url: "http:\/\/twitter.com\/BarackObama\/status\/266031293945503744\/photo\/1",
                                type: "photo",
                                sizes: {
                                    medium: {
                                        w: 600,
                                        h: 399,
                                        resize: "fit"
                                    },
                                    thumb: {
                                        w: 150,
                                        h: 150,
                                        resize: "crop"
                                    },
                                    small: {
                                        w: 340,
                                        h: 226,
                                        resize: "fit"
                                    },
                                    large: {
                                        w: 800,
                                        h: 532,
                                        resize: "fit"
                                    }
                                }
                            }]
                        },
                        text: 'lecturing at the "analyzing big data with #twitter" class at @cal with @othman  vladjs.com',
                        contributors: null,
                        id: 240556426106372096,
                        retweet_count: 3,
                        in_reply_to_status_id_str: null,
                        geo: {
                            coordinates: [37.871609, -122.25831],
                            type: "Point"
                        },
                        retweeted: false,
                        possibly_sensitive: false,
                        in_reply_to_user_id: null,
                        place: {
                            name: "Berkeley",
                            country_code: "US",
                            country: "United States",
                            attributes: {},
                            url: "http://api.twitter.com/1/geo/id/5ef5b7f391e30aff.json",
                            id: "5ef5b7f391e30aff",
                            bounding_box: {
                                coordinates: [
                                    [
                                        [-122.367781, 37.835727],
                                        [-122.234185, 37.835727],
                                        [-122.234185, 37.905824],
                                        [-122.367781, 37.905824]
                                    ]
                                ],
                                type: "Polygon"
                            },
                            full_name: "Berkeley, CA",
                            place_type: "city"
                        },
                        source: "Safari on iOS",
                        user: {
                            name: "Raffi Krikorian",
                            profile_sidebar_fill_color: "DDEEF6",
                            profile_background_tile: false,
                            profile_sidebar_border_color: "C0DEED",
                            profile_image_url: "http://a0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
                            created_at: "Sun Aug 19 14:24:06 +0000 2007",
                            location: "San Francisco, California",
                            follow_request_sent: false,
                            id_str: "8285392",
                            is_translator: false,
                            profile_link_color: "0084B4",
                            entities: {
                                url: {
                                    urls: [{
                                        expanded_url: "http://about.me/raffi.krikorian",
                                        url: "http://t.co/eNmnM6q",
                                        indices: [0, 19],
                                        display_url: "about.me/raffi.krikorian"
                                    }]
                                },
                                description: {
                                    urls: []
                                }
                            },
                            default_profile: true,
                            url: "http://t.co/eNmnM6q",
                            contributors_enabled: false,
                            favourites_count: 724,
                            utc_offset: -28800,
                            profile_image_url_https: "https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
                            id: 8285392,
                            listed_count: 619,
                            profile_use_background_image: true,
                            profile_text_color: "333333",
                            followers_count: 18752,
                            lang: "en",
                            protected: false,
                            geo_enabled: true,
                            notifications: false,
                            description: "Director of @twittereng's Platform Services. I break things.",
                            profile_background_color: "C0DEED",
                            verified: false,
                            time_zone: "Pacific Time (US & Canada)",
                            profile_background_image_url_https: "https://si0.twimg.com/images/themes/theme1/bg.png",
                            statuses_count: 5007,
                            profile_background_image_url: "http://a0.twimg.com/images/themes/theme1/bg.png",
                            default_profile_image: false,
                            friends_count: 701,
                            following: true,
                            show_all_inline_media: true,
                            screen_name: "raffi"
                        },
                        in_reply_to_screen_name: null,
                        in_reply_to_status_id: null
                    },
                    {
                        coordinates: null,
                        truncated: false,
                        created_at: "Tue Aug 28 19:59:34 +0000 2012",
                        favorited: false,
                        id_str: "240539141056638977",
                        in_reply_to_user_id_str: null,
                        entities: {
                            urls: [],
                            hashtags: [],
                            user_mentions: []
                        },
                        text: "You'd be right more often if you thought you were wrong.",
                        contributors: null,
                        id: 240539141056638977,
                        retweet_count: 1,
                        in_reply_to_status_id_str: null,
                        geo: null,
                        retweeted: false,
                        in_reply_to_user_id: null,
                        place: null,
                        source: "web",
                        user: {
                            name: "Taylor Singletary",
                            profile_sidebar_fill_color: "FBFBFB",
                            profile_background_tile: true,
                            profile_sidebar_border_color: "000000",
                            profile_image_url: "http://a0.twimg.com/profile_images/2546730059/f6a8zq58mg1hn0ha8vie_normal.jpeg",
                            created_at: "Wed Mar 07 22:23:19 +0000 2007",
                            location: "San Francisco, CA",
                            follow_request_sent: false,
                            id_str: "819797",
                            is_translator: false,
                            profile_link_color: "c71818",
                            entities: {
                                url: {
                                    urls: [{
                                        expanded_url: "http://www.rebelmouse.com/episod/",
                                        url: "http://t.co/Lxw7upbN",
                                        indices: [0, 20],
                                        display_url: "rebelmouse.com/episod/"
                                    }]
                                },
                                description: {
                                    urls: []
                                }
                            },
                            default_profile: false,
                            url: "http://t.co/Lxw7upbN",
                            contributors_enabled: false,
                            favourites_count: 15990,
                            utc_offset: -28800,
                            profile_image_url_https: "https://si0.twimg.com/profile_images/2546730059/f6a8zq58mg1hn0ha8vie_normal.jpeg",
                            id: 819797,
                            listed_count: 340,
                            profile_use_background_image: true,
                            profile_text_color: "D20909",
                            followers_count: 7126,
                            lang: "en",
                            protected: false,
                            geo_enabled: true,
                            notifications: false,
                            description: "Reality Technician, Twitter API team, synthesizer enthusiast; a most excellent adventure in timelines. I know it's hard to believe in something you can't see.",
                            profile_background_color: "000000",
                            verified: false,
                            time_zone: "Pacific Time (US & Canada)",
                            profile_background_image_url_https: "https://si0.twimg.com/profile_background_images/643655842/hzfv12wini4q60zzrthg.png",
                            statuses_count: 18076,
                            profile_background_image_url: "http://a0.twimg.com/profile_background_images/643655842/hzfv12wini4q60zzrthg.png",
                            default_profile_image: false,
                            friends_count: 5444,
                            following: true,
                            show_all_inline_media: true,
                            screen_name: "episod"
                        },
                        in_reply_to_screen_name: null,
                        in_reply_to_status_id: null
                    }
                ]
            }
        })
    }, 2000)
}
