import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';

// import ClientMaster from 'ActiveGames/activeGames';

const DashboardDefault = Loadable(lazy(() => import('views/Dashboard/Default')));
const UtilsTypography = Loadable(lazy(() => import('views/Utils/Typography')));
const SamplePage = Loadable(lazy(() => import('views/SamplePage')));
const MiniAdminMaster = Loadable(lazy(() => import('views/miniAdminMaster')));
const MasterMaster = Loadable(lazy(() => import('views/masterMaster')));
const SuperAgentMaster = Loadable(lazy(() => import('views/superAgentMaster')));
const AgentMaster = Loadable(lazy(() => import('views/agentMaster')));
const ClientMaster = Loadable(lazy(() => import('views/clientMaster')));
const AllMatchPosition = Loadable(lazy(() => import('views/allMatchPosition')));
const ActiveGames = Loadable(lazy(() => import('views/activeGames')));
const FinishedGames = Loadable(lazy(() => import('views/finishedGames')));
const CasinoDetails = Loadable(lazy(() => import('views/casinoDetails')));
const ProfitLoss = Loadable(lazy(() => import('views/profitLoss')));
const MyLedger = Loadable(lazy(() => import('views/myLedger')));
const MiniAdminLedger = Loadable(lazy(() => import('views/miniAdminLedger')));
const MasterLedger = Loadable(lazy(() => import('views/masterLedger')));
const SuperagentLedger = Loadable(lazy(() => import('views/superagentLedger')));
const AgentLedger = Loadable(lazy(() => import('views/agentLedger')));
const ClientLedger = Loadable(lazy(() => import('views/clientLedger')));
const DabitCredit = Loadable(lazy(() => import('views/dabitCreditA')));
const DabitCreditC = Loadable(lazy(() => import('views/dabitCreditC')));
const DabitCreditM = Loadable(lazy(() => import('views/dabitCreditM')));
const DabitCreditSA = Loadable(lazy(() => import('views/dabitCreditSA')));
const DabitCreditSUA = Loadable(lazy(() => import('views/dabitCreditSUA')));
const ReportCard = Loadable(lazy(() => import('../detailsAdmin')));
const LedgerDetails = Loadable(lazy(() => import('../ledgerDetails')));

const CashTransections = Loadable(lazy(() => import('../cashTransections')));



const LoginReport = Loadable(lazy(() => import('views/loginReport')));
const SecureCodeReport = Loadable(lazy(() => import('views/secureCodeReport')));
const WbtSetting = Loadable(lazy(() => import('views/wbtSetting')));
const Statement = Loadable(lazy(() => import('views/statement')));
const AcOperation = Loadable(lazy(() => import('views/ac-operation')));
const ChangePassword = Loadable(lazy(() => import('views/changePasswordForm')));



const CreateForm = Loadable(lazy(() => import('views/createForm')));
const CreateFormTwo = Loadable(lazy(() => import('views/createForm2')));


const UpdateLimit = Loadable(lazy(() => import('views/updateLimit')));
const UpdateLimit2 = Loadable(lazy(() => import('views/updateLimit2')));
const UpdateLimit3 = Loadable(lazy(() => import('views/updateLimit3')));
const UpdateLimit4 = Loadable(lazy(() => import('views/updateLimit4')));
const UpdateLimit5 = Loadable(lazy(() => import('views/updateLimit5')));






// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    { path: '/utils/util-typography', element: <UtilsTypography /> },
    { path: '/sample-page', element: <SamplePage /> },
    { path: '/miniAdminMaster', element: <MiniAdminMaster /> },
    { path: '/masterMaster', element: <MasterMaster /> },
    { path: '/superAgentMaster', element: <SuperAgentMaster /> },
    { path: '/agentMaster', element: <AgentMaster /> },
    { path: '/clientMaster', element: <ClientMaster /> },
    { path: '/allMatchPosition', element: <AllMatchPosition /> },
    { path: '/activeGames', element: <ActiveGames /> },
    { path: '/finishedGames', element: <FinishedGames /> },
    { path: '/casinoDetails', element: <CasinoDetails /> },
    { path: '/profitLoss', element: <ProfitLoss /> },
    { path: '/myLedger', element: <MyLedger /> },
    { path: '/miniAdminLedger', element: <MiniAdminLedger /> },
    { path: '/masterLedger', element: <MasterLedger /> },
    { path: '/superagentLedger', element: <SuperagentLedger /> },
    { path: '/agentLedger', element: <AgentLedger /> },
    { path: '/clientLedger', element: <ClientLedger /> },
    { path: '/dabitCreditA', element: <DabitCredit /> },
    { path: '/dabitCreditc', element: <DabitCreditC /> },
    { path: '/dabitCreditSA', element: <DabitCreditSA /> },
    { path: '/dabitCreditM', element: <DabitCreditM /> },
    { path: '/dabitCreditSUA', element: <DabitCreditSUA/> },
    { path: '/statement', element: <Statement/> },
    { path: '/ac-operation', element: <AcOperation/> },
    { path: '/changePasswordForm', element: <ChangePassword/> },

    { path: '/createform', element: <CreateForm /> },
    { path: '/createForm2', element: <CreateFormTwo /> },
 
    { path: '/createForm2', element: <CreateFormTwo /> },
    { path: '/detailsAdmin', element: <ReportCard /> },
    { path: '/ledgerDetails', element: <LedgerDetails /> },
    { path: '/cashtransections', element: <CashTransections/> },
     
    
     

    { path: '/updateLimit', element: <UpdateLimit /> },
    { path: '/updateLimit2', element: <UpdateLimit2 /> },
    { path: '/updateLimit3', element: <UpdateLimit3 /> },
    { path: '/updateLimit4', element: <UpdateLimit4 /> },
    { path: '/updateLimit5', element: <UpdateLimit5 /> },




    { path: '/loginReport', element: <LoginReport /> },
    { path: '/secureCodeReport', element: <SecureCodeReport /> },
    { path: '/wbtSetting', element: <WbtSetting /> },

  ]
};

export default MainRoutes;
