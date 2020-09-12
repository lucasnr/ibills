import styled from 'styled-components/native';

import { padding } from './consts';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingHorizontal: padding,
		paddingBottom: 20,
	},
})``;
