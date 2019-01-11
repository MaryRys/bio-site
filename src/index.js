import firebase from 'firebase/app';
import 'bootstrap';
import './index.scss';

import apiKeys from '../db/apiKeys.json';
import getAndPrintProjects from './components/projects-component';
import createNavbar from './components/Navbar/navbar';
import writeBio from './components/bio-component';
import writeTechs from './components/tech-component';
import writeContacts from './components/Contacts/Contacts';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar.createNavbar();
  createNavbar.navbarEvents();
  getAndPrintProjects();
  writeBio();
  writeTechs();
  writeContacts();
};

initializeApp();
