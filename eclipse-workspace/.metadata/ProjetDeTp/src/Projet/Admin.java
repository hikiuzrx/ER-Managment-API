package Projet;
import java.util.Date;
public class Admin {
	private int id;
	private String name;
	private String password;
	
	
	private int nbOp=0;
	static int nbid=0;//id pour hash map
	
	
	public Admin(int id,String name, String password) {
		this.name = name;
		this.password = password;
		this.id = id;

	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getNbOp() {
		return nbOp;
	}

	public void setNbOp(int nbOp) {
		this.nbOp = nbOp;
	}
	
	
	
	//a utiliser dans le main
	void creerchambre(int id ,int nbLit) {
		if(nbLit>0&&nbLit<=3) {
		Chambre chambre=new Chambre(id ,nbLit,0);
		GestionOperation.AjouterOpsChambreMap(chambre);
		}
	}
	
	void modifierchambrenblit(int id ,int nblit) {
		Chambre chambre=GestionMapBdd.RechercheChambreParId(id);
		if(chambre.getReservedatleastonce()==0) {
		chambre.setNbLit(nblit);
		GestionOperation.ModifierOpsChambreMap(chambre);//le id ne peut pas etre modified
		}else {
			//erreur
		}
			
		}
	
	void modifierPrixTypeChambre(float prixsolo,float prixdouble,float prixtriple) {
		 TypeChambre.SOLO.setPrix(prixsolo);
	        TypeChambre.DOUBLE.setPrix(prixdouble);
	        TypeChambre.TRIPLE.setPrix(prixtriple);
	        //peut etre ndiroulha sa propre bdd et sa propre hashmap
		
	}
	
	void supprimerchambre(int id) {
		Chambre chambre=GestionMapBdd.RechercheChambreParId(id);
		if(chambre.getReservedatleastonce()==0) {
		GestionOperation.SupprimerOpsChambreMap(chambre);
		}else {
			//erreur
		}
	}
	void accepterreservation(Reservation reservation) {
		reservation.setEtat(Etat.accepted);
		reservation.setChambre(GestionMapBdd.attribuerchambre(reservation.getType(), reservation.getDateDebut(), reservation.getDateFin()));
		GestionOperation.ModifierOpsReservation(reservation);
	}
	
	
	
	//hedy 0 je ne ss pas sur quel principe on devrra trouver la nv date
	void declinerreservation(Reservation reservation,DateProgramme datedebut,DateProgramme datefin) {
		reservation.setEtat(Etat.declined);
		reservation.setDateDebut(datedebut);//hna lzem nbdlha pour trouver la date de decline
		reservation.setDateFin(datefin);
		GestionMapBdd.attribuerchambre(null, datedebut, datefin);
		GestionOperation.ModifierOpsReservation(reservation);
	}
	//ky nzidou date actuelle ndirou chaque jour le prgrm s execute zyn7y les reservation
	//ly la date dylhm fett

}

