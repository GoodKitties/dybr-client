// Blog pages - own blog,other blogs, feeds, comments, new entry
// Should apply user design
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Blog, Entry, Feed } from './scenes';

export default () => {
  return (
    <Switch>
      <Route path="/" component={Blog} />
      <Route path="/feed" component={Feed} />
      <Route path="/:eid" component={Entry} />
    </Switch>
  );
};
