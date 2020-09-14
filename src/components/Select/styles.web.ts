import styled from 'styled-components';

import { containerStyle } from '~/components/Input/styles';

export const Container = styled.select`
	${containerStyle};
	background: ${({ theme: { background } }) => background.primary}
		url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAp0lEQVRIx+2SMQ7CMAxFX9pKOQ23ILlBNwZW4ACMpBs7amYGxCGAM8BtkCwBYWGCNoSy5o2W/Z8tGTKZTBTZjEf/9hS9g940lOoi3kwiPTWlOktr3c8C4AqUwLZLIt7UwB6oKB6hL0RFz/dmCayBOzDV8+PuI1wFp2enZpCgSwJIaniSAEBa61BhBdxepYqgGr04uG+zSYK3S0jZfBDSWhf7mEwm080TTbw+7cFBJzQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDktMTNUMjM6Mzk6NDIrMDA6MDBWN37lAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA5LTEzVDIzOjM5OjQyKzAwOjAwJ2rGWQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=')
		no-repeat right 16px center;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
`;
