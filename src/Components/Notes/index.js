import React from 'react';



const Notes = (props) => {
    return (
        <div>
           <h1>Understanding Actions</h1>
           <ul>
               <li>Actions make changes to redux store through reducers.</li>
               <li>Action holds the data to be added to redux store through reducers</li>
               <li>Actions can send data to reducers by allowing the user to pass in data to the reducer or by the action strictly sending from a server to the store</li>
           </ul>
                <a href ='https://github.com/tweneboah/react-redux-complete-guide/wiki/Expenses-Manager-App' target ='_blank' rel="noopener noreferrer">Actions</a>
        </div>
        
    );
};

export default Notes;