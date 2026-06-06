import { Provider } from 'react-redux';
import BottomTabsNavigation from './navigations/BottomTabsNavigation';
import { store } from './reducer/Configuration';


export default function App() {
  return (
    <Provider store={store}>
      <BottomTabsNavigation />
    </Provider>
  );
}



