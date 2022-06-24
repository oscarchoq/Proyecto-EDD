import {Lista} from './list.js';

let lista=null;

export function agregar(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista = new Lista();
        lista.canvas = canvas;		
    }
    
    var DATO = window.prompt("INGRESE EL VALOR DEL NODO");
    lista.inserta_inicio(DATO);
    lista.dibujarNodosLog();
    lista.dibujarNodos();
}

export function agregar_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista = new Lista();	
        lista.canvas = canvas;	
    }
    
    var DATO = window.prompt("INGRESE EL VALOR DEL NODO");
    lista.inserta_final(DATO);	
    lista.dibujarNodosLog();
    lista.dibujarNodos();

}