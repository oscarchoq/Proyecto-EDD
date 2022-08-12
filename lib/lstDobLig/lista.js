class Nodo{
    info = 0;
    ligaDer = null;
    ligaIzq = null;
}

export class ListaDoblementeEnlazada {
    
    INICIO = null;
    FIN = null;

    inserta_inicio(DATO){

        if (INICIO == null){
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
        let Q = P;

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

}