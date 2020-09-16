import React from 'react';
import { ViewStyle } from 'react-native';

import { Container, Col } from './styles';

import { isDesktop } from '~/utils/consts';

interface Props {
	desktopOnly?: boolean;
	style?: ViewStyle;
}

interface RowProps extends Props {
	cols?: boolean;
}

const Row: React.FC<RowProps> = ({
	children,
	style,
	cols = false,
	desktopOnly = false,
}) => {
	if (desktopOnly && !isDesktop) return <>{children}</>;

	return (
		<Container style={style} cols={cols}>
			{children}
		</Container>
	);
};

export default Row;

export const RowCol: React.FC<Props> = ({
	children,
	style,
	desktopOnly = false,
}) => {
	if (desktopOnly && !isDesktop) return <>{children}</>;

	return <Col style={style}>{children}</Col>;
};
