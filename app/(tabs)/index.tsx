import { Image, StyleSheet, Platform } from 'react-native';

import QuestionComponent from '../../components/QuestionComponent';
import { View, Button } from 'react-native';
import React, { useState } from 'react';
import { questions, Question } from '../../hooks/useQuestion';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <QuestionComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
