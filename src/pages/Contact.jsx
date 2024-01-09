import React from 'react'
import Layout from '../components/Layout'
import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 }}}>
          <Typography variant='h4'>
            Contact Us
          </Typography>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad aliquam quo ratione eligendi blanditiis quidem ducimus, architecto ipsum! Aperiam nulla placeat distinctio totam quaerat aspernatur cupiditate! Possimus illo beatae amet?</p>
        </Box>

        <Box 
          sx={{
            m: 3,
            width: "600px",
            ml: 10,
            "@media (max-width:600px)": {
              width: "300px",
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "black", color: "white" }}
                    align="center"
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1}} /> 9900887653
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{ color: "blue", pt: 1}}/> contactus@gmail.com
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "green", pt: 1}}/> 1800-00-8976 (toll-free)
                  </TableCell>
                </TableRow>
              </TableBody>
             </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact