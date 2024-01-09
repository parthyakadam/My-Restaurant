import React from 'react'
import Layout from '../components/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../data/data'

const Menu = () => {
  return (
    <Layout>
        <Box sx={{display: "flex", flexWrap: 'wrap', justifyContent: 'center', mt: 2, backgroundColor: "grey"}}>
          {MenuList.map((item) =>(
            <Card sx={{maxWidth: '370px', display: 'flex', m: 2}}>
              {/* Ripple effect on screen when clicked is applied due to the CardActionArea tag */}
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component= {"img"}
                  src={item.image}
                  alt={item.name}
                />
                  <CardContent>
                    <Typography variant='h5' component={"div"} gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant='body2'>
                      {item.description}
                    </Typography>
                  </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
    </Layout>
  )
}

export default Menu