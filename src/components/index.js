import ng from 'angular';

import Header from './header';
import HeaderUser from './header-user';
import FbLogin from './fb-login';
import FbLogout from './fb-logout';
import UserBtn from './user-btn';

export default ng.module('app.components', [Header, HeaderUser, FbLogout, FbLogin, UserBtn]).name;
