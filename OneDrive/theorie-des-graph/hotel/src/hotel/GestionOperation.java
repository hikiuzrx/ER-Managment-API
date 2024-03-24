package hotel;
import java.util.HashMap;

public class GestionOperation {

	static HashMap<Integer, Operation<Chambre>> ChambreOps = new HashMap<>();
	static HashMap<Integer, Operation<User>> UserOps = new HashMap<>();
	static HashMap<Integer, Operation<Reservation>> reservationOps = new HashMap<>();
	
	
	 static void AjouterOpsChambreMap(Chambre chambre) {
		 	ChambreOps.put(Integer.parseInt(String.valueOf(chambre.getId())+String.valueOf(chambre.getNbOp())),new Operation<Chambre>(TypeOperation.AJOUT, chambre));
		 	chambre.setNbOp(chambre.getNbOp()+1);
		 	GestionMapBdd.AjouterChambreMap(chambre);
	 }
	 static void AjouterOpsUserMap(User user) {
		 //verif adresse mail
	        UserOps.put(Integer.parseInt(String.valueOf(user.getId())+String.valueOf(user.getNbOp())),new Operation<User>(TypeOperation.AJOUT, user));
			user.setNbOp(user.getNbOp() + 1);
			GestionMapBdd.AjouterUserMap(user);
	 }
	 static void AjouterOpsReservation(Reservation reservation) {
	        reservationOps.put(Integer.parseInt(String.valueOf(reservation.getId())+String.valueOf(reservation.getNbOp())),new Operation<Reservation>(TypeOperation.AJOUT, reservation));
	        reservation.setNbOp(reservation.getNbOp() + 1);
	        GestionMapBdd.AjouterReservationMap(reservation);
	 }
	 
	 

	static void SupprimerOpsChambreMap(Chambre chambre) {
		ChambreOps.put(Integer.parseInt(String.valueOf(chambre.getId())+String.valueOf(chambre.getNbOp())),new Operation<Chambre>(TypeOperation.SUPPRESSION, chambre));
		chambre.setNbOp(chambre.getNbOp() + 1);
		GestionMapBdd.SupprimerChambreMap(chambre);
	}
	 static void SupprimerOpsUserMap(User user) {
		  UserOps.put(Integer.parseInt(String.valueOf(user.getId())+String.valueOf(user.getNbOp())),new Operation<User>(TypeOperation.SUPPRESSION, user));
		  user.setNbOp(user.getNbOp() + 1);
		  GestionMapBdd.SupprimerUserMap(user);
	 }
	 static void SupprimerOpsReservation(Reservation reservation) {
		 reservationOps.put(Integer.parseInt(String.valueOf(reservation.getId())+String.valueOf(reservation.getNbOp())),new Operation<Reservation>(TypeOperation.SUPPRESSION, reservation));
		 reservation.setNbOp(reservation.getNbOp() + 1);
		 GestionMapBdd.SupprimerReservationMap(reservation);
	 }
	 
	 
	 
	static void ModifierOpsChambreMap(Chambre chambre) {
		ChambreOps.put(Integer.parseInt(String.valueOf(chambre.getId())+String.valueOf(chambre.getNbOp())),new Operation<Chambre>(TypeOperation.MODIFICATION, chambre));
		chambre.setNbOp(chambre.getNbOp() + 1);
		GestionMapBdd.ModifierChambreMap(chambre);
	}//ici le id reste tjr le mm
	 static void ModifierOpsUserMap(User user) {
		UserOps.put(Integer.parseInt(String.valueOf(user.getId())+String.valueOf(user.getNbOp())),new Operation<User>(TypeOperation.MODIFICATION, user));
		user.setNbOp(user.getNbOp() + 1);
		GestionMapBdd.ModifierUserMap(user);
	 }
	 static void ModifierOpsReservation(Reservation reservation) {
		reservationOps.put(Integer.parseInt(reservation.getId()+String.valueOf(reservation.getNbOp())),new Operation<Reservation>(TypeOperation.MODIFICATION, reservation));
		reservation.setNbOp(reservation.getNbOp() + 1);
		GestionMapBdd.SupprimerReservationMap(reservation);
	 }
}
