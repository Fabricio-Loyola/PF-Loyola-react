import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';

const App = () => {

  return(
    <div style={{width: '100vw', height: '100vh'}}> 
    <NavBar />
    <ItemListContainer greeting="Bienvenidos a CipherTech"/>
    </div>
  );
}

export default App; 