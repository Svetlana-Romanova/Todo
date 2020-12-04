import React from 'react';

import './app-list-item.css';

const AppListItem = ({goal, important, done, onDeleted, onImportant, onDone}) => {

       const look = important ? 'fa-bell' : 'fa-bell-o';
       const line = done ? ' done' : ''

       return (
               <span className="d-flex justify-content-between app-list-item">
                    <span>
                        <button type='button' onClick={onImportant}>
                            <i className={`fa ${look}`}></i>
                        </button>
                        <span className={`app-list-item-text${line}`} onClick={onDone}>
                            {goal}
                        </span>
                    </span>
                    <button type='button' onClick={onDeleted}>
                        <i className="fa fa-trash-o"></i>
                    </button>
               </span>
           )
};

export default AppListItem;