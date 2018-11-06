import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import loadProject from './javascripts/components/projects-component';

$('#test').show();

const initializeApp = () => {
  loadProject();
};

initializeApp();
