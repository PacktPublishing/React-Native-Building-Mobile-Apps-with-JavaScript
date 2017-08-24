/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  ListView,
  FlatList,
  SectionList,
  ActivityIndicator,
  WebView,
  Slider,
  Switch,
  TextInput,
  Picker,
  SegmentedControlIOS
} from 'react-native';

//-------------------- Acessibility ------------------

export default class ComponentPlayground extends Component {
  render() {
    return (
      <View accessible style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text>
          To get started, edit index.ios.js
        </Text>
        <Text>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

//--------------------Text elipsize ------------------

// export default class ComponentPlayground extends Component {
//     render() {
//     return (
//       <View accessible style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions} selectable numberOfLines={1}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }


//--------------------Status Bar ------------------



// export default class ComponentPlayground extends Component {
//   render() {
//     return (
//       <View style={[styles.container, styles.blackBg]}>
//         <StatusBar animated barStyle="light-content" />
//         <Text style={[styles.welcome, styles.whiteFont]}>
//           Welcome to React Native!
//         </Text>
//       </View>
//     );
//   }
// }


//-------------------- Images and media------------------


// export default class ComponentPlayground extends Component {
//   render() {
//     return (
//       <View style={[styles.container, styles.blackBg]}>
//         <StatusBar animated barStyle="light-content" />
//         <Text style={[styles.welcome, styles.whiteFont]}>Welcome to React Native!</Text>
//         <Image style={styles.logo} resizeMode="contain"
//           source={{
//             uri: 'https://facebook.github.io/react-native/img/header_logo.png'
//           }}
//         />
//       </View> 
//     );
//   }
// }

//-------------------- Button ------------------

// export default class ComponentPlayground extends Component {

//   state = {
//     showInstructions: false
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         {
//           this.state.showInstructions && 
//           <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
//         }
//         <Button onPress={() =>
//           this.setState({ showInstructions: true })}
//           title="Show Instructions" />
//       </View>            
//     );
//   }
// }

//-------------------- ActivityIndicator ------------------

// export default class ComponentPlayground extends Component {

//   constructor(props) {
//     super(props);
//     this.showInstructions = this.showInstructions.bind(this);
//   }


//   state = {
//     showInstructions: false,
//     loading: false
//   } 

//   showInstructions() {
//     this.setState({
//       loading: true
//     });
//     setTimeout(() => {
//       this.setState({
//         showInstructions: true,
//         loading: false
//       })
//     }, 5000)
//   } 

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         {
//           this.state.loading &&
//             <ActivityIndicator color="blue" size="small" animating />
//         }
//         {this.state.showInstructions ?
//           <Text style={styles.instructions}>
//             To get started, 
//             edit index.ios.js
//            </Text> :
//           <TouchableOpacity onPress={this.showInstructions}>
//             <Text>Show Instructions</Text>
//           </TouchableOpacity>
//         }
//       </View>       
//     );
//   }
// }

// -------------------- ListView ------------------

// const LISTVIEW_PROPS = ['dataSource','enableEmptySections','initialListSize', 'onChangeVisibleRows', 'onEndReached', 'onEndReachedThreshold', 'pageSize', 'removeClippedSubviews', 'renderFooter', 'renderHeader', 'renderRow', 'renderScrollComponent', 'renderSectionHeader', 'renderSeparator', 'scrollRenderAheadDistance', 'stickyHeaderIndices(ios)', 'stickySectionHeadersEnabled(ios)']

// export default class ComponentPlayground extends Component {

//   constructor(props) {
//     super(props);
//     this.ds = new ListView.DataSource({
//       rowHasChanged: (r1, r2) => r1
//         !== r2
//     })
//     this.state = {
//       dataSource: this.ds.cloneWithRows([])
//     };
//     this.showList = this.showList.bind(this);
//   } 

//   showList() {
//     this.setState({
//       loading: true
//     });
//     setTimeout(() => {
//       this.setState({
//         showList: true,
//         loading: false,
//         dataSource: this.ds.cloneWithRows(LISTVIEW_PROPS)
//       })
//     }, 5000)
//   } 

//   getListView() {
//     return [
//       <Text key="listView props title">ListView Props</Text>,
//       <ListView key="listView"
//         style={styles.listView}
//         dataSource={this.state.dataSource}
//         renderRow={(rowData) => <View style={styles.listRow}>
//           <Text>{rowData}</Text></View>}
//       />
//     ]
//   } 
  

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         {this.state.showList ?
//           this.getListView()
//           :
//           this.state.loading ?
//             <ActivityIndicator color="black" size="small" animating /> :
//             <Button color="black" title="Show ListView props"
//               onPress={this.showList} />
//         }
//       </View> 
//     );
//   }
// }

// -------------------- FlatList ------------------

// export default class ComponentPlayground extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       flatListProps: [
//         {
//           title: 'ItemSeparatorComponent',
//           description: 'Rendered in between each item, but not at the top or bottom'
//         },
//         {
//           title: 'ListFooterComponent',
//           description: 'rendered at the bottom of all items'
//         },
//         {
//           title: 'ListHeaderComponent',
//           description: 'rendered at the top of all the items'
//         },
//         {
//           title: 'columnWrapperStyle',
//           description: 'Optional custom style for multi-item rows generated when numColumns > 1'
//         },
//         {
//           title: 'data',
//           description: 'plain array of data'
//         },
//         {
//           title: 'getItemLayout',
//           description: 'let us skip measurement of dynamic content if you know height of items'
//         },
//         {
//           title: 'horizontal',
//           description: 'if true, renders items horizontally'
//         }, 
//         {
//           title: 'keyExtractor',
//           description: 'Used to extract unique key for item and index. Used for caching and reordering. Defaults to item.key'
//         }
//       ]
//     };
//     this.showList = this.showList.bind(this);
//   } 

//   showList() {
//     this.setState({
//       loading: true
//     });
//     setTimeout(() => {
//       this.setState({
//         showList: true,
//         loading: false
//       })
//     }, 5000)
//   } 

//   getFlatList() {
//     return (
//       <FlatList key="listView"
//         style={styles.flatList}
//         data={this.state.flatListProps}
//         ListHeaderComponent={() => (
//           <Text style={styles.header} key="FlatList props">FlatList Props</Text> 
//         )}
//         keyExtractor = {(item, index) => (`${item}--${index}`)} 
//         renderItem = {({ item, index }) => 
//           <View style={styles.flatlistRow}>
//               <View style={styles.rowHeader}>
//                 <Text>{item.title}</Text>
//               </View>
//               <View>
//                 <Text style={styles.description}>{item.description}</Text>
//               </View>
//           </View> 
//         } /> 
//     )
//   }


//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         {this.state.showList ?
//           this.getFlatList()
//           :
//           this.state.loading ?
//             <ActivityIndicator color="black" size="small" animating /> :
//             <Button color="black" title="Show FlatList props"
//               onPress={this.showList} />
//         }
//       </View> 
//     );
//   }
// }

// -------------------- Embeding Web Content ------------------

// export default class ComponentPlayground extends Component {
//   render() {
//     return (
//       <View style={styles.webViewContainer}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <WebView style={styles.webView}
//           scalesPageToFit
//           automaticallyAdjustContentInsets
//           source={{
//             uri:
//             'https://facebook.github.io/react-native/docs/webview.html'
//           }} />
//       </View>
//     );
//   }
// }


// -------------------- TextInput Picker Switch Slider ------------------


// export default class ComponentPlayground extends Component {


//   state = {
//     text: ''
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <View>
//           <Text>Enter Text:</Text>
//           <TextInput
//             style={styles.textInput}
//             onChangeText={(text) => this.setState({ text })}
//             value={this.state.text}
//           />
//         </View>   
//         <View>
//           <Text>{this.state.sliderValue}</Text>
//           <Slider
//             step={1}
//             style={styles.controlWidth}
//             value={this.state.sliderValue}
//             maximumValue={100}
//             onValueChange={(sliderValue) => this.setState({ sliderValue })} />
//         </View>
//         <View style={styles.withMargin}>
//           <Text>Have you got it?</Text>
//           <Switch
//             value={this.state.gotIt}
//             onValueChange={(value) => this.setState({
//               gotIt:
//               !this.state.gotIt
//             })}
//           />
//         </View>  
//         <View>
//           <Text>Pick your framework</Text>
//           <Picker style={styles.controlWidth}
//             selectedValue={this.state.framework}
//             onValueChange={(framework) => this.setState({ framework })}>
//             <Picker.Item label='React Native' value='Awesome' />
//             <Picker.Item label='Other' value='undefined' />
//           </Picker>
//         </View> 
//       </View> 
//     );
//   }
// }

// -------------------- Embeding Web Content ------------------

// export default class ComponentPlayground extends Component {

//   state = {
//     segmentSelectedIndex: 0
//   }

//   render() {
//     return (
//       <View style={styles.webViewContainer}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <SegmentedControlIOS values={['First', 'Second']}
//           selectedIndex={this.state.segmentSelectedIndex}
//           onChange={(event) =>
//             this.setState({
//               segmentSelectedIndex:
//               event.nativeEvent.selectedSegmentIndex
//             })}
//         /> 
//       </View>
//     );
//   }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    width: 150,
    marginBottom: 5,
  },
  blackBg: { backgroundColor: 'black' },
  whiteFont: { color: 'white' },
  logo: {
    width: 50,
    height: 50
  },
  header: {
    backgroundColor: 'gray',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 30
  },
  listView: {
    flex: 1,
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    padding: 20
  },
  flatList: {
    flex: 1
  },
  flatlistRow: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10
  },
  rowHeader: {
    marginTop: 10,
    borderBottomWidth: 2,
    borderColor: 'gray',
    alignItems: 'center',
    padding: 5
  },
  listRow: {
    flex: 1,
    justifyContent: 'center',
    height: 30,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray'
  },
  textInput: {
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.2)"
  },
  controlWidth: {
    width: 100
  },
  webViewContainer: {
    flex: 1
  }
});



AppRegistry.registerComponent('componentPlayground', () => ComponentPlayground);
