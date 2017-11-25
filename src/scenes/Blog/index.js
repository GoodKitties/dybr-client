// Blog pages - own blog,other blogs, feeds, comments, new entry
// Should apply user design
import React, { Component } from 'react';
//import { Blog, Entry, Feed } from './scenes';
import { Route, Switch } from 'react-router-dom';

class BlogScene extends Component {
  render() {
    return null;
    /*return (
      <Switch>
        <Route path="/" component={Blog} />
        <Route path="/feed" component={Feed} />
        <Route path="/:eid" component={Entry} />
      </Switch>
    );*/
  }
}

export default BlogScene;
