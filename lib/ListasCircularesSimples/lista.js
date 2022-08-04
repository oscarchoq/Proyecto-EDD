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

}