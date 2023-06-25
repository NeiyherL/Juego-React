import styles from './App.module.css';
import { useSelector } from "react-redux";
import {Carta} from './Cartas/Carta';
import { cleanError } from './redux/cartasSlice';
import { useDispatch } from "react-redux";



function App() {


  const dispatch = useDispatch();
  

  const cartas1 = useSelector( state => state.cartasSlice.cartas1);
  const cartas2 = useSelector( state => state.cartasSlice.cartas2);
  const error = useSelector( state => state.cartasSlice.error);


  const errorFnc = ()=>{
    alert('Un solo Objetivo')
    dispatch(cleanError());
  }


  return (

    <div className={styles.container}>

      {error.length > 0 ? errorFnc() : null}

      <div>
        <h2>
          PLAYER 1
        </h2>

        <div className={styles.cartas}>
          {cartas1.map(carta => <Carta    id={carta.id}
                                          key={carta.id}
                                          name={carta.name}
                                          attackprop={carta.attack}
                                          health={carta.health}
                                          selected={carta.selected}
                                          />)}
          </div>


      </div>

      <div>
        <h2>
          PLAYER 2
        </h2>
        <div className={styles.cartas}>
          {cartas2.map(carta => <Carta    id={carta.id}
                                          key={carta.id}
                                          name={carta.name}
                                          attackprop={carta.attack}
                                          health={carta.health}
                                          selected={carta.selected}
                                          />)}
          </div>
        


      </div>

     

      
    </div>
  )
}

export default App;
