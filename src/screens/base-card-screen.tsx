import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import { BaseCard } from '../components/base-card/base-card';
import { BaseCardHeader } from '../components/base-card/header/base-card-header';
import { BaseButton } from '../components/base-button/base-button';

export default function AllCardsDemo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.pageTitle}>All BaseCard Templates</Text>

      {/*  Default Text Card (solid-bg) */}
      
      <BaseCard
        elevation="solid-bg"
        background="white"
        header={<BaseCardHeader cardTitle="Default Text Card" />}
        footer={<BaseButton variant="primary">Action</BaseButton>}
      >
        <Text style={styles.text}>
          Simple card with title, body, and footer.
        </Text>
      </BaseCard>

      <Image source={require('../images/image.jpg')} />

      {/* 2️ Image Card with Overlay */}

      <BaseCard
        image={require('../images/image.jpg')}
        overlayColor="rgba(0,0,0,0.25)"
        elevation="image-bg"
        background="white"
        header={<BaseCardHeader cardTitle="Meta Week 2025" />}
        footer={<BaseButton variant="primary">Learn More</BaseButton>}
      >
        <Text style={{ color: '#333' }}>Abu Dhabi | March 2025</Text>
      </BaseCard>

      {/*  Modal-Style Card */}
      <BaseCard
        elevation="modal"
        background="white"
        header={<BaseCardHeader cardTitle="Modal Card" />}
        footer={<BaseButton variant="primary">Confirm</BaseButton>}
      >
        <Text style={styles.text}>
          Modal-style card — used for dialogs and popups.
        </Text>
        <Text style={styles.subText}>
          Highest shadow depth for focus and hierarchy.
        </Text>
      </BaseCard>

      {/* Toast Message Card */}
      <BaseCard
        elevation="toast-msg"
        background="white"
        header={<BaseCardHeader cardTitle="Toast Notification" />}
        footer={<BaseButton variant="secondary">Dismiss</BaseButton>}
      >
        <Text style={styles.text}>This is a high-contrast alert card.</Text>
        <Text style={styles.subText}>Appears briefly on screen.</Text>
      </BaseCard>

      {/*  Nav Bar Card */}
      <BaseCard
        elevation="nav-bar"
        background="white"
        header={<BaseCardHeader cardTitle="Navigation Card" />}
        footer={<BaseButton variant="primary">Open Menu</BaseButton>}
      >
        <Text style={styles.text}>
          Used for toolbars or floating navigation bars.
        </Text>
        <Text style={styles.subText}>Very light shadow, subtle elevation.</Text>
      </BaseCard>

      {/*  Flat / No Shadow Card */}
      <BaseCard
        elevation="no-shadow"
        background="light-grey"
        header={<BaseCardHeader cardTitle="Flat Card" />}
        footer={<BaseButton variant="secondary">Done</BaseButton>}
      >
        <Text style={styles.text}>Flat layout, no shadow.</Text>
        <Text style={styles.subText}>
          Great for inline grouping or dashboard sections.
        </Text>
      </BaseCard>
    </ScrollView>
  );
}

/* ===================== Styles ===================== */
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    gap: 24,
    backgroundColor: '#F5F7FA',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
    marginBottom: 2,
  },
  subText: {
    fontSize: 14,
    color: '#667593',
  },
});
