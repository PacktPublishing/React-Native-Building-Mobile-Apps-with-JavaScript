import OAuthManager from 'react-native-oauth';

const manager = new OAuthManager('learningreactnative')

manager.configure({
    twitter: {
        consumer_key: 'D9yghl9oXOcbgc6cD1fk6VmLk',
        consumer_secret: '94dTnQTnSDs7at5ygsQwsfcQX5JwnOAu7GR2sVyE5FnWFNwgfH'
    }
})

export {
    manager
}