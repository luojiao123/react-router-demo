import React, { Component } from 'react';
import {createStore} from 'redux';
import Reducer from './reducer';
import List from './components/list';
import Counter from './components/counter';
import Book from './components/book';
import './App.css';

console.log(Reducer)
let store = createStore(Reducer);
console.log(store.getState())
class App extends Component {
  render() {
    return (
      <div className="App">
			
				<Counter
					store={store}
				/>
        <List 
					store={store}
				/>
				
				<Book />
      </div>
    );
  }
}

export {App,store};
