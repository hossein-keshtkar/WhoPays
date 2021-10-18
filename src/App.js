import classes from './App.module.css';
import React from 'react';
import {MyContext} from './contexts/index';
import StageOne from './components/StageOne';
import StageTwo from './components/StageTwo';

class App extends React.Component {
    static contextType = MyContext;

    render() {
        return <>
            <div className={classes.wrapper}>
                <div className={classes.centerWrapper}>
                    <h1>Who Pays The Bill?</h1>
                    {this.context.state.stage === 1 ? 
                    <StageOne/> 
                    : 
                    <StageTwo/>
                    }
                </div>
            </div>
        </>
    }
}

export default App;