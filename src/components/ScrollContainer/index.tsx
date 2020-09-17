import React from 'react';
import { ViewStyle } from 'react-native';

import { isDesktop } from '~/utils/consts';

import { Container } from './styles';

interface Props {
	style?: ViewStyle;
	mobileOnly?: boolean;
}

const ScrollContainer: React.FC<Props> = ({
	children,
	style,
	mobileOnly = false,
}) => {
	if (mobileOnly && isDesktop) return <>{children}</>;

	return (
		<Container
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			style={style}
		>
			{children}
		</Container>
	);
};

export default ScrollContainer;
