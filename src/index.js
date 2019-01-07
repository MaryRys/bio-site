import firebase from 'firebase/app';
import 'bootstrap';
import './index.scss';

import apiKeys from '../db/apiKeys.json';
import getAndPrintProjects from './components/projects-component';
import createNavbar from './components/Navbar/navbar';
import writeBio from './components/bio-component';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  getAndPrintProjects();
  writeBio();
};

initializeApp();
