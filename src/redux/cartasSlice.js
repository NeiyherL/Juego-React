import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    cartas1: [
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
    
        }
    ],

    cartas2:[ {
        
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
    }],

    seleccionados: [],
    error: '',
}



export const cartasSlice = createSlice({

    name: "cartas",
    initialState,
    reducers: {
    
        seleccionar: (state, action) => {
            const id = action.payload;
            //----cartas1
            for (let i = 0; i < state.cartas1.length ; i++) {

                if (state.cartas1[i].id === id) {
                    state.cartas1[i].selected = true;
                    state.seleccionados.push(state.cartas1[i])
                }

            }
            //----cartas2
            for (let i = 0; i < state.cartas2.length ; i++) {

                if (state.cartas2[i].id === id) {
                    state.cartas2[i].selected = true;
                    state.seleccionados.push(state.cartas2[i])
                }

            }
            
        },

        desSeleccionar: (state, action) => {
            const id = action.payload;
            //-----cartas1--
            for (let i = 0; i < state.cartas1.length ; i++) {

                if (state.cartas1[i].id === id) state.cartas1[i].selected = false;

            }
            //-----cartas1--
            for (let i = 0; i < state.cartas2.length ; i++) {

                if (state.cartas2[i].id === id) state.cartas2[i].selected = false;

            }
            
        },

        attackAll: (state, action)=>{

            const { attackprop } = action.payload;
            
            
            //-----cartas1
            for (let i = 0; i < state.cartas1.length ; i++) {

                if (state.cartas1[i].selected === true) {

                    state.cartas1[i].health = state.cartas1[i].health - attackprop;
                }

              }

              //-----cartas2
            for (let i = 0; i < state.cartas2.length ; i++) {

                if (state.cartas2[i].selected === true) {

                    state.cartas2[i].health = state.cartas2[i].health - attackprop;
                }

              }
        },

        attackSingle: (state, action) => {

            const { attackprop } = action.payload;

            if(state.seleccionados.length > 1) {

                state.error = 'Solo un objetivo';
                state.seleccionados = [];
                //--------carta1
                for (let i = 0; i < state.cartas1.length ; i++) {

                    state.cartas1[i].selected = false;
                    state.seleccionados.pop(state.cartas1[i])
                  }

                  //--------carta2
                for (let i = 0; i < state.cartas2.length ; i++) {

                    state.cartas2[i].selected = false;
                    state.seleccionados.pop(state.cartas2[i])
                  }

             }

            if(state.seleccionados.length  === 1){

                //-----carta1
                for (let i = 0; i < state.cartas1.length ; i++) {
                    if(state.cartas1[i].selected === true) {
                            state.cartas1[i].health = state.cartas1[i].health - attackprop;
                    }  
                  }

                //-----carta2
                for (let i = 0; i < state.cartas2.length ; i++) {
                    if(state.cartas2[i].selected === true) {
                            state.cartas2[i].health = state.cartas2[i].health - attackprop;
                    }  
                  }
            }
                   
        },
        cleanError: ( state ) => {
            state.error = '';
        }
    }
})

export const { seleccionar, attackAll, desSeleccionar, attackSingle, cleanError } = cartasSlice.actions;

export default cartasSlice.reducer;
