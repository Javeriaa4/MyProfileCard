import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileCard from '../../components/ProfileCard';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ProfileCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
});