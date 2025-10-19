import React, { useState } from 'react';
import {
  Select,
  SelectItem,
  IndexPath,
  Icon,
  Text,
} from '@ui-kitten/components';
import { View } from 'react-native';
import { IBaseSelect } from './base-select-model';
import { styles } from './base-select-style';

export const BaseSelect = ({
  label,
  data,
  placeholder = 'Select...',
  disabled = false,
  withDivider = true,
  size = 'medium',
  variant = 'default',
  arrowIconProps,
  onChange,
  value,
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
    <Icon
      {...propsIcon}
      {...arrowIconProps}
      name={opened ? 'arrow-up' : 'arrow-down'}
      width={20}
      height={20}
      style={iconStyle}
    />
  );

  const selectedValue =
    selectedIndex !== undefined
      ? typeof data[(selectedIndex as IndexPath).row] === 'string'
        ? data[(selectedIndex as IndexPath).row]
        : (data[(selectedIndex as IndexPath).row] as any).label
      : placeholder;

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, textStyle]}>{label}</Text>}

      <View style={[opened && styles.selectWrapperFocused]}>
        <Select
          {...touchableProps}
          placeholder={placeholder}
          disabled={disabled}
          size={size}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
          value={selectedValue}
          accessoryRight={renderArrow}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          style={[styles.select, style]}
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
    </View>
  );
};
