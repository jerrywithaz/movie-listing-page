import { css } from 'styled-components';
import { BREAKPOINTS } from './constants';

const media = Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (max-width: ${BREAKPOINTS[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

export default media;