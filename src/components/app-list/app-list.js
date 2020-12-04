import React from 'react';

import AppListItem from '../app-list-item';

import './app-list.css';

const AppList = ({todos, onDeleted, onImportant, onDone}) => {

    const list = todos.map((el) => {
        const { id, ...itemProps } = el;

        return (
            <li key={id} className="list-group-item">
                <AppListItem {...itemProps} onDeleted={() => onDeleted(id)}
                        onImportant={() => {onImportant(id)}}
                        onDone={() => {onDone(id)}} />
            </li>
        )
    });

        return (
            <ul className="list-group app-list">
                {list}
            </ul>
        )
}

export default AppList;