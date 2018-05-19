import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <div class="container">
                <h3>My Todo App</h3>
                <form action="/action_page.php">
                    <div class="row">
                        <div class="col-sm-4"><input type="text" class="form-control" placeholder="Todo name" name="todoText" /></div>
                        <div class="col-sm-4"><button class="btn btn-default" type="submit">Add todo</button></div>
                    </div>
                </form>
                <div style={{ paddingTop: "25px" }}>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </div>
            </div>
        );
    }
}

export default TodoList;