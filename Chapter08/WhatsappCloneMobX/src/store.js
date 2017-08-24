import { observable, action, computed } from 'mobx';
import { getMessages, postMessage } from './services/api';

export default class Store {
  @observable
  messages = []

  @observable
  unsubscribeFn = null;

  @action
  postMessageToServer(message){
    postMessage(message)
  }

  @action
  updateMessages(snapshot){
    this.messages = Object.values(snapshot.val());
  }

  @action
  subscribeToGetMessagesFromServer(){
    this.unsubscribeFn = getMessages(this.updateMessages.bind(this))
  }

  @action
  unSubscribeToGetMessagesFromServer(){
    this.unsubscribeFn = this.unsubscribeFn();
  }
}
