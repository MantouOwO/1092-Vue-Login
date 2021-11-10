import { createStore } from 'vuex';
import list from './modules/list';
import login from './modules/login';

export default createStore({ 
	modules: {
		list,
		login
	}
});
