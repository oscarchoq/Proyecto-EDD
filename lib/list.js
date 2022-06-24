class Nodo{
    info = 0;
    liga = null;
}

export class Lista{
    INICIO = null;
    canvas = null;

    inserta_inicio(DATO){
        
        var P = this.INICIO;
        var Q = new Nodo();
        Q.info = DATO;
        Q.liga = P;
        P = Q;

        this.INICIO = P;
    }

    inserta_final(DATO){ //DEBE AL MENOS EXISTIR UN NODO
        
        var P = this.INICIO;
        var T = P;
        while (T.liga != null){
            T = T.liga;
        }
        var Q = new Nodo();
        Q.info = DATO;
        Q.liga = null;
        T.liga = Q;
    }

    inserta_antes_X(DATO,X){
        var P = this.INICIO;
        var Q = P;
        var T;
        var BAND = 1; 
        while ( (Q.info != X) && (BAND == 1) ){
            if (Q.liga != null){
                T = Q;
                Q = Q.liga;
            }
            else{
                BAND = 0;
            }
        }
        if (BAND == 1){
            var R = new Nodo();
            R.info = DATO;
            if (P == Q){
                R.liga = P;
                P = R;
            }
            else{
                T.liga = R;
                R.liga = Q;
            }
        }
        else{
            //window.alert("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
            alert("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }

        this.INICIO = P;
    }

    inserta_despues_X(DATO,X){
        var P = this.INICIO;
        var Q = P;
        var BAND = 1; 
        while ( (Q.info != X) && (BAND == 1) ){
            if (Q.liga != null){
                Q = Q.liga;
            }
            else{
                BAND = 0;
            }
        }
        if (BAND == 1){
            var T = new Nodo();
            T.info = DATO;
            T.liga = Q.liga;
            Q.liga = T;
        }
        else{
            alert("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
    }

    elimina_inicio(){
        var Q = this.INICIO;
        this.INICIO = Q.liga;
    }

    elimina_ultimo(){
        
        var P = this.INICIO;
        var Q = P;
        var T;
        if (P.liga == null){
            P = null;
        }
        else{
            while (Q.liga != null){
                T = Q;
                Q = Q.liga;
            }
            T.liga = null;
        }
    }

    elimina_X(X){
        var P = this.INICIO;
        var Q = P;
        var T;
        var BAND = 1;
        while ( (Q.info != X) && (BAND == 1) ){
            if (Q.liga != null){
                T = Q;
                Q = Q.liga;
            }
            else{
                BAND = 0;
            }
        }
        if (BAND == 0){
            alert("EL ELEMENTO CON INFORMACION 'X' NO SE ENCUENTRA EN LA LISTA");
        }
        else{
            if (P == Q){
                P = Q.liga;
            }
            else{
                T.liga = Q.liga;
            }
        }
    }

    dibujarNodosLog(){

        var tmp = this.INICIO;
        var cad = '';
        while (tmp){
            cad += tmp.info+"->";
            tmp = tmp.liga; 
        }
        console.log(cad);
    }

    dibujarNodos(){

        var canvas=this.canvas; //es el rectangulo 
        var ctx = canvas.getContext('2d');
        var	tmp=this.INICIO;
       
        //limpiar el canva
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var x=0;
        var y=0;
        var ctd=0;				
        while(tmp!=null){

            //Dibujar rectangulo
            ctx.beginPath();
            ctx.fillStyle = "rgb(172,219,62)";
             ctx.fillRect (x,y, 55,30);
            //texto
            ctx.fillStyle="white";
            ctx.font = '15px Arial';
            ctx.fillText(tmp.info,x+20,y+20);
            ctx.closePath();

            //Dibujar flecha
            //linea de la flecha
            ctx.beginPath();
            ctx.moveTo(x+55,y+15);
            ctx.lineTo(x+55+20,y+15);
            ctx.closePath();
            ctx.stroke();
            //cabeza de la flecha
            ctx.beginPath();
            ctx.fillStyle="black";
            ctx.moveTo(x+55+20,y+10);
            ctx.lineTo(x+55+20+5,y+15);
            ctx.lineTo(x+55+20,y+20);
            ctx.closePath();
            ctx.fill();

            x=80*++ctd;
            tmp=tmp.liga;
        }
    }
}