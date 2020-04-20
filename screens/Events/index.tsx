import React from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import DataContext from '../../context/DataContext';

const { width } = Dimensions.get('screen');

const FIGMA_WIDTH = 375;

interface EventsScreenParams {
  navigation: any;
}

export default function EventsScreen(props: EventsScreenParams) {
  const { navigation } = props;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <DataContext.Consumer>
          {({ events }) => {
            return events.map((event: any) => {
              return (
                <View key={event.id} style={styles.listItemContainer}>
                  <View style={styles.summaryWrap}>
                    <Text style={styles.summary} numberOfLines={1}>
                      {event.summary}
                    </Text>
                  </View>
                  <View style={styles.hr} />
                  <Image
                    style={styles.eventListItemWave}
                    source={require('../../assets/img/event_list_item_wave_x4.png')}
                  />
                </View>
              );
            });
          }}
        </DataContext.Consumer>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //
  // TODO: move to component
  //
  listItemContainer: {
    width: 300,
    height: 200,
    borderRadius: 9,
    marginTop: 16,
    backgroundColor: 'white',

    shadowColor: '#444',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  summaryWrap: {
    height: 40,
    paddingTop: 11,
    paddingHorizontal: 13,
  },
  summary: {
    fontSize: 18,
    color: '#404040',
    fontWeight: 'bold',
  },
  hr: {
    width: 282,
    height: 2,
    backgroundColor: '#EC7B28',
    marginHorizontal: 9,
  },
  eventListItemWave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width * (300 / FIGMA_WIDTH),
    height: width * (32 / FIGMA_WIDTH),
  },
});
