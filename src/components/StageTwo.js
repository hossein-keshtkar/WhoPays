import React, { useContext } from 'react';
import { MyContext } from '../contexts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './StageTwo.css';

const StageTwo = () => {
    const context = useContext(MyContext);

    const randomHandler = () => {
        toast.success('You Got It!');
        context.result();
    }

    return (
        <div className="result_wrapper">
            <h3>The looser is: </h3>
            <h2>{context.state.result}</h2>
            <button onClick={randomHandler} className="action_button">GET ANOTHER LOOSER</button>
            <button onClick={() => context.reset()} className="action_button btn_2">START OVER</button>
            <ToastContainer position="top-right" autoClose={1500}/>
        </div>
    )
    
}

export default StageTwo;