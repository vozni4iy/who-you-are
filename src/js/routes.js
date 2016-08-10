import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import Initial from './containers/initial';
import Question1 from './containers/question_1';
import Question21 from './containers/question_21';
import Question22 from './containers/question_22';
import Question31 from './containers/question_31';
import Question32 from './containers/question_32';
import Question33 from './containers/question_33';
import Question34 from './containers/question_34';
import Conclusion from './containers/conclusion';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Initial} />
    <Route path="/question_1" component={Question1} />
    <Route path="/question_21" component={Question21} />
    <Route path="/question_22" component={Question22} />
    <Route path="/question_31" component={Question31} />
    <Route path="/question_32" component={Question32} />
    <Route path="/question_33" component={Question33} />
	<Route path="/question_34" component={Question34} />
    <Route path="/conclusion" component={Conclusion} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
