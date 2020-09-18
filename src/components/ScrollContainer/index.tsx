import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import { padding } from '~/components/AppScreenContainer';
import { Container } from './styles';

import { isDesktop } from '~/utils/consts';

interface Props {
	style?: StyleProp<ViewStyle>;
	contentContainerStyle?: StyleProp<ViewStyle>;
	mobileOnly?: boolean;
}

const ScrollContainer: React.FC<Props> = ({
	children,
	style,
	contentContainerStyle,
	mobileOnly = false,
}) => {
	if (mobileOnly && isDesktop) return <>{children}</>;

	return (
		<Container
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			style={style}
			contentContainerStyle={[
				contentContainerStyle,
				{ paddingHorizontal: padding },
			]}
		>
			{children}
		</Container>
	);
};

export default ScrollContainer;
