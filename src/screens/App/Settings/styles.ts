import styled from 'styled-components/native';

import { Card, CardTitle } from '~/components/Card';
import Row from '~/components/Row';

export const CheckboxRow = styled(Row)`
	padding: 4px 0px;
`;

export const CheckboxSectionSubtitle = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.secondary.regular};
	font-size: 14px;
	margin-bottom: 10px;
`;

export const CheckboxLabel = styled(CheckboxSectionSubtitle)`
	font-size: 12px;
	margin-bottom: 0px;
	margin-left: 10px;
	margin-top: 0px;
`;

export const Form = styled(Card)`
	flex-grow: 0;
`;

export const FormTitle = styled(CardTitle)`
	margin-bottom: 20px;
`;
