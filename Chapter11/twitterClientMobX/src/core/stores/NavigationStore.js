import { AppNavigator } from '../AppNavigator';
import { observable, action } from 'mobx';
import { NavigationActions } from 'react-navigation';

class NavigationStore {
    @observable.ref navigationState = AppNavigator
        .router
        .getStateForAction(NavigationActions.init({}))

    @action dispatch = (action, stackNavState = true) => {
        const previousNavState = stackNavState ? this.navigationState : null;
        return this.navigationState = AppNavigator
            .router
            .getStateForAction(action, previousNavState);
    }
        
}

export const navStore = new NavigationStore();