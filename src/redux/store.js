import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import thunk from "redux-thunk";

const getSavedState = () => {
    try {
        const savedState = localStorage.getItem("reduxState");
        if (savedState === null) {
            return undefined;
        }
        return JSON.parse(savedState);
    } catch (error) {
        console.error("No se ha obtenido el state del localStorage: ", error);
        return undefined;
    }
}

const saveState = (state) => {
    try {
        const jsonState = JSON.stringify(state);
        localStorage.setItem("reduxState", jsonState);
    } catch (error) {
        console.error("Error al guardar el estado en el localStorage: ", error);
    }
}

const store = createStore(rootReducer, getSavedState(), applyMiddleware(thunk));

store.subscribe(() => {
    const state = store.getState();
    saveState(state);
})

export default store;