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
import { MyCustomIconsPack } from '../../icons/base-icon';
import { BaseSelect } from './base-select';

export default function App() {
  return (
       <>
         <IconRegistry icons={[EvaIconsPack, MyCustomIconsPack]} />
         <ApplicationProvider {...eva} theme={eva.light}>
           <ScrollView>
             <BaseSelect
               withDivider={true}
               label="Category"
               placeholder="Choose category"
               data={[
                 { label: 'PPE', value: 1 },
                 { label: 'Tools', value: 2 },
                 { label: 'Procedures', value: 3 },
               ]}
               value={1}
               onChange={v => console.log('Selected:', v)}
               size="medium"
               variant="default"
             />
           </ScrollView>
         </ApplicationProvider>
       </>
     );
}
