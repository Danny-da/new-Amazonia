import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Stack, Typography } from '@mui/material';
import  categories  from '../../storage/utils'


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: 100,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 100,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const numbers = [0,10, 20, 40, 60, 80, 100];

export default function Chart(){

    return(
        <div>
            {
                categories.map((category)=>
                <Box key={category.id} sx={{ flexGrow: 1, display:'flex', margin:'16px 0'}}>
                   <Typography sx={{fontSize:'12px', width:'150px'}} component='div'>{category.name}</Typography>
                   <BorderLinearProgress variant="determinate" sx={{width:'100%'}}  value={category.quantity} />
                </Box>
                )
            }
                    <Stack direction="row" spacing={2}>
                    <Typography sx={{fontSize:'14px', width:'100%', textAlign:'center'}} component='div'>%</Typography>
                        {numbers.map((number) => (
                        <Typography key={number} sx={{ width: '100%', textAlign:'right' }} component="div">
                         {number}
                        </Typography>
                         ))}
                    </Stack>
      
    
        </div>
    )
}

