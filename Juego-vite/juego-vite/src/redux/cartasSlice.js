import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartas: [
        {
            id: 'carta1',
            name: 'GOKU',
            attack: 15,
            health: 100,
            selected: false,
    
        },{
            id: 'carta2',
            name: 'Kimimaro',
            attack: 15,
            health: 100,
            selected: false,
    
        }, {
            
            id: 'carta3',
            name: 'PICOLO PIZZA',
            attack: 15,
            health: 100,
            selected: false,
        },
        {
            
            id: 'carta4',
            name: 'Squirtle',
            attack: 15,
            health: 100,
            selected: false,
        }
    ]
}



export const cartasSlice = createSlice({

    name: "cartas",
    initialState,
    reducers: {
    
        seleccionar: (state, action) => {
            const id = action.payload;
            
            for (let i = 0; i < state.cartas.length ; i++) {

                if (state.cartas[i].id === id) state.cartas[i].selected = true;

            }
            
        },

desSeleccionar: (state, action) => {
            const id = action.payload;
            
            for (let i = 0; i < state.cartas.length ; i++) {

                if (state.cartas[i].id === id) state.cartas[i].selected = false;

            }
            
        },

        attack: (state, action)=>{

            const {attackprop, id} = action.payload;
            const seleccionados=[];

            console.log(id)
            
            for (let i = 0; i < state.cartas.length ; i++) {


                if(state.cartas[i].selected === true) {

                    seleccionados.push(state.cartas[i])

                    console.log (seleccionados)

                    if(seleccionados.length > 1) {

                        state.cartas[i].attack = 'solo un objetivo';
                        return
    
                    }

                } else{
                    seleccionados[0].health - attackprop;
                } 

            }
        }
    }
})

export const { seleccionar, attack, desSeleccionar } = cartasSlice.actions;

export default cartasSlice.reducer;
