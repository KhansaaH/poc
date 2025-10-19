import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { BaseSelect } from '../components/base-select/base-select';

export default function SelectPage() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Select Page</Text>
      <BaseSelect
        label="Category"
        placeholder="Choose category"
        data={[
          { label: 'PPE', value: 1 },
          { label: 'Tools', value: 2 },
          { label: 'Procedures', value: 3 },
        ]}
        onChange={v => console.log('Selected:', v)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#F5F7FA' },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    color: '#171717',
  },
});
