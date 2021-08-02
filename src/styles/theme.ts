import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    primary: '#802392',
    secondary: '#f7934c',
    white: '#fbf5f3',
    black: '#1d1e18',
    gray: 'rgba(15, 14, 14, 0.5)',
    lightGray: 'rgba(15, 14, 14, 0.2)',
    background: 'linear-gradient(to bottom left, #802392, #f7934c 140%)'
  },
  shadows: {
    shadowSm:
      '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
    shadowMd:
      '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    shadowLg:
      '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
    shadowTopSm:
      '0 -2px 2px 0 rgba(0, 0, 0, 0.14), 0 -3px 1px -2px rgba(0, 0, 0, 0.12), 0 -1px 5px 0 rgba(0, 0, 0, 0.2)',
    shadowTopMd:
      '0 -4px 5px 0 rgba(0, 0, 0, 0.14), 0 -1px 10px 0 rgba(0, 0, 0, 0.12), 0 -2px 4px -1px rgba(0, 0, 0, 0.2)',
    shadowTopLg:
      '0 -8px 10px 1px rgba(0, 0, 0, 0.14), 0 -3px 14px 2px rgba(0, 0, 0, 0.12), 0 -5px 5px -3px rgba(0, 0, 0, 0.2)'
  }
}

export default theme
