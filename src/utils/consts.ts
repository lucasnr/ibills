import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export const isDesktop = Platform.OS === 'web' && width >= 768;
