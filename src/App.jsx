import React from 'react';
import { connect } from "react-redux";
import QuestionList from './components/QuestionList'
import QuestionDetail from './components/QuestionDetail'
import { Link, Route } from "react-router-dom";

const AppDisplay = ({test}) => {
    return (
        <div>
            <Link to='/'>
                <h1>Isomorphic React {test}</h1>
            </Link>
            <div>
                <Route exact path='/' render={() => <QuestionList />}></Route>
                <Route exact path='/questions/:id' render={({match}) => <QuestionDetail question_id={match.params.id} />}  />
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(AppDisplay);