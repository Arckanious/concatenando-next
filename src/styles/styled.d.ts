import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      white: string
      black: string
      gray: string
      lightGray: string
      background: string
    }
    shadows: {
      shadowSm: string
      shadowMd: string
      shadowLg: string
      shadowTopSm: string
      shadowTopMd: string
      shadowTopLg: string
    }
  }
}
