import React from 'react';
import { View } from 'react-native';

import { isDesktop } from '~/utils/consts';

const MobileOnlyContainer: React.FC = ({ children }) => {
	if (isDesktop) return <>{children}</>;
	return <View>{children}</View>;
};

export default MobileOnlyContainer;
