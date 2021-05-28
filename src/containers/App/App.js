import './styles/app.scss';
import Places from '../Places/Places';
import { useSelector } from 'react-redux';
import Popup from '../Popup/Popup';
import Header from '../../components/Header/Header';

function App() {
  const data = useSelector(store => store.cards);

  return (
    <div className="page__content">
      <Header />
      <main className="content">
        <Places />
      </main>
      {data.openCard !== null && <Popup />}
    </div>
  );
}

export default App;
