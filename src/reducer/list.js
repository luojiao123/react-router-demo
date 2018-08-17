import {counterInit} from './initState';
import {add,remove} from './initFn';
import createReducer from './createReducer';

let list = createReducer(counterInit,{'add':add,'remove':remove});

export default list;

/* export default function counter(state=counterInit,action){
	switch(action.type){
		case 'add':
			return add(state,[action.text]);
			break;
		case 'remove':
			return remove(state,action.index);
			break;
		default:
			return state;
	}
} */

/* export default function counter(state=counterInit,action){
	if(action.type==='add'){
		return add(state,[action.text]);
	}else if(action.type==='remove'){
		return remove(state,action.index);
	}else{
		return state;
	}
} */
