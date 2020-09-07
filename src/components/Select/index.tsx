import React, { useState, useCallback, useEffect } from 'react';
import { Modal, TouchableOpacity, TextInputProps } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import {
	Container,
	Placeholder,
	Text,
	ModalContent,
	OptionsContainer,
	Option,
} from './styles';

interface Props extends TextInputProps {
	options: string[];
}

const Select: React.FC<Props> = ({
	placeholder,
	onChangeText,
	style,
	options,
	value: initialValue,
}) => {
	const [visible, setVisible] = useState(false);
	const [value, setValue] = useState(initialValue || '');

	useEffect(() => {
		if (onChangeText) onChangeText(value);
	}, [value]);

	const show = useCallback(() => {
		setVisible(true);
	}, []);

	const dismiss = useCallback(() => {
		setVisible(false);
	}, []);

	const onSelect = useCallback((value: string) => {
		setValue(value);
		dismiss();
	}, []);

	return (
		<Container activeOpacity={0.7} onPress={show} style={style}>
			{value.length > 0 ? (
				<Text>{value}</Text>
			) : (
				<>
					<Placeholder>{placeholder}</Placeholder>
					<Icon name="chevron-down" size={20} color="#F99645" />
				</>
			)}

			<Modal
				transparent={true}
				visible={visible}
				onRequestClose={dismiss}
				statusBarTranslucent={true}
			>
				<ModalContent>
					<OptionsContainer>
						{options.map((option, index) => (
							<TouchableOpacity key={index} onPress={() => onSelect(option)}>
								<Option selected={option === value}>{option}</Option>
							</TouchableOpacity>
						))}
					</OptionsContainer>
				</ModalContent>
			</Modal>
		</Container>
	);
};

export default Select;
