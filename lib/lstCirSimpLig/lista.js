class Nodo{
    info = 0;
    liga = null;
}

export class ListaCircularSimple{
    
    INICIO = null;

    inserta_inicio(DATO){

        let P = this.INICIO;
        let Q = new Nodo();

        if (P == null){
            Q.info = DATO;
            Q.liga = Q;
            P = Q;
        }
        else{
            Q.info = DATO;
            let F = P;
            while (F.liga != P){ //BUSCA EL ULTIMO NODO
                F = F.liga;
            }
            F.liga = Q;
            Q.liga = P;
            P = Q;
        }
        this.INICIO = P;
    }

    inserta_final(DATO){

        let P = this.INICIO;
        let Q = new Nodo();

        let F = P;
        while (F.liga != P){ //BUSCA EL ULTIMO NODO
            F = F.liga;
        }
        Q.info = DATO;
        F.liga = Q;
        Q.liga = P;

        this.INICIO = P;
    }

    inserta_antes_x(DATO, X){

        let P = this.INICIO;
        let Q = P;
        let T = P;
        let BAND = 1;

        while (Q.info != X && BAND == 1){
            if (Q.liga != P){
                T = Q;
                Q = Q.liga;
            }
            else{
                BAND = 0;
            }
        }

        if (BAND == 1){
            let N = new Nodo();
            N.info = DATO;

            if (P == Q){ //PRIMER NODO
                
                let F = P;
                while (F.liga != P){ //BUSCA EL ULTIMO NODO
                    F = F.liga;
                }

                N.liga = P;
                P = N;
                F.liga = P;
            }
            else{
                T.liga = N;
                N.liga = Q;
            }
        }
        else{
            throw Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }

        this.INICIO = P;
    }

    inserta_despues_x(DATO, X){

        let P = this.INICIO;
        let Q = P;
        let BAND = 1;

        while (Q.info != X && BAND == 1){
            if (Q.liga != P){
                Q = Q.liga;
            }
            else{
                BAND = 0;
            }
        }

        if (BAND == 1){
            let T = new Nodo();
            T.info = DATO;
            T.liga = Q.liga;
            Q.liga = T;
        }
        else{
            throw Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }

        this.INICIO = P;
    }

    elimina_inicio(){

        let Q = this.INICIO;
        let F = Q;

        if (F.liga == Q){
            this.INICIO = null;
        }
        else{
            while (F.liga != Q){ //BUSCA EL ULTIMO NODO
                F = F.liga;
            }
            this.INICIO = Q.liga;
            F.liga = this.INICIO;
        }

    }

    elimina_final(){

        let P = this.INICIO;
        let Q = P;
        let T = new Nodo();
        
        if (P.liga == P){ //VERIFICA SI LA LISTA TIENE UN SOLO NODO
            this.INICIO = null;
        }
        else{
            while (Q.liga != P){
                T = Q;
                Q = Q.liga;
            }
            T.liga = P;
        }

    }

    elimina_x(X){

        let P = this.INICIO;
        let Q = P;
        let T;
        let BAND = 1;

        while (Q.info != X && BAND == 1){
            if (Q.liga != P){
                T = Q;
                Q = Q.liga;
            }
            else{
                BAND = 0;
            }
        }

        if (BAND == 0){
            throw Error("EL ELEMENTO CON INFORMACION 'X' NO SE ENCUENTRA EN LA LISTA");
        }
        else{

            if(P == Q){ //VERIFICA SI EL ELEMENTO A ELIMINAR ES EL PRIMER NODO
                
                if (P.liga == P){ //TIENE SOLO 1 ELEMENTO
                    P = null;
                }
                else{
                    let F = P;
                    while (F.liga != P){ //BUSCA EL ULTIMO NODO
                        F = F.liga;
                    }

                    P = Q.liga;
                    F.liga = P;
                }
            }
            else{
                T.liga = Q.liga;
            }
        }

        this.INICIO = P;
    }

    elimina_antes_x(X){

        let P = this.INICIO;
        let Q, T, R;
        let BAND;

        if (P.info == X){ // X ESTA AL INICIO

            //EL NODO ANTERIOR AL PRIMER ES EL ULTIMO

            if (P.liga == P){ //TIENE SOLO 1 ELEMENTO
                P = null;
            }
            else{
                let F = P;
                T = P;
                while (F.liga != P){
                    T = F;
                    F = F.liga;
                }

                T.liga = P;
            }
        }
        else{ // X NO ESTA EN EL INICIO
            Q = P;
            T = P;
            BAND = 1;

            while (Q.info != X && BAND == 1){
                if (Q.liga != P){
                    R = T;
                    T = Q;
                    Q = Q.liga;
                }
                else{
                    BAND = 0;
                }
            }

            if (BAND == 0){
                throw Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA");
            }
            else{

                if (P.liga == Q){ // EL ELEMENTO A ELIMINAR ES EL PRIMERO
                    
                    let F = P;
                    while (F.liga != P){ //BUSCA EL ULTIMO NODO
                        F = F.liga;
                    }

                    P = Q;
                    F.liga = P;
                }
                else{
                    R.liga = Q;
                }
            }
        }

        this.INICIO = P;
    }

    elimina_despues_x(X){

        let P = this.INICIO;
        let Q = P;
        let T;
        let BAND = 1;

        while (Q.info != X && BAND == 1){
            if (Q.liga != P){
                Q = Q.liga;
            }
            else{
                BAND = 0;
            }
        }

        if (BAND == 0){
            throw Error("EL NODO NO SE ENCUENTRA EN LA LISTA");
        }
        else{

            if (Q.liga == P){ //ELIMINAR PRIMERO

                if (P.liga == P){ // TIENE 1 ELEMENTO
                    P = null;
                }
                else{ // TIENE MAS DE 1 ELEMENTO
                    T = P.liga;
                    Q.liga = T;
                    P = T;
                }
            }
            else{
                T = Q.liga;
                Q.liga = T.liga;
            }
        }
        
        this.INICIO = P;
    }

