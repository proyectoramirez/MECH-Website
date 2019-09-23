import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageHome from "components/PageHome";
import Projects from "components/Projects";
import Eboard from "containers/Eboard";
import Contact from "containers/Contact";
import NotFound from "components/NotFound";

export default function() {
    return (
            <Switch>
                <Route path="/" exact component={PageHome} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/eboard" exact component={Eboard} />
                <Route path="/contact" exact component={Contact} />
                <Route path="*" component={NotFound} />
            </Switch>
    );
}