class Nodo{
    info = 0;
    ligaDer = null;
    ligaIzq = null;
}

export class ListaDoblementeEnlazada {
    
    INICIO = null;
    FIN = null;

    inserta_inicio(DATO){

        if (this.INICIO == null){
            let P = new Nodo();
            P.info = DATO;
            
            this.INICIO = P;
            this.FIN = P;
            
        }
        else{
            let P = this.INICIO;
            let Q = new Nodo();
            
            Q.info = DATO;
            Q.ligaDer = P;
            P.ligaIzq = Q;
            
            P = Q;
            this.INICIO = P;
        }
        
    }

    inserta_final(DATO){

        if (this.INICIO == null){
            return;
        }

        let F = this.FIN;
        let Q = new Nodo();
        Q.info = DATO;
        Q.ligaIzq = F;
        F.ligaDer = Q;

        this.FIN = Q;

    }

    inserta_antes_x(DATO, X){
    
        if (this.INICIO == null){
            return;
        }
        
        let P = this.INICIO;
        let Q = P;
        
        while (Q.ligaDer != null && Q.info != X){
            Q = Q.ligaDer;
        }
        
        if (Q.info == X){
            let T = new Nodo();
            T.info = DATO;
            T.ligaDer = Q;
            
            let R = Q.ligaIzq;
            Q.ligaIzq = T;
            
            if (P == Q){  //TIENE UN SOLO NODO
                P = T;
                T.ligaIzq = null; //OPCIONAL
            }
            else{
                R.ligaDer = T;
                T.ligaIzq = R;
            }
        }
        else{
            throw Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }

        this.INICIO = P;

    }

