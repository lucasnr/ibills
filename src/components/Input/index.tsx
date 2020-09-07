import React from 'react';
import { TextInputProps } from 'react-native';
import { TextInputMaskTypeProp } from 'react-native-masked-text';

import { Container, MaskedContainer } from './styles';

interface Props extends TextInputProps {
	maskType?: TextInputMaskTypeProp;
	options?: {
		mask?: string;
		format?: string;
	};
}

const Input: React.FC<Props> = ({ maskType, options, ...rest }) => {
	if (maskType)
		return <MaskedContainer type={maskType} options={options} {...rest} />;
	return <Container {...rest} />;
};

export default Input;
