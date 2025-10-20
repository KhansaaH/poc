import React from 'react';
import { Text } from 'react-native';
import { BaseCard } from '../components/base-card/base-card';
import { BaseButton } from '../components/base-button/base-button';
import { BaseCardHeader } from '../components/base-card/header/base-card-header';

export default function CardDemo() {
  return (
    <BaseCard
      elevation="solid-bg"
      background="white"
      header={<BaseCardHeader cardTitle="User Info" />}
      footer={<BaseButton variant="primary">View Details</BaseButton>}
    >
      <Text>Name: Khansaa Hassan</Text>
      <Text>Role: Developer</Text>
    </BaseCard>
  );
}
