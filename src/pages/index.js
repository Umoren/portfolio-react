import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <AboutMe user={user} />
                </Route>

                <Route exact path="/">
                    <Projects user={user} />
                </Route>

                <Route exact path="/">
                    <Work user={user} />
                </Route>

                <Route exact path="/">
                    <Education user={user} />
                </Route>

            </Switch>
        </Router>
    )
};

export default Pages;