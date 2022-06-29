import {Lista} from './list.js';

let lista=null;

export function agregar(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista = new Lista();
        lista.canvas = canvas;		
    }

    try{
        var DATO = window.prompt("INGRESE EL VALOR DEL NODO");
        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        window.alert(e.message);
    }
    
}

export function agregar_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista = new Lista();	
        lista.canvas = canvas;	
    }

    try{
        var DATO = window.prompt("INGRESE EL VALOR DEL NODO");
        lista.inserta_final(DATO);	
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        window.alert(e.message);
    }

}

export function agregar_antes_X(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    try{
        var DATO = window.prompt("INGRESE EL VALOR DEL DATO");
        var X = window.prompt("INGRESE EL VALOR DE X");
        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        window.alert(e.message);
    }
}

export function agregar_despues_X(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    try{
        var DATO = window.prompt("INGRESE EL VALOR DEL DATO");
        var X = window.prompt("INGRESE EL VALOR DE X");
        lista.inserta_despues_X(DATO,X);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        window.alert(e.message);
    }
}

export function eliminar_inicio(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    try{
        lista.elimina_inicio();
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    }catch(e){
        window.alert(e.message);
    }
}

export function eliminar_final(){
    var canvas = document.getElementById('tutorial');
    if (lista != null){ // no agregar si no existe lista
    }

    try{
        lista.elimina_ultimo();
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    }catch(e){
        window.alert(e.message);
    }  
}

export function eliminar_X(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    try{
        var X = window.prompt("INGRESE EL VALOR DEL NODO A ELIMINAR");
        lista.elimina_X(X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    }catch(e){
        window.alert(e.message);
    }
}

export function eliminar_antes_X(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    try{
        var X = window.prompt("INGRESE EL VALOR DE X");
        lista.elimina_antes_X(X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    }catch(e){
        window.alert(e.message);
    }
}

export function eliminar_despues_X(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    try{
        var X = window.prompt("INGRESE EL VALOR DE X");
        lista.elimina_despues_X(X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    }catch(e){
        window.alert(e.message);
    }
}