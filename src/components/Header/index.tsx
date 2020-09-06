import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Animated, Dimensions } from 'react-native';

import { Container, Link, LinkContainer, BorderBottom } from './styles';

const { width } = Dimensions.get('window');

const Header: React.FC = () => {
	const value = useRef(new Animated.Value(0)).current;
	const [active, setActive] = useState(0);

	useEffect(() => {
		Animated.spring(value, {
			toValue: active === 0 ? 0 : width / 2,
			useNativeDriver: false,
		}).start();
	}, [active]);

	const linkCallback = useCallback((target: number) => {
		setActive(target);
	}, []);

	return (
		<Container style={{ elevation: 4 }}>
			<LinkContainer onPress={() => linkCallback(0)}>
				<Link active={active === 0}>Login</Link>
			</LinkContainer>
			<LinkContainer onPress={() => linkCallback(1)}>
				<Link active={active === 1}>Cadastro</Link>
			</LinkContainer>

			<Animated.View
				style={{
					alignItems: 'center',
					bottom: 0,
					justifyContent: 'center',
					left: value,
					position: 'absolute',
					width: '50%',
				}}
			>
				<BorderBottom />
			</Animated.View>
		</Container>
	);
};

export default Header;
