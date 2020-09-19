import React from 'react';

import Svg, { Path, G, SvgProps } from 'react-native-svg';

const Notification: React.FC<SvgProps> = ({ color }) => {
	return (
		<Svg width="20.96" height="25.15" viewBox="0 0 20.96 25.15">
			<G transform="translate(-1290.044 -17)">
				<G transform="translate(1247.386 17)">
					<G transform="translate(42.657 3.667)">
						<G transform="translate(0)">
							<Path
								fill={color}
								d="M63.54,92.211l-1.8-3a8.914,8.914,0,0,1-1.269-4.583V82A7.335,7.335,0,0,0,45.8,82v2.627a8.914,8.914,0,0,1-1.269,4.583l-1.8,3a.523.523,0,0,0,.45.793H63.09a.523.523,0,0,0,.45-.793Zm-19.433-.255L45.43,89.75a9.953,9.953,0,0,0,1.419-5.122V82a6.287,6.287,0,0,1,12.574,0v2.627a9.962,9.962,0,0,0,1.418,5.122l1.324,2.206Z"
								transform="translate(-42.657 -74.667)"
							/>
						</G>
					</G>
					<G transform="translate(51.04)">
						<G transform="translate(0)">
							<Path
								fill={color}
								d="M215.429,0a2.1,2.1,0,0,0-2.1,2.1v2.1a.524.524,0,0,0,1.048,0V2.1a1.048,1.048,0,0,1,2.1,0v2.1a.524.524,0,0,0,1.048,0V2.1A2.1,2.1,0,0,0,215.429,0Z"
								transform="translate(-213.333)"
							/>
						</G>
					</G>
					<G transform="translate(50.516 20.957)">
						<Path
							fill={color}
							d="M207.553,426.938a.525.525,0,0,0-.905.53,1.572,1.572,0,1,1-2.722,0,.525.525,0,0,0-.905-.53,2.621,2.621,0,1,0,4.533,0Z"
							transform="translate(-202.666 -426.68)"
						/>
					</G>
				</G>
			</G>
		</Svg>
	);
};

export default Notification;