    inserta_despues_x(DATO, X){

        let P = this.INICIO;
        let F = this.FIN;
        let Q = P;
        let BAND = 1;
        
        while (Q.info != X && BAND == 1){
            if (Q.ligaDer != null){
                Q = Q.ligaDer;
            }
            else{
                BAND = 0;
            }
        }
        
        if (BAND == 1){
            let T = new Nodo();
            T.info = DATO;
            T.ligaDer = Q.ligaDer;
            Q.ligaDer = T;
            
            T.ligaIzq = Q;
            if (Q == F){
                F = T;
            }
            else{
                T.ligaDer.ligaIzq = T;
            }
        }
        else{
            throw Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.FIN = F;
    }

    elimina_inicio(){

        let P = this.INICIO;
        let F = this.FIN;
        let Q = P;

        if (Q.ligaDer != null){
            P = Q.ligaDer;
            P.ligaIzq = null;
        }
        else{
            P = null;
            F = null;
        }

        this.INICIO = P;
        this.FIN = F;

    }

    elimina_final(){

        let P = this.INICIO;
        let F = this.FIN;
        let Q = F;

        if (Q.ligaIzq != null){
            F = Q.ligaIzq;
            F.ligaDer = null;
        }
        else{
            P = null;
            F = null;
        }

        this.INICIO = P;
        this.FIN = F;

    }

    elimina_x(X){

        let P = this.INICIO;
        let F = this.FIN;
        let Q = P;

        while ( (Q.ligaDer != null) && (Q.info != X) ){
            Q = Q.ligaDer;
        }

        if (Q.info == X){
            if ( (Q == P) && (Q == F) ){ //SOLO TIENE UN NODO
                P = null;
                F = null;
            }
            else{
                if (Q == P){ //ES EL PRIMERO
                    P = Q.ligaDer;
                    P.ligaIzq = null;
                }
                else{
                    if (Q == F){ //ES EL ULTIMO
                        F = Q.ligaIzq;
                        F.ligaDer = null;
                    }
                    else{ //ES EL INTERMEDIO
                        let T = Q.ligaIzq;
                        let R = Q.ligaDer;
                        T.ligaDer = R;
                        R.ligaIzq = T;
                    }
                }
            }
        }
        else{
            throw Error("EL ELEMENTO CON INFORMACION X NO SE ENCUENTRA EN LA LISTA");
        }

        this.INICIO = P;
        this.FIN = F;

    }

    elimina_antes_x(X){

        let P = this.INICIO;
        let Q = P;

        while ( (Q.ligaDer != null) && (Q.info != X) ){
            Q = Q.ligaDer;
        }

        if (Q.info == X){
            if (Q == P){
                throw Error("NO EXISTE NODO ANTERIOR AL PRIMERO");
            }
            else{
                let T = Q.ligaIzq;
                if (P == T){ //ES PRIMER NODO
                    P = Q;
                    P.ligaIzq = null;
                }
                else{
                    let R = T.ligaIzq;
                    Q.ligaIzq = R;
                    R.ligaDer = Q;
                }
            }
        }
        else{
            throw Error("EL ELEMENTO CON INFORMACION X NO SE ENCUENTRA EN LA LISTA");
        }

        this.INICIO = P;

    }

    elimina_despues_x(X){

        let P = this.INICIO;
        let F = this.FIN;
        let Q = P;

        while ( (Q.ligaDer != null) && (Q.info != X) ){
            Q = Q.ligaDer;
        }

        if (Q.info == X){
            if (Q == F){
                throw Error("NO EXISTE NODO DESPUES DE X");
            }
            else{
                let T = Q.ligaDer;
                if (T == F){ //ULTIMO NODO
                    F = Q;
                    F.ligaDer = null;
                }
                else{
                    let tmp = T.ligaDer;
                    Q.ligaDer = tmp;
                    tmp.ligaIzq = Q;
                }
            }
        }
        else{
            throw Error("EL ELEMENTO CON INFORMACION X NO SE ENCUENTRA EN LA LISTA");
        }

        this.INICIO = P;
        this.FIN = F;

    }

    isVacio() {

        if (this.INICIO == null) {
            return true;
        } else {
            return false;
        }

    }

    buscar(DATO){

        let encontrado = false;
        let tmp = this.INICIO;

        while (tmp != null) {
            if (tmp.info == DATO) {
                encontrado = true;
                break;
            }
            tmp = tmp.ligaDer;
        }

        return encontrado;
    }

    dibujarNodosLog(){
        
        let P = this.INICIO;
        let F = this.FIN;
        let cad = '';

        //RECORRIDO DE IZQ A DER
        while (P != null){
            cad += P.info + "->";
            P = P.ligaDer;
        }
        console.log(cad);

        //RECORRIDO DE DER A IZQ
        cad = '';
        while (F != null){
            cad += "<-" + F.info;
            F = F.ligaIzq;
        }
        console.log(cad);
        
    }

    dibujarNodos(valor){
        
        var canvas = this.canvas; //es el rectangulo 
        var ctx = canvas.getContext('2d');
        var tmp = this.INICIO;

        //limpiar el canva
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var x = 0;
        var y = 0;
        var ctd = 0;

        //responsive canvas
        if (window.innerWidth < 800){
            canvas.width = window.innerWidth; //establecer la resolución para llenar la página
        }

        var nodo = null;

        while (tmp != null) {

            if (valor != undefined && tmp.info == valor) {
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "#808080"; // OSCURO
                ctx.fillRect(x, y, 55, 30);

                nodo = {};
                nodo.x = x;
                nodo.y = y;
                nodo.width = 55;
                nodo.height = 30;
                nodo.info = tmp.info;
            } else {
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "#3fada8"; // CLARO
                ctx.fillRect(x, y, 55, 30);
            }

            //texto
            ctx.fillStyle = "white";
            ctx.font = '17px Fredoka One';
            ctx.fillText(tmp.info, x + 20, y + 20);
            ctx.closePath();

            if(tmp.ligaDer != null){
                if(x > canvas.width-150){ // para que baje si supera el limite
                    //Dibujar flecha IZQ A DER
                    //FLECHA QUE VA A LA DERECHA 
                    ctx.beginPath();
                    ctx.moveTo(x + 55, y+ 10);
                    ctx.lineTo(x + 55 + 20, y+ 10);
                    ctx.closePath();
                    ctx.stroke();
                    //FLECHA QUE BAJA
                    ctx.beginPath();
                    ctx.moveTo(x + 55 + 20, y + 10);
                    ctx.lineTo(x + 55 + 20, y + 50);
                    ctx.closePath();
                    ctx.stroke();
                    ///fecha que va hacia la izquierda
                    ctx.beginPath();
                    ctx.moveTo(x + 55 + 20, y + 50);
                    ctx.lineTo(x + 33 - x, y + 50);
                    ctx.closePath();
                    ctx.stroke();
                    ///fecha que va para abajo
                    ctx.beginPath();
                    ctx.moveTo(x + 33 - x,y + 50);
                    ctx.lineTo(x + 33 - x,y + 55);
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle="black";
                    ctx.moveTo(x + 33 - x - 5, y + 55);
                    ctx.lineTo(x + 33 - x, y + 55 + 5);
                    ctx.lineTo(x + 33 - x + 5, y + 55);
                    ctx.closePath();
                    ctx.fill();

                    //Dibujar flecha DER A IZQ
                    //FLECHA QUE VA A LA DERECHA 
                    ctx.beginPath();
                    ctx.moveTo(x + 60, y + 20);
                    ctx.lineTo(x + 60 + 8, y + 20);
                    ctx.closePath();
                    ctx.stroke();
                    //FLECHA QUE BAJA
                    ctx.beginPath();
                    ctx.moveTo(x + 60 + 8, y + 20);
                    ctx.lineTo(x + 60 + 8, y + 43);
                    ctx.closePath();
                    ctx.stroke();
                    ///fecha que va hacia la izquierda
                    ctx.beginPath();
                    ctx.moveTo(x + 60 + 8, y + 43);
                    ctx.lineTo(x + 25 - x, y + 43);
                    ctx.closePath();
                    ctx.stroke();
                    ///fecha que va para abajo
                    ctx.beginPath();
                    ctx.moveTo(x + 25 - x,y + 43);
                    ctx.lineTo(x + 25 - x,y + 60);
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle = "black";
                    ctx.moveTo(x + 60, y + 15);
                    ctx.lineTo(x + 55, y + 20);
                    ctx.lineTo(x + 60, y + 25);
                    ctx.closePath();
                    ctx.fill();

                    ctd = 0;
                    x = 0;
                    y = y + 60;
                }
                else{
                    //Dibujar flecha IZQ A DER
                    //linea de la flecha
                    ctx.beginPath();
                    ctx.moveTo(x + 55, y + 10);//DESDE AQUI
                    ctx.lineTo(x + 55 + 20, y + 10);//HASTA AQUI
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle = "black";
                    ctx.moveTo(x + 55 + 20, y + 5);
                    ctx.lineTo(x + 55 + 20 + 5, y + 10);
                    ctx.lineTo(x + 55 + 20, y + 15);
                    ctx.closePath();
                    ctx.fill();

                    //Dibujar flecha DER A IZQ
                    //linea de la flecha
                    ctx.beginPath();
                    ctx.moveTo(x + 60, y + 20);//DESDE AQUI
                    ctx.lineTo(x + 60 + 20, y + 20);//HASTA AQUI
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle = "black";
                    ctx.moveTo(x + 60, y + 15);
                    ctx.lineTo(x + 55, y + 20);
                    ctx.lineTo(x + 60, y + 25);
                    ctx.closePath();
                    ctx.fill();
    
                    x = 80*++ctd;
                }
                
            }
            tmp = tmp.ligaDer;
        }

        if (nodo != null) {
            setTimeout(function() {
                ctx.beginPath();
                ctx.fillStyle = "#3fada8"; // CLARO
                ctx.fillRect(nodo.x, nodo.y, nodo.width, nodo.height);

                //texto
                ctx.fillStyle = "white";
                ctx.font = '17px Fredoka One';
                ctx.fillText(nodo.info, nodo.x + 20, nodo.y + 22);
                ctx.closePath();
            }, 500);
        }

    }

}