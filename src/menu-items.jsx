// assets

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import MoneyIcon from '@mui/icons-material/Money';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';

const icons = {
  AdminPanelSettingsIcon: AdminPanelSettingsIcon,
  SportsBaseballIcon: SportsBaseballIcon,
  MoneyIcon: MoneyIcon,
  ReportIcon: ReportIcon,
  SettingsIcon: SettingsIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
};

// ==============================|| MENU ITEMS ||============================== //

// eslint-disable-next-line
export default {
  items: [

    {
      id: 'pages',
      title: 'ADMIN PANEL',
      // caption: 'Prebuild Pages',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        // {
        //   id: 'sample-page',
        //   title: 'Sample Page',
        //   type: 'item',
        //   url: '/sample-page',
        //   icon: icons['ChromeReaderModeOutlinedIcon']
        // },
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: 'http://localhost:3000/demos/admin-templates/materially/react/free/'
        },
        {
          id: 'auth',
          title: 'Admin Details',
          type: 'collapse',
          icon: icons['AdminPanelSettingsIcon'],
          children: [
            {
              id: 'miniAdminMaster',
              title: 'MiniAdmin Master',
              type: 'item',
              url: '/miniAdminMaster'
            },
            {
              id: 'masterMaster',
              title: 'Master Master',
              type: 'item',
              url: '/masterMaster'
            },
            {
              id: 'superAgentMaster',
              title: 'Super Agent Master',
              type: 'item',
              url: '/superAgentMaster'
            },
            {
              id: 'agentMaster',
              title: 'Agent Master',
              type: 'item',
              url: '/agentMaster'
            },
            {
              id: 'clientMaster',
              title: 'Client Master',
              type: 'item',
              url: '/clientMaster'
            }
          ]
        },
        {
          id: 'auth',
          title: 'Sports-Betting',
          type: 'collapse',
          icon: icons['SportsBaseballIcon'],
          children: [
            {
              id: 'allMatchPosition',
              title: 'All Match Position',
              type: 'item',
              url: '/allMatchPosition'
            },
            {
              id: 'activeGames',
              title: 'Active Games',
              type: 'item',
              url: '/activeGames'
            },
            {
              id: 'finishedGames',
              title: 'Finished Games',
              type: 'item',
              url: '/finishedGames'
            },
            {
              id: 'casinoDetails',
              title: 'Casino Details',
              type: 'item',
              url: '/casinoDetails'
            }
          ]
        },

        {
          id: 'auth',
          title: 'Ledger',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'profitLoss',
              title: 'Profit/Loss',
              type: 'item',
              url: '/profitLoss'
            },
            {
              id: 'myLedger',
              title: 'My Ledger',
              type: 'item',
              url: '/myLedger'
            },
            {
              id: 'miniAdminLedger',
              title: 'MiniAdmin Ledger',
              type: 'item',
              url: '/miniAdminLedger'
            },
            {
              id: 'masterLedger',
              title: 'Master Ledger',
              type: 'item',
              url: '/masterLedger'
            },
            {
              id: 'superagentLedger',
              title: 'Superagent Ledger',
              type: 'item',
              url: '/superagentLedger'
            },
            {
              id: 'agentLedger',
              title: 'Agent Ledger',
              type: 'item',
              url: '/agentLedger'
            },
            {
              id: 'clientLedger',
              title: 'Client Ledger',
              type: 'item',
              url: '/clientLedger'
            }
          ]
        },
        {
          id: 'auth',
          title: 'Cash Transancation',
          type: 'collapse',
          icon: icons['MoneyIcon'],
          children: [
            {
              id: 'dabitCreditC',
              title: 'Dabit/Credit Entery(C)',
              type: 'item',
              url: '/dabitCreditC'
            },
            {
              id: 'dabitCreditA',
              title: 'Dabit/Credit Entery(A)',
              type: 'item',
              url: '/dabitCreditA'
            },
            {
              id: 'dabitCreditSA',
              title: 'Dabit/Credit Entery(SA)',
              type: 'item',
              url: '/dabitCreditSA'
            },
            {
              id: 'dabitCreditM',
              title: 'Dabit/Credit Entery(M)',
              type: 'item',
              url: '/dabitCreditM'
            },
            {
              id: 'dabitCreditSUA',
              title: 'Dabit/Credit Entery(SUA)',
              type: 'item',
              url: '/dabitCreditSUA'
            }
          ]
        },

        {
          id: 'auth',
          title: 'Report',
          type: 'collapse',
          icon: icons['ReportIcon'],
          children: [
            {
              id: 'loginReport',
              title: 'Login Report',
              type: 'item',
              url: '/loginReport'
            },
            {
              id: 'secureCodeReport',
              title: 'Secure Code Report',
              type: 'item',
              url: '/secureCodeReport'
            }
            // {
            //   id: 'login',
            //   title: 'Secure Code Report',
            //   type: 'item',
            //   url: '/application/login'
            // },
            // {
            //   id: 'register',
            //   title: 'Secure Code Report',
            //   type: 'item',
            //   url: '/application/register'
            // },
          ]
        },
        {
          id: 'wbtSetting',
          title: 'WBT Setting',
          type: 'item',
          icon: icons['SettingsIcon'],
          url: '/wbtSetting'
        }
      ]
    },
  ]
};
