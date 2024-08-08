/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router } from "@solidjs/router";

import './index.css';
import App from './App';
import Home1 from './Components/Home1';
import PrivacyPolicyContent from './Components/PrivacyPolicyComponent';
import DeleteAccount from './Components/DeleteAccount';
import AboutAbiri from './Components/AboutAbiri';
import AboutTerms from './Components/AboutTerms';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
<Router >
    <Route path="/delete_user" component={DeleteAccount} />
    <Route path="/about_abiri" component={AboutAbiri}/>
    <Route path="/privacy_policy" component={PrivacyPolicyContent} />
    <Route path="/terms" component={AboutTerms} />
    <Route path="/" component={Home1} />
  </Router>
), root);
