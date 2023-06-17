import styles from './App.module.css';
import { useSelector } from "react-redux";
import {Carta} from './Cartas/Carta';


function App() {

  
  const cartas = useSelector( state => state.cartasSlice);
  const error = useSelector( state => state.cartasSlice.error);

  return (

    <div className={styles.container}>

      { error.length > 0 ? alert('Un solo Objetivo') : null }

      {cartas.cartas.map(carta => <Carta  id={carta.id}
                                          key={carta.id}
                                          name={carta.name}
                                          attackprop={carta.attack}
                                          health={carta.health}
                                          selected={carta.selected}
                                          />)}

      
    </div>
  )
}

export default App;
