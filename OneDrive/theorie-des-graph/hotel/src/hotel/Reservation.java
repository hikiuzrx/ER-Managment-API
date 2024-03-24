package hotel;
enum Etat {
    accepted,
    declined,
    notyet,

}
public class Reservation {
	
		private int id;//pour hash map
		private User user;//f la bdd 3ndy inteager id-user int    int l=id-integer, , user.id
		private DateProgramme dateDebut;
		private DateProgramme dateFin;
		private TypeChambre type;
		private Chambre chambre;
		private Etat etat;//accepted wla declinee, null
		
		private int nbOp=0;
		static int nbid=0;

	
	public Reservation(int iduser,int idchambre,String dateDebut,TypeChambre type, String dateFin, Etat etat) {
		this.dateDebut = DateProgramme.StringDateint(dateFin);
		this.dateFin = DateProgramme.StringDateint(dateFin);
		this.etat = etat;
		this.type=type;
		this.user=GestionMapBdd.RechercheuserParId(iduser);
		this.chambre=GestionMapBdd.RechercheChambreParId(idchambre);//fhed les fct g pas encore geree les err
	}
	
				
			public int getId() {
				return id;
			}
			public void setId(int id) {
				this.id = id;
			}
		
			public DateProgramme getDateDebut() {
				return dateDebut;
			}
			public void setDateDebut(DateProgramme dateDebut) {
				try {
					DateProgramme.verifdatevalide(dateDebut);
				this.dateDebut = dateDebut;}
				catch(IllegalArgumentException e) {
					throw e; /////////////////////////////////////
				}
			}
			public DateProgramme getDateFin() {
				return dateFin;
			}
			public void setDateFin(DateProgramme dateFin) {
				try {
			
					DateProgramme.verifdatevalide(dateFin);
				this.dateFin = dateFin;}
				catch(IllegalArgumentException e) {
					throw e; /////////////////////////////////////
				}
			}
			public Etat getEtat() {
				return etat;
			}
			public void setEtat(Etat etat) {
				this.etat = etat;
			}
			public int getNbOp() {
				return nbOp;
			}


			

			public void setNbOp(int i) {
				this.nbOp=i;
				
			}
			//methode reservation pas encore acceptee 
			//methode pour afficher toutes les reservation d une personne 


			public Chambre getChambre() {
				return chambre;
			}


			public void setChambre(Chambre chambre) {
				this.chambre = chambre;
			}


			public void setUser(User user) {
				this.user = user;
			}

			public User getUser() {
				return this.user;
			}


			public TypeChambre getType() {
				return type;
			}


			public void setType(TypeChambre type) {
				this.type = type;
			}


}
