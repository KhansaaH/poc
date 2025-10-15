import React from 'react';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Button,
  Text,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import customMapping from './src/theme/button-mapping.json';
const customTheme = {
  ...eva.light,
  '--transparent': 'transparent',
  // Primary
  '--buttons-primary-default': '#205cdf',
  '--buttons-primary-hover': '#1846aa',
  '--buttons-primary-selected': '#113278',
  '--buttons-primary-disabled': '#a6bef2',
  '--buttons-on-primary-default': '#ffffff',
  '--buttons-on-primary-hover': '#ffffff',
  '--buttons-on-primary-selected': '#ffffff',
  '--buttons-on-primary-disabled': '#ffffff',
  // Secondary
  '--buttons-secondary-default': '#ecf5ff',
  '--buttons-secondary-hover': '#2994ff',
  '--buttons-secondary-selected': '#205cdf',
  '--buttons-secondary-disabled': '#f2f8ff',
  '--buttons-on-secondary-default': '#0047ba',
  '--buttons-on-secondary-hover': '#ffffff',
  '--buttons-on-secondary-selected': '#ffffff',
  '--buttons-on-secondary-disabled': '#a1bbf2',
  // System Approve
  '--buttons-system-approve-default': '#f0f7e7',
  '--buttons-system-approve-hover': '#008031',
  '--buttons-system-approve-selected': '#006b29',
  '--buttons-system-approve-disabled': '#f5f9ee',
  '--buttons-on-system-approve-default': '#006125',
  '--buttons-on-system-approve-hover': '#ffffff',
  '--buttons-on-system-approve-selected': '#ffffff',
  '--buttons-on-system-approve-disabled': '#99d5b0',
  // System Reject
  '--buttons-system-reject-default': '#fff1f1',
  '--buttons-system-reject-hover': '#ea0000',
  '--buttons-system-reject-selected': '#db0000',
  '--buttons-system-reject-disabled': '#fff5f5',
  '--buttons-on-system-reject-default': '#a80000',
  '--buttons-on-system-reject-hover': '#ffffff',
  '--buttons-on-system-reject-selected': '#ffffff',
  '--buttons-on-system-reject-disabled': '#f79999',
  // Meera (optional, if used later)
  '--buttons-meera-primary-default': '#753bbd',
  '--buttons-meera-primary-hover': '#5b2e94',
  '--buttons-meera-primary-selected': '#5c068c',
  '--buttons-meera-primary-disabled': '#d6c4eb',
  '--buttons-on-meera-primary-default': '#ffffff',
  '--buttons-on-meera-primary-hover': '#ffffff',
  '--buttons-on-meera-primary-selected': '#ffffff',
  '--buttons-on-meera-primary-disabled': '#ffffff',
  '--buttons-meera-secondary-default': '#f1ebf8',
  '--buttons-meera-secondary-hover': '#753bbd',
  '--buttons-meera-secondary-selected': '#5b2e94',
  '--buttons-meera-secondary-disabled': '#fbf9ff',
  '--buttons-on-meera-secondary-default': '#5c068c',
  '--buttons-on-meera-secondary-hover': '#ffffff',
  '--buttons-on-meera-secondary-selected': '#ffffff',
  '--buttons-on-meera-secondary-disabled': '#ac89d7',
  // Neutral tokens used by default/white examples if needed
  '--neutral-light-grey-components': '#f5f7f9',
  '--neutral-white-bg': '#ffffff',
  '--neutral-dark-white': '#c2c8d4',
  '--neutral-divider-strong': '#d7dee5',
  '--typography-headings': '#455664',
  '--typography-body': '#667593',
  // Meera text color for tertiary example
  '--secondary-purple-heart-purple-heart-40': '#753bbd',
};

export default function App() {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
      padding: 24,
    },
    row: { flexDirection: 'row', gap: 12 },
    button: {
      minWidth: 100,
      minHeight: 40,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
    },
    section: { width: '100%', gap: 12 },
    heading: { marginBottom: 8 },
  });
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={customTheme}
        customMapping={customMapping}
      >
        <Layout style={styles.screen}>
          <Text style={styles.heading} category="h5">
            Primary Buttons
          </Text>
          <Layout style={styles.section}>
            <Layout style={styles.row}>
              <Button style={styles.button} appearance="hover" status="primary">
                Label
              </Button>
              <Button
                style={styles.button}
                appearance="filled"
                status="default"
              >
                Label
              </Button>
              <Button
                style={styles.button}
                appearance="filled"
                status="primary"
                disabled
              >
                Label
              </Button>
            </Layout>
          </Layout>

          <Text style={styles.heading} category="h5">
            Secondary Buttons
          </Text>
          <Layout style={styles.section}>
            <Layout style={styles.row}>
              <Button
                style={styles.button}
                appearance="outline"
                status="selected"
              >
                Label
              </Button>
              <Button
                style={styles.button}
                appearance="outline"
                status="primary"
                disabled
              >
                Label
              </Button>
            </Layout>
          </Layout>

          <Text style={styles.heading} category="h5">
            System Buttons
          </Text>
          <Layout style={styles.section}>
            <Layout style={styles.row}>
              <Button
                style={styles.button}
                appearance="filled"
                status="success"
              >
                Approve
              </Button>
              <Button style={styles.button} appearance="filled" status="danger">
                Reject
              </Button>
            </Layout>
            <Layout style={styles.row}>
              <Button
                style={styles.button}
                appearance="filled"
                status="success"
                disabled
              >
                Approve
              </Button>
              <Button
                style={styles.button}
                appearance="filled"
                status="danger"
                disabled
              >
                Reject
              </Button>
            </Layout>
          </Layout>

          <Text style={styles.heading} category="h5">
            Tertiary Buttons
          </Text>
          <Layout style={styles.section}>
            <Layout style={styles.row}>
              <Button style={styles.button} appearance="ghost" status="primary">
                Label
              </Button>
              <Button
                style={styles.button}
                appearance="ghost"
                status="primary"
                disabled
              >
                Label
              </Button>
            </Layout>
          </Layout>
        </Layout>
      </ApplicationProvider>
    </>
  );
}
