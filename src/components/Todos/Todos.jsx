import React from 'react';
import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_TODO, CHANGE_FAVORITE_TODO, CHANGE_COMPLETED_TODO } from '../../redux/todoReducer';

const Todos = () => {
    const todos = useSelector((state) => state);
    const dispath = useDispatch();
    console.log(todos)

    const deleteTodo = (index) => {
        dispath(DELETE_TODO(index))
    }

    const makeFavorite = (index) => {
        dispath(CHANGE_FAVORITE_TODO(index))
    }

    const isCompleted = (index) => {
        dispath(CHANGE_COMPLETED_TODO(index))
    }

    return (
        <div className="todos">
                {todos.map((todo, index) => {
                    return (
                        <Todo
                            key={index}
                            todo={todo}
                            index={index}
                            makeFavorite={() => makeFavorite(index)}
                            deleteTodo={() => deleteTodo(index)}
                            isCompleted={() => isCompleted(index)}
                            />
                    );
                })
                }
            </div>
    );
};

export default Todos;