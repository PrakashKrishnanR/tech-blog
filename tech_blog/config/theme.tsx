import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a theme instance.
const theme = createTheme({
palette: {
   primary: {
      main: '#FFFFFF',
   },
   secondary: {
     main: '#445F8F',
   },
   error: {
   main: red.A400,
   },
  },
});
export default theme;