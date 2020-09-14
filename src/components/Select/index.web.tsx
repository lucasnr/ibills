import React, { useCallback, useEffect, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

interface Props extends TextInputProps {
	options: string[];
}

const Select: React.FC<Props> = ({
	value: initialValue = '',
	onChangeText,
	options,
	placeholder,
	style,
}) => {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		if (onChangeText) onChangeText(value);
	}, [value]);

	const onChange = useCallback((text: string) => {
		setValue(text);
	}, []);

	return (
		<Container
			value={value}
			onChange={(e) => onChange(e.target.value)}
			style={style}
		>
			{placeholder && (
				<option selected={true} disabled={true} value={placeholder}>
					{placeholder}
				</option>
			)}
			{options.map((option, index) => (
				<option key={index} value={option} label={option}>
					{option}
				</option>
			))}
		</Container>
	);
};

export default Select;
