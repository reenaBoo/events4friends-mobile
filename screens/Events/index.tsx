import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import DataContext from '../../context/DataContext';
import EventsListItem from '../../components/EventsListItem';

interface EventsScreenParams {
  navigation: any;
}

export default function EventsScreen(props: EventsScreenParams) {
  const { navigation } = props;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Выберите мероприятие</Text>
        </View>
        <DataContext.Consumer>
          {({ events }) => {
            return events.map((event: any) => {
              return (
                <EventsListItem
                  key={event.id}
                  event={event}
                  onPress={() => {
                    navigation.navigate('EventSingleScreen', { event });
                  }}
                />
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
    marginBottom: 30,
  },
  titleContainer: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#404040',
  },
});
