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

export function agregar_antes_X(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    var DATO = window.prompt("INGRESE EL VALOR DEL DATO");
    var X = window.prompt("INGRESE EL VALOR DE X");
    lista.inserta_antes_X(DATO,X);
    lista.dibujarNodosLog();
    lista.dibujarNodos();
}

export function agregar_despues_X(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    var DATO = window.prompt("INGRESE EL VALOR DEL DATO");
    var X = window.prompt("INGRESE EL VALOR DE X");
    lista.inserta_despues_X(DATO,X);
    lista.dibujarNodosLog();
    lista.dibujarNodos();
}

export function eliminar_inicio(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    lista.elimina_inicio();
    lista.dibujarNodosLog();
    lista.dibujarNodos();
}

export function eliminar_final(){
    var canvas = document.getElementById('tutorial');
    if (lista != null){ // no agregar si no existe lista
    }
    
    lista.elimina_ultimo();
    lista.dibujarNodosLog();
    lista.dibujarNodos();
}