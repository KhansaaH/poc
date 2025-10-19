import React from 'react';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
  Card,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MyCustomIconsPack, AppIcon } from '../../icons/base-icon';
import { BaseButton } from './base-button';


export default function App() {
  return (
    <>
      <IconRegistry icons={[EvaIconsPack, MyCustomIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* 🔹 PRIMARY BUTTONS */}
          <ButtonSection title="Primary Buttons">
            <ButtonGroup label="Default State">
              <BaseButton variant="primary">Label</BaseButton>
              <BaseButton
                variant="primary"
                icon={
                  <AppIcon
                    pack="custom"
                    name="ApproveFill"
                    fill={'white'}
                    style={{ marginRight: 6 }}
                  />
                }
              >
                With Icon
              </BaseButton>
            </ButtonGroup>

            <ButtonGroup label="Selected / Disabled">
              <BaseButton variant="primary" selected>
                Selected
              </BaseButton>
              <BaseButton variant="primary" disabled>
                Disabled
              </BaseButton>
            </ButtonGroup>
          </ButtonSection>

          {/* 🔹 SECONDARY BUTTONS */}
          <ButtonSection title="Secondary Buttons">
            <ButtonGroup label="Default">
              <BaseButton variant="secondary">Default</BaseButton>
              <BaseButton variant="secondary" selected>
                Selected
              </BaseButton>
              <BaseButton variant="secondary" disabled>
                Disabled
              </BaseButton>
            </ButtonGroup>
          </ButtonSection>

          {/* 🔹 SYSTEM BUTTONS */}
          <ButtonSection title="System Buttons">
            <ButtonGroup label="Approve / Reject">
              <BaseButton variant="system-approve">Approve</BaseButton>
              <BaseButton
                variant="system-approve"
                icon={
                  <AppIcon
                    pack="custom"
                    name="Approve"
                    fill={'#006B29'}
                    style={{ marginRight: 6 }}
                  />
                }
              >
                Approve
              </BaseButton>
              <BaseButton variant="system-approve" selected>
                Selected
              </BaseButton>
              <BaseButton variant="system-reject">Reject</BaseButton>
         
                <BaseButton variant="system-reject"  icon={
                  <AppIcon
                    pack="custom"
                    name="Delete"
                    style={{ marginRight: 6 }}
                  />
                }>Reject</BaseButton>
              <BaseButton variant="system-reject" selected>
                Selected
              </BaseButton>
              <BaseButton variant="system-reject" disabled>
                Disabled
              </BaseButton>
            </ButtonGroup>
          </ButtonSection>

          {/* 🔹 TERTIARY BUTTONS */}
          <ButtonSection title="Tertiary Buttons">
            <ButtonGroup>
              <BaseButton variant="tertiary">Label</BaseButton>
                 <BaseButton variant="tertiary"   icon={
                                <AppIcon
                                  pack="custom"
                                  name="ArrowDown"
                                  style={{ marginRight: 6 }}
                                />
                              }>Label</BaseButton>
              
              <BaseButton variant="default">Default</BaseButton>
            </ButtonGroup>
          </ButtonSection>
        </ScrollView>
      </ApplicationProvider>
    </>
  );
}

/* =============== PRESENTATION HELPERS =============== */

const ButtonSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Card style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    {children}
  </Card>
);

const ButtonGroup = ({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) => (
  <View style={styles.group}>
    {label && <Text style={styles.groupLabel}>{label}</Text>}
    <View style={styles.row}>{children}</View>
  </View>
);

/* =============== STYLES =============== */

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#F5F7FA',
  },
  card: {
    marginBottom: 24,
    borderRadius: 16,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  group: {
    marginBottom: 16,
  },
  groupLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});
