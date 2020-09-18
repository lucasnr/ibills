import React from 'react';
import { ScrollView, ViewStyle, StyleProp } from 'react-native';

import MenuButton from '~/components/MenuButton';

export const padding = 20;

interface Props {
	style?: StyleProp<ViewStyle>;
}

const AppScreenContainer: React.FC<Props> = ({ children, style }) => {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={[
				{
					paddingHorizontal: padding,
					paddingBottom: 20,
					paddingTop: 20,
				},
				style,
			]}
		>
			<MenuButton style={{ marginLeft: padding * -1 }} />
			{children}
		</ScrollView>
	);
};

export default AppScreenContainer;
