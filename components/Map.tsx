import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('pk.eyJ1Ijoia2FpaHVlYm5lciIsImEiOiJjbDA4cHl4ajIwNXU3M2p0YW5qNHQ4aXRoIn0');

export default function Map() {
  const [mapStyle, setMapStyle] = useState(Mapbox.StyleURL.Street);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} styleURL={mapStyle}>
          <Mapbox.Camera zoomLevel={13} centerCoordinate={[-73.970895, 40.723279]} />
        </Mapbox.MapView>

        {/* Layer Control UI */}
        <View style={styles.layerControl}>
          <TouchableOpacity 
            style={[styles.button, mapStyle === Mapbox.StyleURL.Street && styles.activeButton]}
            onPress={() => setMapStyle(Mapbox.StyleURL.Street)}
          >
            <Text style={styles.buttonText}>Street</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, mapStyle === Mapbox.StyleURL.Satellite && styles.activeButton]}
            onPress={() => setMapStyle(Mapbox.StyleURL.Satellite)}
          >
            <Text style={styles.buttonText}>Satellite</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
  layerControl: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#333',
  },
});