    buscar(DATO) {

        var encontrado = false;
        let P = this.INICIO;
        let tmp = P;
        let BAND;

        if (tmp != null){
            BAND = 1;
            while (tmp.info != DATO && BAND == 1){
                if (tmp.liga != P){
                   tmp = tmp.liga;
                }
                else{
                    BAND = 0;
                }
            }

            if (BAND == 1){
                encontrado = true;
            }
        }

        return encontrado;
    }

    isVacio() {

        if (this.INICIO == null) {
            return true;
        } else {
            return false;
        }
    }

    dibujarNodosLog() {

        let tmp = this.INICIO;
        let cad = '';
        
        if (tmp != null){
            let F = tmp;
            if (F.liga == tmp){
                cad += tmp.info + "->";
                cad += tmp.liga.info;
            }
            else{
                while (F.liga != tmp){
                    cad += F.info + "->";
                    F = F.liga;
                }
                cad += F.info + "->";
                cad += F.liga.info;
            }
        }
        console.log(cad);
    }

    dibujarNodos(valor) {

        var canvas = this.canvas; //es el rectangulo 
        var ctx = canvas.getContext('2d');
        let tmp = this.INICIO;
        

        //limpiar el canva
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var x = 0;
        var y = 0;
        var ctd = 0;
        var aux = 0;

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
                ctx.fillStyle = "#5bb3ae"; // CLARO
                ctx.fillRect(x, y, 55, 30);
            }

            //texto
            ctx.fillStyle = "white";
            ctx.font = '17px Fredoka One';
            ctx.fillText(tmp.info, x + 20, y + 20);
            ctx.closePath();

            if (tmp.liga != this.INICIO){
                if (x > canvas.width-150){ //Baja si supera el limite
                    //Dibujar flecha
                    //FLECHA QUE VA A LA DERECHA 
                    ctx.beginPath();
                    ctx.moveTo(x + 55, y+ 15);
                    ctx.lineTo(x + 55 + 20, y+ 15);
                    ctx.closePath();
                    ctx.stroke();
                    //FLECHA QUE BAJA
                    ctx.beginPath();
                    ctx.moveTo(x + 55 + 20, y + 15);
                    ctx.lineTo(x + 55 + 20, y + 40);
                    ctx.closePath();
                    ctx.stroke();
                    ///fecha que va hacia la izquierda
                    ctx.beginPath();
                    ctx.moveTo(x + 55 + 20, y + 40);
                    ctx.lineTo(x + 27 - x + 80, y + 40);
                    ctx.closePath();
                    ctx.stroke();
                    ///fecha que va para abajo
                    ctx.beginPath();
                    ctx.moveTo(x + 27 - x + 80,y + 40);
                    ctx.lineTo(x + 27 - x + 80,y + 45);
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle="black";
                    ctx.moveTo(x + 27 - x + 80 - 5, y + 45);
                    ctx.lineTo(x + 27 - x + 80, y + 45 + 5);
                    ctx.lineTo(x + 27 - x + 80 + 5, y + 45);
                    ctx.closePath();
                    ctx.fill();
                    ctd = 0;////VER
                    x = 80;
                    y = y + 50;
                    aux = 1;
                }
                else{
                    //Dibujar flecha
                    //linea de la flecha
                    ctx.beginPath();
                    ctx.moveTo(x + 55, y + 15);//DESDE AQUI
                    ctx.lineTo(x + 55 + 20, y + 15);//HASTA AQUI
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle = "black";
                    ctx.moveTo(x + 55 + 20, y + 10);
                    ctx.lineTo(x + 55 + 20 + 5, y + 15);
                    ctx.lineTo(x + 55 + 20, y + 20);
                    ctx.closePath();
                    ctx.fill();

                    if (aux == 1){
                        x = (80*++ctd) + 80;
                    }
                    else{
                        x = 80*++ctd;
                    }
                }
            }
            else{
                //Dibujar flecha hasta el inicio
                //linea de la flecha
                ctx.beginPath();
                ctx.moveTo(x + 55, y + 15);//DESDE AQUI
                ctx.lineTo(x + 55 + 20, y + 15);//HASTA AQUI
                ctx.closePath();
                ctx.stroke();
                //FLECHA QUE BAJA
                ctx.beginPath();
                ctx.moveTo(x + 55 + 20, y + 15);
                ctx.lineTo(x + 55 + 20, y + 40);
                ctx.closePath();
                ctx.stroke();
                ///fecha que va hacia la izquierda
                ctx.beginPath();
                ctx.moveTo(x + 55 + 20, y + 40);
                ctx.lineTo(x + 27 - x, y + 40);
                ctx.closePath();
                ctx.stroke();
                //FLECHA QUE SUBE
                ctx.beginPath();
                ctx.moveTo(x + 27 - x, y + 40);
                ctx.lineTo(x + 27 - x, y - y + 30 + 5);
                ctx.closePath();
                ctx.stroke();
                //cabeza de la flecha
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(x + 27 - x - 5, y - y + 30 + 5);
                ctx.lineTo(x + 27 - x, y - y + 30);
                ctx.lineTo(x + 27 - x + 5, y - y + 30 + 5);
                ctx.closePath();
                ctx.fill();
            }

            if (tmp.liga == this.INICIO){
                break;
            }
            tmp = tmp.liga;

        }
        
        if (nodo != null) {
            setTimeout(function() {
                ctx.beginPath();
                ctx.fillStyle = "#3fada8"; //VERDE CLARO
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