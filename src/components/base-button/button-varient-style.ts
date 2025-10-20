
export const backgroundMap = {
  primary: { normal: '#205CDF', active: '#113278', disabled: '#A6BEF2' },
  secondary: { normal: '#E1E8FF', active: '#205CDF', disabled: '#F2F8FF' },
  'system-approve': { normal: '#F0F7E7', active: '#006B29', disabled: '#F5F9EE' },
  'system-reject': { normal: '#FFF1F1', active: '#DB0000', disabled: '#FFF5F5' },
  tertiary: { normal: 'transparent', active: 'rgba(32,92,223,0.08)', disabled: 'transparent' },
  default: { normal: '#F2F2F2', active: '#E5E5E5', disabled: '#F2F2F2' },
} as const;

export const textColorMap = {
  primary: { normal: '#FFF', active: '#FFF', disabled: '#FFF' },
  secondary: { normal: '#205CDF', active: '#FFF', disabled: '#A1BBF2' },
  'system-approve': { normal: '#006B29', active: '#FFF', disabled: '#99D5B0' },
  'system-reject': { normal: '#DB0000', active: '#FFF', disabled: '#F79999' },
  tertiary: { normal: '#205CDF', active: '#205CDF', disabled: '#A1BBF2' },
  default: { normal: '#171717', active: '#171717', disabled: '#999' },
} as const;
