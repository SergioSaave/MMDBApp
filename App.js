import Index from './index'
import { Provider } from 'react-redux'
import store from './store/store';

export default function App() {
    return (
        <Provider store={store}>
            <Index />
        </Provider>
    )
}