import React, { useRef } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';

const DEVICE_WIDTH = Dimensions.get("window").width;

class ImageCarousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.interval = null;
    this.state = {
      selectedIndex: 0
    }
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1
              ? 0
              : prev.selectedIndex + 1
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: DEVICE_WIDTH * this.state.selectedIndex,
            y: 0
          });
        }
      );
    }, 3000);
  };

  componentWillUnmount = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ selectedIndex });
  };


  render() {
    const { images } = this.props;
    const { selectedIndex } = this.state;

    return (
      <View style={{ width: '100%', height: 200 }}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.selectedIndex}
          ref={this.scrollRef}
        >
          {images.map(image => (
            <Image
              key={image}
              source={{ uri: image }}
              style={styles.image}
            />
          ))}
        </ScrollView>

        <View style={styles.circlesContainer}>
          {images.map((image, i) => (
            <View
              key={image}
              style={[styles.circle, { opacity: (i === selectedIndex ? 0.5 : 1) }]}
            />
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: DEVICE_WIDTH,
    height: 200
  },
  circlesContainer: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    height: 10,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: 'white'
  }
});

export default ImageCarousel;