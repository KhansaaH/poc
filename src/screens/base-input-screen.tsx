import React from 'react';
import { ScrollView } from 'react-native';
import BaseInput from '../components/base-input/base-input';
import { AppIcon } from '../icons/base-icon';

export default function InputPage() {
  return (
    <ScrollView contentContainerStyle={{ gap: 24, padding: 16 }}>
      <BaseInput
        label="Label"
        placeholder="Default input"
        size="medium"
        status="default"
        accessoryLeft={<AppIcon name="Search" />}
      />

      <BaseInput
        label="Label"
        placeholder="Hover / Focused"
        size="large"
        status="hover"
      />

      <BaseInput
        placeholder="Error input"
        size="large"
        status="error"
        label="Label"
        accessoryLeft={<AppIcon name="Search" />}
      />

      <BaseInput
        placeholder="selected input"
        size="large"
        status="selected"
        label="Label"
      />
      <BaseInput
        placeholder="filled-in input"
        size="large"
        status="filled-in"
        label="Label"
      />
      <BaseInput
        placeholder="disabled input"
        size="large"
        status="disabled"
        label="Label"
      />
      <BaseInput
        placeholder="success input"
        size="large"
        status="success"
        label="Label"
      />
    </ScrollView>
  );
}
