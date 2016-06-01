import ng from 'angular';

import Welcome from './welcome';
import User from './user';
import Signup from './signup';

export default ng.module('app.containers', [Welcome, User, Signup]).name;
