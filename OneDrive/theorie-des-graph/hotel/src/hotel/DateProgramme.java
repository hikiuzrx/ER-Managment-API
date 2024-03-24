package hotel;

public class DateProgramme {
int jour;
int mois;
int annee;
	public DateProgramme(int jour, int mois, int annee) {
	super();
	this.jour = jour;
	this.mois = mois;
	this.annee = annee;
}
	
	static DateProgramme StringDateint(String date) {
		
        int SlashIndex1= date.indexOf('/');
        int SlashIndex2= date.lastIndexOf('/');

        
        String jourDebutString = date.substring(0, SlashIndex1);
        String moisDebutString = date.substring(SlashIndex1+ 1, SlashIndex2);
        String anneeDebutString = date.substring(SlashIndex2+ 1);

        int jour = Integer.parseInt(jourDebutString);
        int mois = Integer.parseInt(moisDebutString);
        int annee = Integer.parseInt(anneeDebutString);
		return new DateProgramme(jour,mois,annee);
	}
	
	
	
	static int CalculNbrJour(DateProgramme datedebut,DateProgramme datefin) {
	
		DateProgramme date1=datedebut;
		DateProgramme date2=datefin;
        
       try  {
        int nbrjour=0;
        int j=date1.mois;
        int k=date1.annee;
       verifdatevalide(date1,date2);
       while(k<=date2.annee) {
       while (j != date2.mois) {
    	    if (j == date1.mois) {
    	       
    	        nbrjour = nbrjourdanslemois(j,k) - date1.jour;
    	    } else {

    	       
    	        nbrjour =nbrjour+nbrjourdanslemois(j,k);
    	    }
    	    
    	    j++;
    	    if (j > 12) {
    	        j = 1; 
    	    }
    	}
       k++;
       }
       return nbrjour;
       }catch(IllegalArgumentException e) {
    	throw e;//wla un autre msg d erreur 
       }
       
        
}

static int nbrjourdanslemois(int mois,int annee) {
    switch (mois) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2: 
        	if (estBissextile(annee))
            return 29;
        else
            return 28;
        default:
        	 throw new IllegalArgumentException("mois invalide : " + mois);
    }
}

static void verifdatevalide(DateProgramme date) {
	if(date.jour<=nbrjourdanslemois(date.mois,date.annee)&&date.mois<=12) {

	}else {
		 throw new IllegalArgumentException("Date invalide : " + date.jour + "/" + date.mois + "/" + date.annee); 
	}
	
}

static void verifdatevalide(DateProgramme date1,DateProgramme date2) {//ici il vas verifier si datedebut<datefin
	 verifdatevalide(date1);
     verifdatevalide(date2);
	if((date1.annee<date2.annee)||(date1.annee==date2.annee&&date1.mois<date2.mois)||(date1.annee==date2.annee&&date1.mois==date2.mois&&date1.jour==date2.jour)){
	}else {
		 throw new IllegalArgumentException("Dates invalide : date1>date2"); 
	}
}

static int comparer(DateProgramme date1,DateProgramme date2) {
	if(date1.annee<date2.annee) {
		return -1;
	}else {
		if(date1.annee>date2.annee) {
			return 1;
		}else{
			if(date1.mois<date2.mois) {
				return -1;	
		}else {
			if(date1.mois>date2.mois) {
				return 1;
			}else {
				if(date1.jour<date2.jour) {
					return -1;
				}else {
					if(date1.jour>date2.jour) {
						return 1;
					}else {
						return 0;
					}
				}
			}
		}
			}
	}
}
static boolean estBissextile(int annee) {
	if((annee % 4 == 0 && annee % 100 != 0) || (annee % 400 == 0)) {	
    return true;
	}
	else {
		return false;}
}
static boolean verifdatenoncoincide(DateProgramme datedebut1, DateProgramme datefin1, DateProgramme datedebut2, DateProgramme datefin2) {
   
    if (comparer(datefin1, datedebut2) < 0 || comparer(datefin2, datedebut1) < 0) {
        return true; 
    } else {
        return false; 
    }
}
}
