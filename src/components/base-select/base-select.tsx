import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { AppIcon } from '../../icons/base-icon';
import { IBaseSelect, IBaseSelectItem } from './base-select-model';
import { styles } from './base-select-style';

export const BaseSelect: React.FC<IBaseSelect> = ({
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
}) => {
  const [opened, setOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | number | null>(null);

  /** 🔹 Normalize item */
  const getItemLabel = (item: string | IBaseSelectItem) =>
    typeof item === 'string' ? item : item.label;
  const getItemValue = (item: string | IBaseSelectItem) =>
    typeof item === 'string' ? item : item.value;

  /** 🔹 Handle selection */
  const handleSelect = (item: string | IBaseSelectItem) => {
    const value = getItemValue(item);
    setSelectedValue(value);
    onChange?.(value);
    setOpened(false);
  };

  /** 🔹 Arrow color logic */
  const arrowColor = disabled ? '#A1A1A1' : opened ? '#205CDF' : '#455664';

  const displayLabel =
    selectedValue != null
      ? getItemLabel(data.find((d) => getItemValue(d) === selectedValue) ?? '')
      : placeholder;
const normalizedData: IBaseSelectItem[] = data.map((item) =>
  typeof item === 'string' ? { label: item, value: item } : item,
);

  return (
    <View style={{ width: '100%' }}>
      {label && <Text style={[styles.label, textStyle]}>{label}</Text>}

      {/* Main button */}
      <Pressable
        onPress={() => !disabled && setOpened(true)}
        style={[
          styles.select,
          opened && styles.selectFocused,
          disabled && { opacity: 0.6 },
          style,
        ]}
      >
        <Text
          style={[
            styles.text,
            textStyle,
            { flex: 1, color: disabled ? '#A1A1A1' : '#455664' },
          ]}
          numberOfLines={1}
        >
          {displayLabel}
        </Text>

        <AppIcon
          {...arrowIconProps}
          name={opened ? 'ArrowUp' : 'ArrowDown'}
          width={20}
          height={20}
          fill={arrowColor}
          style={[{ marginRight: 6 }, iconStyle]}
        />
      </Pressable>

      {/* Modal Dropdown */}
      <Modal visible={opened} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalBackdrop}
          activeOpacity={1}
          onPressOut={() => setOpened(false)}
        >
          <View style={styles.modalContainer}>
            <FlatList
              data={normalizedData}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[
                    styles.optionItem,
                    withDivider && index < data.length - 1 && styles.divider,
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{getItemLabel(item)}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
