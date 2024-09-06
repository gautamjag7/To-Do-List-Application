import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus} from '@fortawesome/free-solid-svg-icons';
import Search from './Search';

const Content = () => {

    const [newtask,setnewtask]=useState('');
    const [todolist, setTodolist] = useState(() => {
        const savedTodolist = localStorage.getItem('todolist');
        return savedTodolist ? JSON.parse(savedTodolist) : [];
    });
    console.log("re-rendering");
    const [search,setSearch]= useState('');

    const handleInputChange = (e) => {
        setnewtask(e.target.value);
    };

    const handleAddItem = () => {
        if (newtask.trim()) {
            const newlist=[
                ...todolist,
                {
                    id: todolist.length + 1,
                    descr: newtask,
                    check: false
                }
            ];
            setTodolist(newlist);
            localStorage.setItem('todolist', JSON.stringify(newlist));
            setnewtask('');
        }
    };

    const handleCheckboxChange = (id) => {
        const newcheck=todolist.map(item =>
            item.id === id ? { ...item, check: !item.check } : item
        );
        setTodolist(newcheck);
        localStorage.setItem('todolist', JSON.stringify(newcheck));
    };

    const handleDeleteItem = (id) => {
        const newTodoList=todolist.filter(item => item.id !== id);
        setTodolist(newTodoList)
        localStorage.setItem('todolist', JSON.stringify(newTodoList))
    };

    return (
        <main className="container mt-4 flex-grow-1">
            <div className="input-group mb-3">
                <input
                    type="text"
                    autoFocus
                    className="form-control"
                    placeholder="Add Task"
                    value={newtask}
                    onChange={handleInputChange}
                />
                <div className="input-group-append">
                    <button className="border-0 rounded-0 btn btn-primary" type="button" onClick={handleAddItem}> <FontAwesomeIcon icon={faPlus} /></button>
                </div>
            </div>
            <Search
            search={search}
            setSearch={setSearch}
            />
            <ul className="list-group">
                {
                    todolist.length !== 0?
                    todolist.filter((item) => item.descr.toLowerCase().includes(search.toLowerCase())).map(listitem => (
                        <li key={listitem.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <input 
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    checked={listitem.check}
                                    onChange={() => handleCheckboxChange(listitem.id)}
                                />
                                {listitem.descr}
                            </div>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteItem(listitem.id)}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </li>
                    )):
                    <p>You are free now...!</p>
                }
            </ul>
        </main>
    );
};

export default Content;
