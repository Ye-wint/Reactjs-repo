import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import {books} from './books'
import Book from './Book'

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book,index) => {
        return <Book key={books.id} {...book}/>;
      })}
    </section>
  )
}


ReactDOM.render(<BookList />, document.getElementById('root'));