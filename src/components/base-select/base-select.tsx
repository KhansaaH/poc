import React, { useState } from 'react';
import {
  Select,
  SelectItem,
  IndexPath,
  Text,
} from '@ui-kitten/components';
import { View } from 'react-native';
import { IBaseSelect } from './base-select-model';
import { styles } from './base-select-style';
import { AppIcon } from '../../icons/base-icon';

export const BaseSelect = ({
  label,
  data,
  placeholder = 'Select...',
  disabled = false,
  withDivider = true,
  arrowIconProps,
  onChange,
  style,
  textStyle,
  iconStyle,
  ...touchableProps
}: IBaseSelect) => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | undefined>();
  const [opened, setOpened] = useState(false);

  const handleSelect = (index: IndexPath | IndexPath[]) => {
    if (Array.isArray(index)) return;
    setSelectedIndex(index);
    const item = data[index.row];
    const selectedValue = typeof item === 'string' ? item : item.value;
    onChange?.(selectedValue);
  };

  const renderArrow = (propsIcon: any) => (
    <AppIcon
      {...propsIcon}
      {...arrowIconProps}
      name={opened ? 'ArrowUp' : 'ArrowDown'}
      width={20}
      height={20}
      fill={disabled ? '#A1A1A1' : opened ? '#205CDF' : '#455664'}
      style={[{ marginRight: 6 }, iconStyle]}
    />
  );

  const selectedValue =
    selectedIndex !== undefined
      ? typeof data[selectedIndex.row] === 'string'
        ? data[selectedIndex.row]
        : (data[selectedIndex.row] as any).label
      : placeholder;

  return (
    <View>
      {label && <Text style={[styles.label, textStyle]}>{label}</Text>}

      <Select
        {...touchableProps}
        placeholder={placeholder}
        disabled={disabled}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
        value={selectedValue}
        accessoryRight={renderArrow}
        onFocus={() => setOpened(true)}
        onBlur={() => setOpened(false)}
        style={[styles.select, opened && styles.selectFocused, style]}
      >
        {data.map((item, i) => (
          <SelectItem
            key={i}
            style={withDivider ? styles.divider : {}}
            title={typeof item === 'string' ? item : item.label}
          />
        ))}
      </Select>
    </View>
  );
};
