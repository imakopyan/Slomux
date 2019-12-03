// объявляем начальный стейт
export const createStore = (reducer, initialState = 1) => {
    let currentState = initialState
    const listeners = []
  
    const getState = () => currentState
    const dispatch = action => {
      currentState = reducer(currentState, action)
      listeners.forEach(listener => listener())
    }
  
    // отписываемся
    const subscribe = listener => {
        listeners.push(listener);
        return () => {
            const index = listeners.indexOf(listener);
                listeners.splice(index, 1);
        };
    };
  
    return { getState, dispatch, subscribe }
  }