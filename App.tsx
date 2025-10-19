import React from 'react';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
  Card,
  InputProps,
  Input,
  Select,
  SelectItem,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BaseButton } from './src/components/base-button/base-button';
import { MyCustomIconsPack, AppIcon } from './src/icons/base-icon';
import { BaseSelect } from './src/components/base-select/base-select';
import BaseInput from './src/components/base-input/base-input';
const useInputState = (initialValue = ''): InputProps => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};
export default function App() {
  return (
    <>
      <IconRegistry icons={[EvaIconsPack, MyCustomIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <ScrollView contentContainerStyle={{ gap: 24, padding: 16 }}>
          <BaseInput placeholder="Default input" size="medium" />

          <BaseInput
          label='Label'
            placeholder="Hover / Focused"
            size="large"
            status="hover"
          />

          <BaseInput
            placeholder="Error input"
            size="large"
            status="error"
          label='Label'
          />

          <BaseInput
            placeholder="selected input"
            size="large"
            status="selected"
                      label='Label'

          />
          <BaseInput
            placeholder="filled-in input"
            size="large"
            status="filled-in"
                      label='Label'

          />
          <BaseInput
            placeholder="disabled input"
            size="large"
            status="disabled"
          label='Label'
          />
          <BaseInput
            placeholder="success input"
            size="large"
            status="success"
          label='Label'
          />
        </ScrollView>
      </ApplicationProvider>
    </>
  );
}
