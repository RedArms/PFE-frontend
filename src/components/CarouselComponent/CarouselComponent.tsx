// CarouselComponent.tsx

import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import QuantityLine from '../QuantityLine/QuantityLine';

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  let queryResult = [
    {
      label: 'lange S',
      quantity: 42,
    },
    {
      label: 'lange M',
      quantity: 432,
    },
    {
      label: 'lange L',
      quantity: 21,
    },
  ];

  const renderItem = ({ item }: { item: any }) => {
    return <QuantityLine label={item.label} quantity={item.quantity} />;
  };

  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={queryResult}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth - 20} 
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={queryResult.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationDotInactive}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 20,
  },
  paginationContainer: {
    marginTop: -20,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#D4A866', // Active dot color
  },
  paginationDotInactive: {
    backgroundColor: '#7E7E7E', // Inactive dot color
  },
});

export default CarouselComponent;
