import React from "react";
import { View, WebView, Text} from "react-native";

export class WebBrowser extends React.Component {
  static navigationOptions = {
    title: "Web Browser"
  };

  render() {
    return (
        <WebView source={{ uri: this.props.navigation.state && this.props.navigation.state.params.url }}/>
    );
  }
}
