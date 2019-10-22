import React, {Component} from 'react';
import {TodoListService} from './services/TodolistService';
import {Button, ButtonGroup} from 'reactstrap';

class TodoListItem extends Component {
    state = {
        isLoading: true,
        list: []
    };
    componentDidMount() {
        this.getList();
    }

    getList() {
        TodoListService.todoListItem()
            .then((result, error) => {
                this.setState({
                    list: result.data,
                    listName: 'Todo List',
                    isLoading: false
                });
            });
    }

    remove(id) {
        TodoListService.remove(id)
            .then(success => {
                alert('itemi sildim')
            }).then(error => {
            alert('itemi silemedim');
        });
    }

    updateStatus(id) {
        TodoListService.completed(id)
            .then(success => {
                this.getList();
            });
    };

    handleSubmit(event) {
        event.preventDefault();
        var data = new FormData(event.target);
 
        TodoListService.save(data)
        .then(success => {
            this.getList();
        });
      }

      save(name) {
        TodoListService.save(name)
            .then(success => {
                this.getList();
            });
    };

    render() {
        const {list, isLoading, listName} = this.state;

        if (isLoading) {
            return <p>loading...</p>;
        }
        

        return (
            <div className="TodoList">
                <p className="TodoList-intro">
                    <div className="container">
                        <h2>
                            {listName} <span className="badge badge-secondary">{list.length}</span>
                            
                            <Button size="sm" color="primary" className="fa fa-plus-circle float-right newList"
                            onClick={() => this.updateStatus()}>Add Todo</Button>

                            <form onSubmit={this.handleSubmit}>
                             <label htmlFor="username">Enter a Todo</label>
                              <input id="name" name="name" type="text" />
                               <button>Send data!</button>
                            </form>
                        </h2>
                        {list.map(item =>
                            <div className="col-md-12">
                                <ul className="list-group">
                                   
                                    <li key={item._id} className="list-group-item">
                                        <div className={item.completed ? "completed" : "not-completed"}>
                                            <span className="mx-auto">{item.name}</span>
                                            <ButtonGroup className="float-right">
                                                <Button size="sm" color="primary"
                                                        onClick={() => this.updateStatus(item._id)}>Complete</Button>
                                                <Button size="sm" color="danger"
                                                        onClick={() => this.remove(item._id)}>Remove</Button>
                                            </ButtonGroup>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </p>
            </div>
        );
    }
}

export default TodoListItem;
