import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../redux/todoReducer'

const Form = () => {
    const [text, setText] = useState("");
    const dispath = useDispatch();

    const addTodo = () => {
        dispath(ADD_TODO({
                text: text,
                favorite: false,
                isComplited: false
        }));
        setText("");
    };

    return (
        <div className="form">
            <input
                type="text"
                placeholder="Введите текст"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTodo}>добавить</button>
        </div>
    );
};

export default Form;