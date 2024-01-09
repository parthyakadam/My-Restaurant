 import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'
 
 const About = () => {
   return (
     <Layout>
        <Box 
            sx={{
              my: 15,
              textAlign: "center",
              p: 2,
              "& h4" :{
                fontWeight: "bolder",
                my: 2
              },
              "& p": {
                textAlign: 'justify'
              },

              "@media (max-width: 600px)": {
                my: 0
              }
            }}
        >
          <Typography variant='h4'>
            Welcome to my Restaurant!
          </Typography>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia iusto sint fugiat doloribus qui esse omnis reprehenderit excepturi. Architecto autem iusto optio dolores, minus dolor ullam ab eum hic eius quos, minima tempora eos nesciunt reprehenderit quod! Consectetur, asperiores veniam voluptatibus deserunt mollitia eum explicabo, porro qui architecto provident delectus sunt repellendus harum eius quos laborum aspernatur nostrum? Iusto dolore in, neque ipsam vero rerum exercitationem pariatur dicta mollitia dolorum quisquam accusantium ex, excepturi odit quaerat? Dolor perferendis doloribus quas blanditiis eveniet. Aut assumenda alias quidem illum provident asperiores ut officia nulla ducimus, nam accusantium, esse quo distinctio cum nisi!
          </p>
          <br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum atque rerum placeat illum beatae autem fuga incidunt accusamus, distinctio deleniti quos quibusdam ex consectetur reprehenderit quidem quia iure veniam corrupti eligendi? Excepturi obcaecati commodi tenetur deleniti nam error eligendi minima, harum molestiae quis facilis sapiente sint. Non id perspiciatis eum! Soluta totam nisi nam sequi error repudiandae, ducimus eum neque cumque. Voluptas quis eaque pariatur quibusdam facilis velit quos voluptatum veniam ut assumenda aspernatur, debitis ad, asperiores sed, saepe quo impedit porro adipisci temporibus soluta vel quaerat officia incidunt? Itaque, maxime officiis quis nesciunt voluptate nulla veniam commodi molestiae.</p>
        </Box>
     </Layout>
   )
 }
 
 export default About