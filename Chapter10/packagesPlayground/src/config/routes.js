import Home from '../screens/Home';
import Shoutem from '../screens/Shoutem';
import NativeBase from '../screens/NativeBase';
import RNMaps from '../screens/RNMaps';
import ImagePicker from '../screens/ImagePicker';
import RNCamera from '../screens/RNCamera';
import Video from '../screens/Video';
import Toasts from '../screens/Toasts';
import RNPN from '../screens/RNPN';

const routes = {
    home: { screen: Home },
    shoutem: { screen: Shoutem },
    nativeBase: { screen: NativeBase },
    maps: { screen: RNMaps },
    imagepicker: { screen: ImagePicker },
    camera: { screen: RNCamera },
    video: { screen: Video },
    toasts: { screen: Toasts },
    pn: { screen: RNPN }
    // i18n: { screens: I18nScreen }

}

export default routes;
