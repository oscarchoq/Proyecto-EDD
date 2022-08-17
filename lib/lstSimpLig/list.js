class Nodo {
    info = 0;
    liga = null;
}

export class Lista {
    INICIO = null;
    canvas = null;

    inserta_inicio(DATO) {

        var P = this.INICIO;
        var Q = new Nodo();
        Q.info = DATO;
        Q.liga = P;
        P = Q;

        this.INICIO = P;
    }

    inserta_final(DATO) { //DEBE AL MENOS EXISTIR UN NODO

        var P = this.INICIO;
        var T = P;
        while (T.liga != null) {
            T = T.liga;
        }
        var Q = new Nodo();
        Q.info = DATO;
        Q.liga = null;
        T.liga = Q;
    }

    inserta_antes_X(DATO, X) {

        var P = this.INICIO;
        var Q = P;
        var T;
        var BAND = 1;
        while ((Q.info != X) && (BAND == 1)) {
            if (Q.liga != null) {
                T = Q;
                Q = Q.liga;
            } else {
                BAND = 0;
            }
        }
        if (BAND == 1) {
            var R = new Nodo();
            R.info = DATO;
            if (P == Q) {
                R.liga = P;
                P = R;
            } else {
                T.liga = R;
                R.liga = Q;
            }
        } else {
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }

        this.INICIO = P;
    }

    inserta_despues_X(DATO, X) {

        var P = this.INICIO;
        var Q = P;
        var BAND = 1;
        while ((Q.info != X) && (BAND == 1)) {
            if (Q.liga != null) {
                Q = Q.liga;
            } else {
                BAND = 0;
            }
        }
        if (BAND == 1) {
            var T = new Nodo();
            T.info = DATO;
            T.liga = Q.liga;
            Q.liga = T;
        } else {
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
    }

    elimina_inicio() {

        var Q = this.INICIO;
        this.INICIO = Q.liga;
    }

    elimina_ultimo() {

        var P = this.INICIO;
        var Q = P;
        var T;
        if (P.liga == null) {
            P = null;
        } else {
            while (Q.liga != null) {
                T = Q;
                Q = Q.liga;
            }
            T.liga = null;
        }
        this.INICIO = P;
    }

    elimina_X(X) {

        var P = this.INICIO;
        var Q = P;
        var T;
        var BAND = 1;
        while ((Q.info != X) && (BAND == 1)) {
            if (Q.liga != null) {
                T = Q;
                Q = Q.liga;
            } else {
                BAND = 0;
            }
        }
        if (BAND == 0) {
            throw new Error("EL ELEMENTO CON INFORMACION 'X' NO SE ENCUENTRA EN LA LISTA");
        } else {
            if (P == Q) {
                P = Q.liga;
            } else {
                T.liga = Q.liga;
            }
        }
        this.INICIO = P;
    }

    elimina_antes_X(X) {

        var P = this.INICIO;
        var Q, T, R, BAND;
        if (P.info == X) {
            throw new Error("NO EXISTE UN NODO QUE PRECEDA AL QUE CONTIENE A 'X'");
        } else {
            Q = P;
            T = P;
            BAND = 1;
            while ((Q.info != X) && (BAND == 1)) {
                if (Q.liga != null) {
                    R = T;
                    T = Q;
                    Q = Q.liga;
                } else {
                    BAND = 0;
                }
            }
            if (BAND == 0) {
                throw new Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA");
            } else {
                if (P.liga == Q) {
                    P = Q;
                } else {
                    R.liga = Q;
                }
            }
        }
        this.INICIO = P;
    }

    elimina_despues_X(X) {

        var P = this.INICIO;
        var Q, T;
        var BAND;
        if (P.liga == null) {
            throw new Error("NO EXISTE UN NODO POSTERIOR AL QUE CONTIENE A 'X'");
        } else {
            Q = P;
            BAND = 1;
            while ((Q.info != X) && (BAND == 1)) {
                if (Q.liga != null) {
                    Q = Q.liga;
                    T = Q.liga;
                } else {
                    BAND = 0;
                }
            }
            if (Q == P) {
                P.liga = P.liga.liga;
            } else {
                if (BAND == 0) {
                    throw new Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA");
                } else {
                    if (T != null) {
                        Q.liga = T.liga;
                    } else {
                        throw new Error("NO EXISTE UN NODO POSTERIOR AL QUE CONTIENE A 'X'");
                    }
                }
            }
        }
    }

    buscar(DATO) {

        var encontrado = false;
        var tmp = this.INICIO;

        while (tmp != null) {
            if (tmp.info == DATO) {
                encontrado = true;
                break;
            }
            tmp = tmp.liga;
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

        var tmp = this.INICIO;
        var cad = '';
        while (tmp) {
            cad += tmp.info + "->";
            tmp = tmp.liga;
        }
        console.log(cad);
    }

    dibujarNodos(valor) {

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
                ctx.fillStyle = "#808080"; //VERDE OSCURO
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

            if(tmp.liga != null){
                if(x > canvas.width-150){ // para que baje si supera el limite
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
                    ctx.lineTo(x + 27 - x, y + 40);
                    ctx.closePath();
                    ctx.stroke();
                    ///fecha que va para abajo
                    ctx.beginPath();
                    ctx.moveTo(x + 27 - x,y + 40);
                    ctx.lineTo(x + 27 - x,y + 45);
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle="black";
                    ctx.moveTo(x + 27 - x - 5, y + 45);
                    ctx.lineTo(x + 27 - x, y + 45 + 5);
                    ctx.lineTo(x + 27 - x + 5, y + 45);
                    ctx.closePath();
                    ctx.fill();
                    ctd = 0;
                    x = 0;
                    y = y + 50;
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
    
                    x = 80*++ctd;
                }
                
            }
            tmp = tmp.liga;
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