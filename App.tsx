import React from 'react';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { BaseButton } from './src/components/base-button';
import { Text, StyleSheet, ScrollView, View } from 'react-native';

export default function App() {
  
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Primary Group */}
          <View style={styles.group}>
            <Text style={styles.title}>Primary Buttons</Text>
            <View style={styles.row}>
              <BaseButton
                variant="primary"
                onPress={() => console.log('Primary clicked')}
              >
                Primary
              </BaseButton>

              <BaseButton
                variant="primary"
                onPress={() => console.log('Primary disabled')}
                disabled
              >
                Disabled
              </BaseButton>

              <BaseButton
                variant="primary"
                onPress={() => console.log('Primary selected')}
                selected
              >
                Selected
              </BaseButton>
            </View>
          </View>

          {/* Secondary Group */}
          <View style={styles.group}>
            <Text style={styles.title}>Secondary Buttons</Text>
            <View style={styles.row}>
              <BaseButton
                variant="secondary"
                onPress={() => console.log('Secondary clicked')}
                                size='large'

              >
                Secondary
              </BaseButton>
              <BaseButton variant="secondary" disabled>
                Disabled
              </BaseButton>
              <BaseButton
                variant="secondary"
                onPress={() => console.log('Primary selected')}
                selected
              >
                Selected
              </BaseButton>
            </View>
          </View>

          {/* System Group */}
          <View style={styles.group}>
            <Text style={styles.title}>System Buttons</Text>
            <View style={styles.row}>
              <BaseButton
                variant="system-approve"
                onPress={() => console.log('Approved')}
                // icon={<Text style={{ color: '#fff', fontSize: 18 }}>✓</Text>}
              >
                Approve
              </BaseButton>
               <BaseButton
                variant="system-approve"
                onPress={() => console.log('Approved')}
                selected
              >
                Selected
              </BaseButton>
              <BaseButton
  variant="system-reject"
  // icon={<Icon name="trash-2-outline" fill="#fff" width={20} height={20} />}
  iconPlacement="after"
>
  Reject
</BaseButton>
               <BaseButton
                variant="system-reject"
                onPress={() => console.log('Rejected')}
                selected
              >
                Selected
              </BaseButton>
              <BaseButton variant="system-reject" disabled>
                Disabled
              </BaseButton>
            </View>
          </View>

          {/* Tertiary & Default */}
          <View style={styles.group}>
            <Text style={styles.title}>Tertiary & Default</Text>
            <View style={styles.row}>
              <BaseButton
                variant="tertiary"
                onPress={() => console.log('More')}
              >
                More
              </BaseButton>
              <BaseButton
                variant="default"
                onPress={() => console.log('Default')}
              >
                Default
              </BaseButton>
            </View>
          </View>
        </ScrollView>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: '#F9FAFB',
  },
  group: {
    marginBottom: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#171717',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});
