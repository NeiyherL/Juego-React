import React from 'react';
import styles from './Carta.module.css';
import { seleccionar, attackAll, desSeleccionar, attackSingle } from '../redux/cartasSlice';
import { useDispatch } from "react-redux";




export  function Carta ({id, name, attackprop, health, selected }) {


  

    const dispatch = useDispatch();


      const selectionar = () => {
        dispatch(seleccionar(id));
        
      };

      const desseleccionar = () => {
        dispatch(desSeleccionar(id));
        
      };

      const attackdmg = () => {
        dispatch(attackAll({ attackprop:15 }));
      };

      const attackdmg2 = () => {
        dispatch(attackSingle({ attackprop:25 }));
      };


  return (

    <div>

        <div className={ selected ? styles.cartaSelect : styles.cartaUnselect }>

            <p>Name: {name}</p>
            <p>Attack: {attackprop}</p>
            <p>Health: {health}</p>
            { selected ? <p> Seleccionado </p> : null }

            <div className={styles.botones}>

                <div className={styles.botonesAttack}>
                  <button onClick = { attackdmg }> AttackAll </button>
                  <button onClick = { attackdmg2 }> AttackSingle </button>
                </div>
                

                <button onClick = { desseleccionar }> Desselect </button>

                <button onClick = { selectionar }> Select </button>

                

            </div>


            </div>
      
    </div>
  )
}


