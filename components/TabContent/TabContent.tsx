'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ChangeEvent } from 'react';
import { SliderCourse } from '../courseSlider/slidercourse';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className='w-full h-full'
    >
      {value === index && (
        <Box sx={{p:4}}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index:number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabContentProps{
  Title:string,
  learnerNumber:number,
}

export const TabContent = ({Title,learnerNumber}:TabContentProps) => {
 const [selectedTab, setSelectedTab] = React.useState(0); 
 const [selectedTabHovered, setSelectedTabHovered] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery('(max-width:600px)');
  const handleChange = (event:ChangeEvent<{}>, newValue:number) => {
    setValue(newValue);
  }

  return (
    <div>
         <Box sx={{marginLeft:'-10px'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
         sx={{
           '& .MuiTabs-indicator': {
            display: 'none', // Hide the indicator
            },
           '& .MuiTab-root': {
              marginRight: '20px',
    },
  }}
      >
    <Tab style={{
        background: '#e4e8eb',
        borderRadius: '9rem',
        backgroundColor: selectedTab ===0? '#2d2f31' : '#e4e8eb',// Change this to your desired color
        borderBottom: selectedTab ===0? 'none' :'none',
        ...(selectedTab === 0 && selectedTabHovered && { backgroundColor: '#3e4143' })
      }}
      sx={{
        borderBottom:'none',
      }}

    onMouseOver={() => {
    if (selectedTab === 0) {
      setSelectedTabHovered(true);
    }
  }}
  onMouseOut={() => {
    setSelectedTabHovered(false);
  }}

      onClick={() => setSelectedTab(0)} label={<Typography variant="button" fontWeight="bold" color={'#6a6f73'}  sx={{ '&:hover': { color: 'black' }, fontSize:'1rem',display: 'inline-block', '&.Mui-selected': { border: '2px solid black'},textTransform: 'none',lineHeight:'normal', '&.Mui-focusVisible': { // Remove the blue bottom border
          outline: 'none',
          borderBottom: 'none',
        }}
      } ><span style={{color:selectedTab==0?'#fff':'black'}}>{Title}</span>
        <br style={{marginTop: '-8px'}} />
        <span style={{fontSize:'10px',color:selectedTab===0?'#fff':'#6a6f73',marginTop:'-4px'}}>{learnerNumber}M+learner</span>
      </Typography>} />
    <Tab style={{
        background: '#e4e8eb',
        borderRadius: '9rem',
         backgroundColor: selectedTab ===1? '#2d2f31' : '#e4e8eb',// Change this to your desired color
        borderBottom: selectedTab ===1? 'none' :'none',
        ...(selectedTab === 1 && selectedTabHovered && { backgroundColor: '#3e4143' })
        // Change this to your desired color
      }}
        onMouseOver={() => {
    if (selectedTab === 1) {
      setSelectedTabHovered(true);
    }
  }}
  onMouseOut={() => {
    setSelectedTabHovered(false);
  }}
      onClick={() => setSelectedTab(1)} label={<Typography variant="button" fontWeight="bold" color={'#6a6f73'}  sx={{ '&:hover': { color: 'black' }, fontSize:'1rem',display: 'inline-block', '&.Mui-selected': { border: '2px solid black'},textTransform: 'none',lineHeight:'normal'}
      } ><span style={{color:selectedTab===1?'#fff':'black'}}>{Title}</span>
        <br style={{marginTop: '-8px'}} />
        <span style={{fontSize:'12px',color:selectedTab===1?'#fff':'#6a6f73',marginTop:'-4px'}}>{learnerNumber}M+learner</span>
      </Typography>} />
    <Tab style={{
        background: '#e4e8eb',
        borderRadius: '9rem',
         backgroundColor: selectedTab ===2? '#2d2f31' : '#e4e8eb',// Change this to your desired color
        borderBottom: selectedTab ===2? 'none' :'none',
        ...(selectedTab === 2&& selectedTabHovered && { backgroundColor: '#3e4143' })// Change this to your desired color
      }}
        onMouseOver={() => {
    if (selectedTab === 2) {
      setSelectedTabHovered(true);
    }
  }}
  onMouseOut={() => {
    setSelectedTabHovered(false);
  }}
      onClick={() => setSelectedTab(2)} label={<Typography variant="button" fontWeight="bold" color={'#6a6f73'}  sx={{ '&:hover': { color: 'black' }, fontSize:'1rem',display: 'inline-block', '&.Mui-selected': { border: '2px solid black'},textTransform: 'none',lineHeight:'normal'}
      } ><span style={{color:selectedTab===2?'#fff':'black'}}>{Title}</span>
        <br style={{marginTop: '-8px'}} />
        <span style={{fontSize:'10px',color:selectedTab===2?'#fff':'#6a6f73',marginTop:'-4px'}}>{learnerNumber}M+learner</span>
      </Typography>} />
    <Tab style={{
        background: '#e4e8eb',
        borderRadius: '9rem',
         backgroundColor: selectedTab ===3? '#2d2f31' : '#e4e8eb',// Change this to your desired color
        borderBottom: selectedTab ===3? 'none' :'none',
        ...(selectedTab === 3 && selectedTabHovered && { backgroundColor: '#3e4143' })// Change this to your desired color
      }}
        onMouseOver={() => {
    if (selectedTab === 3) {
      setSelectedTabHovered(true);
    }
  }}
  onMouseOut={() => {
    setSelectedTabHovered(false);
  }}

      onClick={() => setSelectedTab(3)} label={<Typography variant="button" fontWeight="bold" color={'#6a6f73'}  sx={{ '&:hover': { color: 'black' }, fontSize:'1rem',display: 'inline-block', '&.Mui-selected': { border: '2px solid black'},textTransform: 'none',lineHeight:'normal'}
      } ><span style={{color:selectedTab===3?'#fff':'black'}}>{Title}</span>
        <br style={{marginTop: '-8px'}} />
        <span style={{fontSize:'10px',color:selectedTab===3?'#fff':'#6a6f73',marginTop:'-4px'}}>{learnerNumber}M+learner</span>
      </Typography>} />
    <Tab style={{
        background: '#e4e8eb',
        borderRadius: '9rem',
         backgroundColor: selectedTab ===4? '#2d2f31' : '#e4e8eb',// Change this to your desired color
        borderBottom: selectedTab ===4? 'none' :'none',
        ...(selectedTab === 4&& selectedTabHovered && { backgroundColor: '#3e4143' })// Change this to your desired color
      }}
        onMouseOver={() => {
    if (selectedTab === 4) {
      setSelectedTabHovered(true);
    }
  }}
  onMouseOut={() => {
    setSelectedTabHovered(false);
  }}
      onClick={() => setSelectedTab(4)} label={<Typography variant="button" fontWeight="bold" color={'#6a6f73'}  sx={{ '&:hover': { color: 'black' }, fontSize:'1rem',display: 'inline-block', '&.Mui-selected': { border: '2px solid black'},textTransform: 'none',lineHeight:'normal'}
      } ><span style={{color:selectedTab===4?'#fff':'black'}}>{Title}</span>
        <br style={{marginTop: '-8px'}} />
        <span style={{fontSize:'10px',color:selectedTab===4?'#fff':'#6a6f73',marginTop:'-4px'}}>{learnerNumber}M+learner</span>
      </Typography>} />
    <Tab style={{
        background: '#e4e8eb',
        borderRadius: '9rem',
        backgroundColor: selectedTab===5? 'black' : '#e4e8eb',
        borderBottom: selectedTab ===5? 'none' :'none',
        ...(selectedTab === 5 && selectedTabHovered && { backgroundColor: '#3e4143' })// Change this to your desired color
      }}
        onMouseOver={() => {
    if (selectedTab === 5) {
      setSelectedTabHovered(true);
    }
  }}
  onMouseOut={() => {
    setSelectedTabHovered(false);
  }}
      onClick={() => setSelectedTab(5)} label={<Typography variant="button" fontWeight="bold" color={'#6a6f73'}  sx={{ '&:hover': { color: 'black' }, fontSize:'1rem',display: 'inline-block', '&.Mui-selected': { border: '2px solid black'},textTransform: 'none',lineHeight:'normal'}
      } ><span style={{color:selectedTab===5?'#fff':'black'}}>{Title}</span>
        <br style={{marginTop: '-8px'}} />
        <span style={{fontSize:'10px',color:selectedTab===5?'#fff':'#6a6f73',marginTop:'-4px'}}>{learnerNumber}M+learner</span>
      </Typography>} />
    <Tab style={{
        background: '#e4e8eb',
        borderRadius: '9rem',
        backgroundColor: selectedTab ===6? '#2d2f31' : '#e4e8eb',// Change this to your desired color
        borderBottom: selectedTab ===6? 'none' :'none',
        ...(selectedTab === 6 && selectedTabHovered && { backgroundColor: '#3e4143' })// Change this to your desired color
      }}
        onMouseOver={() => {
    if (selectedTab === 6) {
      setSelectedTabHovered(true);
    }
  }}
  onMouseOut={() => {
    setSelectedTabHovered(false);
  }}
      onClick={() => setSelectedTab(6)} label={<Typography variant="button" fontWeight="bold" color={'#6a6f73'}  sx={{ '&:hover': { color: 'black' }, fontSize:'1rem',display: 'inline-block', '&.Mui-selected': { border: '2px solid black'},textTransform: 'none',lineHeight:'normal'}
      } ><span style={{color:selectedTab===6?'#fff':'black'}}>{Title}</span>
        <br style={{marginTop: '-8px'}} />
        <span style={{fontSize:'10px',color:selectedTab===6?'#fff':'#6a6f73',marginTop:'-4px'}}>{learnerNumber}M+learner</span>
      </Typography>} />
    <Tab style={{
        background: '#e4e8eb',
        borderRadius: '9rem',
         backgroundColor: selectedTab ===7? '#2d2f31' : '#e4e8eb',// Change this to your desired color
        borderBottom: selectedTab ===7? 'none' :'none',
        ...(selectedTab === 7 && selectedTabHovered && { backgroundColor: '#3e4143' })// Change this to your desired color
      }}
        onMouseOver={() => {
    if (selectedTab === 7) {
      setSelectedTabHovered(true);
    }
  }}
  onMouseOut={() => {
    setSelectedTabHovered(false);
  }}
      onClick={() => setSelectedTab(7)} label={<Typography variant="button" fontWeight="bold" color={'#6a6f73'}  sx={{ '&:hover': { color: 'black' }, fontSize:'1rem',display: 'inline-block', '&.Mui-selected': { border: '2px solid black'},textTransform: 'none',lineHeight:'normal'}
      } ><span style={{color:selectedTab===7?'#fff':'black'}}>{Title}</span>
        <br style={{marginTop: '-8px'}} />
        <span style={{fontSize:'10px',color:selectedTab===7?'#fff':'#6a6f73',marginTop:'-4px'}}>{learnerNumber}M+learner</span>
      </Typography>} />
      </Tabs>
    </Box>

     <CustomTabPanel value={value} index={0}>
       <SliderCourse/>
      </CustomTabPanel>
     <CustomTabPanel value={value} index={1}>
      <SliderCourse/>
      </CustomTabPanel>
    </div>
  )
}
