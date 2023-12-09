import React from 'react';
import { View, Button, Linking } from 'react-native';

const OpenMapButton = () => {
  const openGoogleMap = () => {
    // Replace the latitude and longitude with the coordinates you want to open on the map
    const latitude = 37.7749;
    const longitude = -122.4194;
    const label = 'Custom Location Label';

    // Create a URL with the specified coordinates and label
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&label=${label}`;

    // Open the URL in the default map application
    Linking.openURL(mapUrl);
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Open Google Maps" onPress={openGoogleMap} />
    </View>
  );
};

export default OpenMapButton;
