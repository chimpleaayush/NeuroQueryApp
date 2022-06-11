import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MentorHomeTabs, StudentHomeTabs} from '../store/route';
import RoleSelection from '../screens/preLogin/RoleSelection';
import Login from '../screens/preLogin/Login';
import Registration from '../screens/preLogin/Registration';
import StackInit from './stackInit';
import CreateTicket from '../screens/postLogin/mentor/CreateTicket';
import {navigationRef} from './rootNavigation';
import QueryDetail from '../screens/postLogin/mentor/QueryDetail';
import MentorChat from '../screens/postLogin/mentor/MentorChat';
import StudentChat from '../screens/postLogin/student/StudentChat';
import TicketDetails from '../screens/postLogin/student/TicketDetails';
import History from '../screens/postLogin/student/History';

const postLoginScreens = {
  StudentHome: StudentHomeTabs,
  MentorHome: MentorHomeTabs,
  History: History,
  TicketDetails: TicketDetails,
  StudentChat: StudentChat,
  MentorChat: MentorChat,
  QueryDetail: QueryDetail,
  CreateTicket: CreateTicket,
};

const preLoginScreens = {
  RoleSelection: RoleSelection,
  Login: Login,
  Registration: Registration,
};

export const Route = ({isLoggedIn}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      {StackInit(preLoginScreens, postLoginScreens, isLoggedIn)}
    </NavigationContainer>
  );
};
