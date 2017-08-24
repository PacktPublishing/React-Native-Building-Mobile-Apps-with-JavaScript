import React from 'react';
import clamp from 'clamp';
import { AppRegistry, Button, StyleSheet, Text, View, Animated, Component, PanResponder } from 'react-native';

const SWIPE_THRESHOLD = 120;

const profiles = [
  'https://lorempixel.com/300/400/',
  'https://lorempixel.com/300/400',
  'https://lorempixel.com/300/400/',
  'https://lorempixel.com/300/400/',
  'https://lorempixel.com/300/400/',
]

export default class App extends React.Component {
  state = {
    person: profiles[0],
    pan: new Animated.ValueXY(),
    scale: new Animated.Value(0.5)
  }

  componentDidMount() {
    this.scaleAnimationTrigger()
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value
        });
        this.state.pan.setValue({ x: 0, y: 0 });
      },

      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y },
      ]),

      onPanResponderRelease: (e, { vx, vy }) => {
        this.state.pan.flattenOffset();
        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
          Animated.decay(this.state.pan, {
            velocity: { x: vx, y: vy },
            deceleration: 0.98
          }).start(() => this.switchToNextProfile())
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  scaleAnimationTrigger() {
    Animated.spring(
      this.state.scale,
      { toValue: 1, friction: 7 }
    ).start();
  }

  switchToNextProfile() {
    this.resetState();
    const currentPersonId = profiles.indexOf(this.state.person);
    let nextPersonId = currentPersonId + 1;
    this.setState({
      person: profiles[nextPersonId > profiles.length - 1 ? 0 : nextPersonId]
    });
    this.scaleAnimationTrigger();
  }

  resetState() {
    this.state.pan.setValue({ x: 0, y: 0 })
    this.state.scale.setValue(0);
  }

  render() {
    const { scale, pan } = this.state;
    const [translateX, translateY] = [pan.x, pan.y]

    const rotate = pan.x.interpolate({
      inputRange: [-250, 0, 250], outputRange: ["-30deg", "0deg", "30deg"]
    });
    const opacity = pan.x.interpolate({
      inputRange: [-250, 0, 250], outputRange: [0.5, 1, 0.5]
    })
    const likeOpacity = pan.x.interpolate({
      inputRange: [0, 150], outputRange: [0, 1]
    });
    const nopeOpacity = pan.x.interpolate({
      inputRange: [-150, 0], outputRange: [1, 0]
    });
    const likeScale = pan.x.interpolate({ inputRange: [0, 150], outputRange: [0.5, 1], extrapolate: 'clamp' });

    const nopeScale = pan.x.interpolate({ inputRange: [-150, 0], outputRange: [1, 0.5], extrapolate: 'clamp' });


    let cardTransformStyle = {
      transform: [
        { translateX },
        { translateY },
        { rotate },
        { scale }
      ], opacity
    };
    let nopeTransformStyle = {
      transform: [
        { scale: nopeScale }
      ],
      opacity: nopeOpacity
    }
    let likeTransformStyle = {
      transform: [{
        scale: likeScale
      }],
      opacity: likeOpacity
    }
    return (
      <View style={styles.container}>
        <Animated.Image source={{
          uri: this.state.person
        }}
          style={[styles.card, cardTransformStyle]} {...this._panResponder.panHandlers} >
        </Animated.Image>

        <Animated.View style={[styles.nope, nopeTransformStyle]}>
          <Text style={styles.nopeText}>Nope!</Text>
        </Animated.View>
        <Animated.View style={[styles.like, likeTransformStyle]}>
          <Text style={styles.likeText}>Like!</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  card: {
    width: 300,
    height: 400
  },
  like: {
    borderColor: 'gray',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    position: 'absolute',
    padding: 10,
    bottom: 10,
    borderRadius: 5,
    right: 20,
  },
  likeText: {
    fontSize: 14,
    color: 'gray',
  },
  nope: {
    borderColor: 'gray',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    position: 'absolute',
    bottom: 10,
    padding: 10,
    borderRadius: 5,
    left: 20,
  },
  nopeText: {
    fontSize: 14,
    color: 'gray',
  }
});
