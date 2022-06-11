import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Color} from '../../asset';

const Tickets = ({isStudent = false, tickets = []}) => {
  const Ticket = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Color.bgWhite,
          paddingVertical: 5,
          paddingHorizontal: 5,
          borderRadius: 5,
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            width: '70%',
          }}>
          <Text>Ticket No. 1234</Text>
          <Text ellipsizeMode="tail" numberOfLines={2}>
            descriptionkjjhh
          </Text>
        </View>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-end'}}>
          <Text>Status: Pending</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        renderItem={Ticket}
        ItemSeparatorComponent={() => (
          <View style={{backgroundColor: 'transparent', height: 2}} />
        )}
        keyExtractor={({item, index}) => index + ''}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
export default Tickets;
