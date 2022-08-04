import {Lista} from './list.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let lista=null;

export async function agregar_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista = new Lista();
        lista.canvas = canvas;		
    }

    try{

        var DATO = await bootbox_prompt("INGRESE EL VALOR DEL NODO");
        if (DATO == null){ //BOTON CANCELAR (BOOTBOX)
            return;
        }

        if (DATO == ''){ // SI NO INGRESA NINGUN VALOR
            throw new Error("DEBE INGRESAR UN VALOR");
        }
        
        if (lista.buscar(DATO) == true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        
        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);

    }catch(e){
        await bootbox_alert(e.message);
    }
    
}

export async function agregar_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista = new Lista();	
        lista.canvas = canvas;	
    }
    
    try{
        
        if (lista.isVacio() == true){ //LA LISTA ESTA VACIA
            throw new Error("LA LISTA ESTA VACIA");
        }

        var DATO = await bootbox_prompt("INGRESE EL VALOR DEL NODO");
        if (DATO == null){ //BOTON CANCELAR (BOOTBOX)
            return;
        }

        if (DATO == ''){ // SI NO INGRESA NINGUN VALOR
            throw new Error("DEBE INGRESAR UN VALOR");
        }

        if (lista.buscar(DATO) == true){
            throw new Error("EL NODO YA SE INGRESO");
        }

        lista.inserta_final(DATO);	
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);

    }catch(e){
        await bootbox_alert(e.message);
    }

}

export async function agregar_antes_X(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    try{   

        if (lista.isVacio() == true){ //LA LISTA ESTA VACIA
            throw new Error("LA LISTA ESTA VACIA");
        }

        var DATO = await bootbox_prompt("INGRESE EL VALOR DEL DATO");
        if (DATO == null){ //BOTON CANCELAR (BOOTBOX)
            return;
        }    

        if (DATO == ''){ // SI NO INGRESA NINGUN VALOR
            throw new Error("DEBE INGRESAR UN VALOR");
        }

        if (lista.buscar(DATO) == true){
            throw new Error("EL NODO YA SE INGRESO");
        }

        var X = await bootbox_prompt("INGRESE EL VALOR DE X");  
        if (X == null){ //BOTON CANCELAR (BOOTBOX)
            return;
        }

        if (X == ''){ // SI NO INGRESA NINGUN VALOR
            throw new Error("DEBE INGRESAR UN VALOR");
        }

        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);

    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function agregar_despues_X(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    try{

        if (lista.isVacio() == true){ //LA LISTA ESTA VACIA
            throw new Error("LA LISTA ESTA VACIA");
        }

        var DATO = await bootbox_prompt("INGRESE EL VALOR DEL DATO");
        if (DATO == null){ //BOTON CANCELAR (BOOTBOX)
            return;
        }

        if (DATO == ''){ // SI NO INGRESA NINGUN VALOR
            throw new Error("DEBE INGRESAR UN VALOR");
        }

        if (lista.buscar(DATO) == true){
            throw new Error("EL NODO YA SE INGRESO");
        }

        var X = await bootbox_prompt("INGRESE EL VALOR DE X");
        if (X == null){ //BOTON CANCELAR (BOOTBOX)
            return;
        }

        if (X == ''){ // SI NO INGRESA NINGUN VALOR
            throw new Error("DEBE INGRESAR UN VALOR");
        }

        lista.inserta_despues_X(DATO,X);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);

    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminar_inicio(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }
    try{

        if (lista.isVacio() == true){ //LA LISTA ESTA VACIA
            throw new Error("LA LISTA ESTA VACIA");
        }
        
        lista.elimina_inicio();
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        
        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");

    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminar_final(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    try{

        if (lista.isVacio() == true){ //LA LISTA ESTA VACIA
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista.elimina_ultimo();
        lista.dibujarNodosLog();
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");

    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminar_X(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    try{

        if (lista.isVacio() == true){ //LA LISTA ESTA VACIA
            throw new Error("LA LISTA ESTA VACIA");
        }

        var X = await bootbox_prompt("INGRESE EL VALOR DEL NODO A ELIMINAR");
        if (X == null){ //BOTON CANCELAR (BOOTBOX)
            return;
        }

        if (X == ''){ // SI NO INGRESA NINGUN VALOR
            throw new Error("DEBE INGRESAR UN VALOR");
        }

        lista.elimina_X(X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");

    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminar_antes_X(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    try{

        if (lista.isVacio() == true){ //LA LISTA ESTA VACIA
            throw new Error("LA LISTA ESTA VACIA");
        }

        var X = await bootbox_prompt("INGRESE EL VALOR DE X");
        if (X == null){ //BOTON CANCELAR (BOOTBOX)
            return;
        }

        if (X == ''){ // SI NO INGRESA NINGUN VALOR
            throw new Error("DEBE INGRESAR UN VALOR");
        }

        lista.elimina_antes_X(X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");

    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminar_despues_X(){
    var canvas = document.getElementById('tutorial');
    if (lista == null){
        lista = new Lista();
        lista.canvas = canvas;
    }

    try{

        if (lista.isVacio() == true){ //LA LISTA ESTA VACIA
            throw new Error("LA LISTA ESTA VACIA");
        }

        var X = await bootbox_prompt("INGRESE EL VALOR DE X");
        if (X == null){ //BOTON CANCELAR (BOOTBOX)
            return;
        }

        if (X == ''){ // SI NO INGRESA NINGUN VALOR
            throw new Error("DEBE INGRESAR UN VALOR");
        }

        lista.elimina_despues_X(X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");

    }catch(e){
        await bootbox_alert(e.message);
    }
}