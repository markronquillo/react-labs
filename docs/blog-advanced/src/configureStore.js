import todoApp from './reducers'
import { createStore } from 'redux'
import { loadState, saveState } from './helpers/localStorage';
import throttle from 'lodash/throttle';


const configureStore = () => {
	const persistedState = loadState();
	let store = createStore(todoApp, persistedState);

	store.subscribe(throttle(() => {
		saveState({
			todos: store.getState().todos
		});
	}, 1000));

	return store;
};

export default configureStore;
