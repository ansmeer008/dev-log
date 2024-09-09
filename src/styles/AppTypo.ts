import { css } from 'styled-components';

const font = {
  size: {
    tiny: '1.4rem',
    small: '1.8rem',
    middle: '2rem',
    large: '2.4rem',
  },
  lineHeight: {
    10: '0.75rem',
    50: '1rem',
    100: '1.25rem',
    200: '1.5rem',
    300: '1.75rem',
    400: '2rem',
    500: '2.25rem',
    600: '2.75rem',
  },
  letterSpacing: {
    200: '-0.02em',
    400: '-0.04em',
    0: '0', //none인데 위와 맞춰서 숫자 형태의 key로 남김
  },
  fontWeight: {
    thin: '400',
    default: '500',
    bold: '600',
  },
};

export const AppTypo = {
  TITLE_BOLD: css`
    font-size: ${font.size.large};
    line-height: ${font.lineHeight[600]};
    letter-spacing: ${font.letterSpacing[400]};
    font-weight: ${font.fontWeight.bold};
  `,
  TITLE: css`
    font-size: ${font.size.large};
    line-height: ${font.lineHeight[500]};
    letter-spacing: ${font.letterSpacing[400]};
    font-weight: ${font.fontWeight.default};
  `,
  TITLE_THIN:css`
  font-size: ${font.size.large};
    line-height: ${font.lineHeight[500]};
    letter-spacing: ${font.letterSpacing[400]};
    font-weight: ${font.fontWeight.thin};
  `
};

export type AppTypoKey = keyof typeof AppTypo;