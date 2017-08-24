import { observable, action } from 'mobx';
import { manager } from '../oauth';

class FeedStore {
    @observable data = [];

    @action 
    setData(data){
        this.data = data;
    }

    @action getFeedData({ endpoint, params }){
        manager.makeRequest('twitter', `https://api.twitter.com/1.1/${endpoint}.json`, {
            params
        }).then(resp => {
            console.log(resp.data);
            this.setData(resp.data.statuses || resp.data)
        }).catch(error => {
            console.log(error)
        })
    }

    @action postTweet(text, closeModalCallback){
        closeModalCallback();
        setTimeout(() => {
        },2000)
    }
}

export const feedStore = new FeedStore();