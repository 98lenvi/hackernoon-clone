import { css } from 'styled-components'

export const grid14 = css`
    grid-column-start: 1;
    grid-column-end: 4;
    @media (max-width: ${(_) => _.theme.breakpoints.lg}) {
      grid-column: 1 / span 1;
    }
`;

export const grid23 = css`
    grid-column-start: 2;
    grid-column-end: 3;
    @media (max-width: ${(_) => _.theme.breakpoints.lg}) {
      grid-column: 1 / span 1;
    }
`;

export const grid34 = css`
    grid-column-start: 3;
    grid-column-end: 4;
    @media (max-width: ${(_) => _.theme.breakpoints.lg}) {
      grid-column: 1 / span 1;
    }
`;