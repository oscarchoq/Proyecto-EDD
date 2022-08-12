class Nodo{
    info = 0;
    ligaDer = null;
    ligaIzq = null;
}

export class ListaDoblementeEnlazada {
    
    INICIO = null;
    FIN = null;

    inserta_inicio(DATO){

        if (INICIO == NULL){
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
}