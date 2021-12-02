import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section className="container-children">
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };