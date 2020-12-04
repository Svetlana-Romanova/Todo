import React, { Component } from 'react';

import Header from '../header';
import AppList from '../app-list';
import AddItem from '../add-item';

import './app.css';

export default class App extends Component {

    id = 0;

    state = {
        todoData: [
            this.createNewItem('Сварить борщ'),
            this.createNewItem('Погулять с кошкой'),
            this.createNewItem('Одеть шапку')
        ]
    };

    createNewItem(goal) {
        return {
            goal,
            done: false,
            important: false,
            id: this.id++
        }
    }


    deleteItem = (id) => {
        const { todoData } = this.state;

        const newArr = [
            ...todoData.slice(0, id),
            ...todoData.slice(id + 1)
        ];

        return this.setState({
            todoData: newArr
        })
    }

    itemAdd = (item) => {
        const newItem = this.createNewItem(item);
        const { todoData } = this.state;

        const newArr = [
            ...todoData,
            newItem
        ]

        return this.setState({
            todoData: newArr
        });
    }

    toggleValue (id, prop) {
        
        const { todoData } = this.state;
        const idx = todoData.findIndex((el) => el.id === id);
        const thisItem = todoData[idx];
        const newItem = {...thisItem, [prop]: !thisItem.[prop]};

        return [
            ...todoData.slice(0, idx),
            newItem,
            ...todoData.slice(idx + 1)
        ];
    }

    importantItem = (id) => {
        this.setState({
            todoData: this.toggleValue(id, 'important')
        });
    }

    doneItem = (id) => {
        this.setState({
            todoData: this.toggleValue(id, 'done')
        });
    }

    render() {

       const { todoData } = this.state;

       return (
            <div className="app">
                <Header />
                <AppList todos={todoData} 
                    onDeleted={this.deleteItem} 
                    onImportant={this.importantItem}
                    onDone={this.doneItem} />
                <AddItem onItemAdd={this.itemAdd}/>
            </div>
        )
    };
};