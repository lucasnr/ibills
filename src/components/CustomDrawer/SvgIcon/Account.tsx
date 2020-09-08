import React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

const Account: React.FC<SvgProps> = ({ color }) => {
	return (
		<Svg width="17.631" height="22.044" viewBox="0 0 17.631 22.044">
			<Path
				fill={color}
				d="M14.226,11.265A5.46,5.46,0,0,0,17.054,6.44,5.348,5.348,0,0,0,11.815,1,5.348,5.348,0,0,0,6.576,6.44,5.47,5.47,0,0,0,9.41,11.267,8.909,8.909,0,0,0,3,19.833v1.852a1.352,1.352,0,0,0,1.343,1.359H19.288a1.352,1.352,0,0,0,1.343-1.358V19.833a8.88,8.88,0,0,0-6.4-8.568ZM7.524,6.44a4.394,4.394,0,0,1,4.291-4.481A4.394,4.394,0,0,1,16.107,6.44a4.391,4.391,0,0,1-4.291,4.48A4.394,4.394,0,0,1,7.524,6.44ZM19.683,21.687a.4.4,0,0,1-.4.4H4.343a.4.4,0,0,1-.395-.4V19.833a7.868,7.868,0,1,1,15.735,0Z"
				transform="translate(-3 -1)"
			/>
		</Svg>
	);
};

export default Account;
