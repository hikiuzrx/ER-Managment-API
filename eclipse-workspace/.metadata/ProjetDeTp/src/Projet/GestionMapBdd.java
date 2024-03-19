package Projet;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;


public class GestionMapBdd{

static HashMap<Integer,Chambre> chambreMap = new HashMap<>();
static HashMap<Integer,User> userMap = new HashMap<>();
static HashMap<Integer,Admin> adminMap = new HashMap<>();
static HashMap<Integer,Reservation> reservationMap = new HashMap<>();



// le nb id sert comme id pour les hash map

	static void AjouterChambreMap(Chambre chambre) {
		chambreMap.put(chambre.getId(),chambre);
		Chambre.nbid++;
	}
	static void AjouterUserMap(User user) {
	     userMap.put(user.getId(), user);
	     User.nbid++;
	}
	static void AjouterAdminMap(Admin admin) {
	     adminMap.put(admin.getId(),admin);
	     Admin.nbid++;
	}
	static void AjouterReservationMap(Reservation reservation ) {
		reservation.setId(Reservation.nbid);
	     reservationMap.put(reservation.getId(),reservation);
	     Reservation.nbid++;
	}
	 
	 

	static void SupprimerChambreMap(Chambre chambre) {
		chambreMap.remove(chambre.getId());
	}
	static void SupprimerUserMap(User user) {
		userMap.remove(user.getId());
	}
	static void SupprimerAdminMap(Admin admin) {
  		adminMap.remove(admin.getId());
	}
	static void SupprimerReservationMap(Reservation reservation) {
		reservationMap.remove(reservation.getId());
	}
	
	
	
	static void ModifierChambreMap(Chambre chambrenew) {
		chambreMap.replace(chambrenew.getId(), chambrenew);
	}
	static void ModifierUserMap(User usernew) {
		userMap.replace(usernew.getId(),usernew);
	}
	static void ModifierAdminMap(Admin adminnew) {
		adminMap.replace(adminnew.getId(),adminnew);
	}
	static void ModifierReservationMap(Reservation reservation) {
		reservationMap.replace(reservation.getId(),reservation);
	}
	
	
	
	//hna w9il GHLEEEEEEEEET accee direct mfhmtch elh drt b itterateur
	

	static Chambre RechercheChambreParId(int id) {
		return chambreMap.get(id);
		
	}
	static User RechercheuserParId(int id) {
	  return userMap.get(id);
	}
	static Reservation RecherchereservationParId(int id) {
	return reservationMap.get(id);
		
	}
	static Admin RechercheadminParId(int id) {
		return adminMap.get(id);
	}

static boolean verifchambrenonreservee(int id,DateProgramme datedebut,DateProgramme datefin) {
	 Iterator<Map.Entry<Integer, Reservation>> iterator = reservationMap.entrySet().iterator();
     while (iterator.hasNext()) {
         Map.Entry<Integer, Reservation> entry = iterator.next();

         Reservation reservation = entry.getValue();

         if (reservation.getChambre().getId() == id) {
         	if(!DateProgramme.verifdatenoncoincide(datedebut, datefin, reservation.getDateDebut(), reservation.getDateFin())) {
             return false;
         }
         	
         }
         
     }
     return true;
	
	
}
	//ici j ai utilisee le meme id de celle qu on vas changer psq on a pas droit de toucher au id
	
	static Chambre attribuerchambre(TypeChambre type,DateProgramme date1,DateProgramme date2) {
		 Iterator<Map.Entry<Integer, Chambre>> iterator = chambreMap.entrySet().iterator();
	 
		 while (iterator.hasNext()) {
	            Map.Entry<Integer, Chambre> entry = iterator.next();
	            Chambre chambre=entry.getValue();
	            if(chambre.getType()==type) {
	            	boolean nonreserve=verifchambrenonreservee(chambre.getId(),date1,date2);
	            	if(nonreserve) {
	            		chambre.setReservedatleastonce(1);
 	/////////
	            		return chambre;
	            	}
	            	
	            }
	            }
		 	return null;
	        }
		
	

	
	void remplissageMapDepuisBdd() {
		//hna code pour remplire les hash map par la Bdd en utilisant hed les fonctions  
	}
	void remplissageBddDepuisMap() {
		//hna code pour remplire la bdd mn les map ly rhm 3ndna
	}
	
	
	
	
}
