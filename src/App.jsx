import { useEffect, useReducer, useRef } from 'react'
import { reducer, initialState } from './state-management/reducer';
import { CustomContext } from './state-management/app-context';
import { handleRequest } from './utilities/handleRequest';
import MainContainer from './containers/MainContainer';
import './App.css'

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const stateRef = useRef(state);

    useEffect(() => {
        stateRef.current = state;
    }, [state]);

    useEffect(() => {
        const port = chrome.runtime.connect({ name: 'devtools-window' });
        let isMounted = true;

        chrome.devtools.network.onRequestFinished.addListener(request => {
            if (request.response && isMounted) {
                request.getContent(body => {
                  try {
                    handleRequest(request.request.url, body, () => stateRef.current, dispatch);
                  } catch (e) {
                      return null
                  }
                });
            }
        });

        return () => {
            isMounted = false;
            port.disconnect();
        };
    }, [dispatch]);


    return (
        <CustomContext.Provider value={{ state, dispatch }}>
            <main>
                <MainContainer />
            </main>
        </CustomContext.Provider>
    );
};

export default App;