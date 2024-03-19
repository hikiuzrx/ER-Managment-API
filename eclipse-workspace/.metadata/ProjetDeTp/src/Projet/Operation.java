package Projet;
enum TypeOperation {
    AJOUT,
    SUPPRESSION,
    MODIFICATION
}
public class Operation<S> {

    private S object; // chambre,user,etc.....
    private TypeOperation type; // represente le type d'operation ajout..etc

    public Operation(TypeOperation type,S object) {
    	this.type=type;
    	this.object=object;
    }

    public S getOperationSur() {
        return object;
    }

    public void setOperationSur(S object) {
        this.object = object;
    }

    public TypeOperation getType() {
        return type;
    }

    public void setType(TypeOperation type) {
        this.type = type;
    }

  
}