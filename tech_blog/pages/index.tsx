import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import PrimarySearchAppBar from "../components/custom-appbar";


export default function Home() {
  return (
    <Box>
    <PrimarySearchAppBar></PrimarySearchAppBar>

    <Grid container spacing={2}>
    <Grid item  xs={3} md={3}   sx={{margin: 1}}>
    </Grid>
   
    </Grid>
    </Box>

    )
}
