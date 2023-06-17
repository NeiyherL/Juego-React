import React, { useState } from 'react';
import styles from './Carta.module.css';
import { seleccionar, attackAll, desSeleccionar, attackSingle } from '../redux/cartasSlice';
import { useDispatch } from "react-redux";




export  function Carta ({id, name, attackprop, health, selected }) {


  const [selection, setSelection ] = useState(false)

    const dispatch = useDispatch();


      const selectionar = () => {
        dispatch(seleccionar(id));
        setSelection(true);
      };

      const desseleccionar = () => {
        dispatch(desSeleccionar(id));
        setSelection(false);
      };

      const attackdmg = () => {
        dispatch(attackAll({ attackprop:15 }));
      };

      const attackdmg2 = () => {
        dispatch(attackSingle({ attackprop:25 }));
      };


  return (

    <div>

        <div className={ selection ? styles.cartaSelect : styles.cartaUnselect }>

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


