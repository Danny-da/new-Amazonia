import { Grid, Typography, Divider } from "@mui/material";
import Chart from "./Chart";
import CardCategories from '../../components/CardCategories'
import categories from "../../storage/utils";

export default function ChartSpecies(){
    return(
        <div>
           <Grid container spacing={2} columns={{xs:4, sm:8, md:12, lg:12}}>
               <Grid item xs={4} sm={8} md={12} lg={12}>
               <Typography variant="h6" component='div' align="center">DISTRIBUCIÓN DE ESPECIES</Typography>
               <Typography component='div' sx={{fontSize:'34px', fontWeight:'medium'}} align="center">Distribución de especies y comunidades Indígenas</Typography>
               <Divider
               textAlign="center"
               sx={{width:'60px', backgroundColor:'#8B0000', borderWidth:'4px', margin: '0 auto', borderRadius:'16px'}}
               />
               </Grid>
               
               <Grid item xs={4} sm={4} md={6} lg={6} sx={{alignItems:'center'}}>
               <Chart/>
               </Grid>
                    
                  <Grid  item xs={4} sm={4} md={6} lg={6}>

                  <Grid container spacing={1}>
                    {
                    categories.map((category)=>
                    <Grid key={category.id} item xs={6} sm={6} md={6} lg={6} sx={{ marginBottom: '-14px' }} >
                    <CardCategories key={category.id} number={category.quantity} categorie={category.name}/>
                    </Grid>
                    )
                  }
                  </Grid>


                  </Grid>
           </Grid>
        </div>
    )
}