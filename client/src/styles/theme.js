import { extendTheme } from '@chakra-ui/react'
import "@fontsource/inter"
import { createBreakpoints } from '@chakra-ui/theme-tools'
import "@fontsource/poppins"

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: '390px',
  md: '700px',
  lg: '920px',
  xl: '1200px',
  '2xl': '1536px',
})

const theme = extendTheme({

  breakpoints,
  fonts: {
    heading: '"Inter", sans-serif; ',
    body: '"Poppins", sans-serif; ',
  },
 
})

export default theme;