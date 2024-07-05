import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Card, CardHeader, CardContent, Typography, Divider, LinearProgress } from '@mui/material';

//project import

import ReportCard from './ReportCard';
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
          <Link to="/detailsAdmin" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="$30200"
              // secondary="Admin Details"
              color={theme.palette.error.main}
              footerData="Admin Details"
              iconPrimary={AccountCircleIcon}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/finishedGames" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="145"
              // secondary="Sports Details"
              color={theme.palette.error.main}
              footerData="Sports Details"
              iconPrimary={SportsBaseballIcon}
            // iconFooter={TrendingDownIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/ledgerDetails" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="290+"
              // secondary="Ledger"
              color={theme.palette.error.main}
              footerData="Ledger"
              iconPrimary={DescriptionTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/cashTransections" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="500"
              // secondary="Cash Transection"
              color={theme.palette.error.main}
              footerData="Cash Transection"
              iconPrimary={MoneyIcon}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/wbtSetting" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="500"
              // secondary="Setting"
              color={theme.palette.error.main}
              footerData="Setting"
              iconPrimary={SettingsSuggestIcon}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              // primary="500"
              // secondary="Logout"
              color={theme.palette.error.main}
              footerData="Logout"
              iconPrimary={LogoutIcon}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <hr className="custom-hr" />
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="Demo"
              // secondary="You Are Admin"
              color={theme.palette.error.main}
              footerData="You Are Admin"
              iconPrimary={AccountCircleIcon}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="200"
              // secondary="Chips"
              color={theme.palette.error.main}
              footerData="Chips"
              iconPrimary={DiamondIcon}
            // iconFooter={TrendingDownIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="0"
              // secondary="Members"
              color={theme.palette.error.main}
              footerData="Members"
              iconPrimary={DescriptionTwoTone}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="96"
              // secondary="My Share"
              color={theme.palette.error.main}
              footerData="My Share"
              iconPrimary={BarChartIcon }
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="4"
              // secondary="Company Share"
              color={theme.palette.error.main}
              footerData="Company Share"
              iconPrimary={BarChartIcon }
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="2 %"
              // secondary="Match Comminssion"
              color={theme.palette.error.main}
              footerData="Match Comminssion"
              iconPrimary={ExtensionIcon}
            // iconFooter={TrendingUpIcon}
            />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <ReportCard
                primary="3 %"
                // secondary="Session Comminssion"
                color={theme.palette.error.main}
                footerData="Session Comminssion"
                iconPrimary={ExtensionOffIcon }
              // iconFooter={TrendingUpIcon}
              />
            </Link>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ReportCard
              primary="Rules"
              // secondary="Session Comminssion"
              color={theme.palette.error.main}
              footerData="Session Comminssion"
              iconPrimary={ReportIcon}
            // iconFooter={TrendingUpIcon}
            />
             </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Default;
