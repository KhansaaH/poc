import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IBaseCardHeader } from './base-card-header-model';

export const BaseCardHeader: React.FC<IBaseCardHeader> = ({
  cardTitle,
  rightSection,
  titleStyle,
  headerStyle,
}) => (
  <View style={[styles.header, headerStyle]}>
    <Text style={[styles.title, titleStyle]}>{cardTitle}</Text>
    {rightSection}
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E7EBEF',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
});
