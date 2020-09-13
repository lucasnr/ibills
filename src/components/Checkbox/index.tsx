import React, { useState, useCallback, useEffect } from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { Container } from './styles';

interface Props {
	value?: boolean;
	onChangeValue?(value: boolean): void;
}

const Checkbox: React.FC<Props> = ({
	onChangeValue,
	value: initialValue = false,
}) => {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		if (onChangeValue) onChangeValue(value);
	}, [value]);

	const onPress = useCallback(() => {
		setValue((prev) => !prev);
	}, []);

	return (
		<Container onPress={onPress}>
			{value && <Icon name="check" size={20} color="#32b947" />}
		</Container>
	);
};

export default Checkbox;
