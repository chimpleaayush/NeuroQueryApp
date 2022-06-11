import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Color} from '../../asset';

const Queries = ({isStudent = false, queries = []}) => {
  const Query = ({item, index}) => {
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
            width: '80%',
          }}>
          <Text>title</Text>
          <Text ellipsizeMode="tail" numberOfLines={2}>
            descriptionkjjhhhhhhhhhhhhhhhhhhhhhhgbkhbghbghjbghjbgjbgjbgjbggjbhjbgjbjgbjhgbjbg
          </Text>
        </View>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-end'}}>
          <Text>time stamp</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        renderItem={Query}
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
export default Queries;
