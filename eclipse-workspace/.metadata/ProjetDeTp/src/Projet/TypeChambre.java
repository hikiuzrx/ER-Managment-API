package Projet;

public enum TypeChambre {
    SOLO,
    DOUBLE,
    TRIPLE,
	SUITE;

    private float prix;

    TypeChambre() {
    	this.prix = 0;
    }

    public float getPrix() {
        return prix;
    }

    
    public void setPrix(float prix) {
        this.prix = prix;
    }
}