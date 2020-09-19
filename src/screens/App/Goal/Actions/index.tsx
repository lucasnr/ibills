import React from 'react';
import { Svg, Path, G, Line, Rect, Circle } from 'react-native-svg';

const color = '#26c6da';

export const Pause: React.FC = () => {
	return (
		<Svg width="16" height="16" viewBox="0 0 10.059 11.432">
			<G transform="translate(-8.5 -5.5)">
				<Path stroke={color} fill="none" d="M9,6h3.02V16.432H9Z" />
				<Path
					stroke={color}
					fill="none"
					d="M21,6h3.02V16.432H21Z"
					transform="translate(-5.96)"
				/>
			</G>
		</Svg>
	);
};

export const Edit: React.FC = () => {
	return (
		<Svg
			style={{ marginLeft: 5 }}
			width="16"
			height="16"
			viewBox="0 0 12.615 12.732"
		>
			<G transform="translate(-3.5 -2.261)">
				<Path
					stroke={color}
					fill="none"
					d="M7.392,7H5.357A1.357,1.357,0,0,0,4,8.357v6.105a1.357,1.357,0,0,0,1.357,1.357h6.105a1.357,1.357,0,0,0,1.357-1.357V12.427"
					transform="translate(0 -1.326)"
				/>
				<Path
					stroke={color}
					fill="none"
					d="M9,11.1h2.035L16.8,5.335A1.439,1.439,0,0,0,14.766,3.3L9,9.066V11.1"
					transform="translate(-1.608)"
				/>
				<Line
					stroke={color}
					fill="none"
					x2="1.565"
					y2="1.565"
					transform="translate(12.869 4.444)"
				/>
			</G>
		</Svg>
	);
};

export const Trash: React.FC = () => {
	return (
		<Svg
			style={{ marginLeft: 5 }}
			width="16"
			height="16"
			viewBox="0 0 13 14.051"
		>
			<G transform="translate(-3.101 -2.5)">
				<Line
					stroke={color}
					fill="none"
					x2="12"
					transform="translate(3.601 6)"
				/>
				<Line
					stroke={color}
					fill="none"
					y2="4"
					transform="translate(8.401 9)"
				/>
				<Line
					stroke={color}
					fill="none"
					y2="4"
					transform="translate(11.401 9)"
				/>
				<Path
					stroke={color}
					fill="none"
					d="M5.1,7.615,5.725,15.7a1.45,1.45,0,0,0,1.45,1.45h5.8a1.45,1.45,0,0,0,1.45-1.45l.547-8.085"
					transform="translate(-0.275 -1.1)"
				/>
				<Path
					stroke={color}
					fill="none"
					d="M9,5.9V3.725A.725.725,0,0,1,9.725,3h2.9a.725.725,0,0,1,.725.725V5.9"
					transform="translate(-1.375)"
				/>
			</G>
		</Svg>
	);
};

export const Check: React.FC = () => {
	return (
		<Svg style={{ marginLeft: 5 }} width="16" height="16" viewBox="0 0 12 12">
			<G transform="translate(-2.5 -2.5)">
				<Rect
					stroke={color}
					fill="none"
					width="11"
					height="11"
					rx="2"
					transform="translate(3 3)"
				/>
				<Path
					stroke={color}
					fill="none"
					d="M9,11.417l1.417,1.417L13.25,10"
					transform="translate(-2.625 -2.917)"
				/>
			</G>
		</Svg>
	);
};

export const Search: React.FC = () => {
	return (
		<Svg
			style={{ marginLeft: 5 }}
			width="16"
			height="16"
			viewBox="0 0 13.207 13.207"
		>
			<G transform="translate(-2.5 -2.5)">
				<Circle
					stroke={color}
					fill="none"
					cx="4.5"
					cy="4.5"
					r="4.5"
					transform="translate(3 3)"
				/>
				<Line
					stroke={color}
					fill="none"
					x1="4"
					y1="4"
					transform="translate(11 11)"
				/>
			</G>
		</Svg>
	);
};
