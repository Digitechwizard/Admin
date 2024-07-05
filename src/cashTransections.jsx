import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Card, CardHeader, CardContent, Typography, Divider, LinearProgress,  } from '@mui/material';

//project import

import ReportCard from 'views/Dashboard/Default/ReportCard';
import { Link } from 'react-router-dom';
import { gridSpacing } from 'config.js';

// assets
import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';

//////
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MoneyIcon from '@mui/icons-material/Money';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DiamondIcon from '@mui/icons-material/Diamond';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReportIcon from '@mui/icons-material/Report';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExtensionIcon from '@mui/icons-material/Extension';
import ExtensionOffIcon from '@mui/icons-material/ExtensionOff';
// custom style
const FlatCardBlock = styled((props) => <Grid item sm={6} xs={12} {...props} />)(({ theme }) => ({
  padding: '25px 25px',
  borderLeft: '1px solid' + theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    borderLeft: 'none',
    borderBottom: '1px solid' + theme.palette.background.default
  },
  [theme.breakpoints.down('md')]: {
    borderBottom: '1px solid' + theme.palette.background.default
  }
}));

// ==============================|| DASHBOARD DEFAULT ||============================== //

const Default = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/dabitCreditSUA" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="$30200"
              // secondary="Admin Details"
              color={theme.palette.error.main}
              footerData="Dr/Cr Entery Subadmin"
              iconPrimary={AccountCircleIcon}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/dabitCreditM" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="145"
              // secondary="Sports Details"
              color={theme.palette.error.main}
              footerData="Dr/Cr Entery Master"
              iconPrimary={SportsBaseballIcon}
            // iconFooter={TrendingDownIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/dabitCreditSA" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="290+"
              // secondary="Ledger"
              color={theme.palette.error.main}
              footerData="Dr/Cr Entery Superagent"
              iconPrimary={DescriptionTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/dabitCreditA" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="500"
              // secondary="Cash Transection"
              color={theme.palette.error.main}
              footerData="Dr/Cr Entery Agent"
              iconPrimary={MoneyIcon}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/dabitCreditC " style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="500"
              // secondary="Setting"
              color={theme.palette.error.main}
              footerData="Dr/Cr Entery Client"
              iconPrimary={SettingsSuggestIcon}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
         
        </Grid>
      </Grid>
      <hr className="custom-hr" />
     
    </Grid>
  );
};

export default Default;
