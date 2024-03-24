package hotel;

public class Chambre{
	private int id;
	private int nbLit;
	private TypeChambre type;
	private int reservedatleastonce;  //0 means no
	private int nbOp=0;
	static int nbid=0;


		public Chambre(int id ,int nbLit,int reservedatleastonce) {
			this.id=id;
			this.nbLit = nbLit;
			if(nbLit==1) {
			type=TypeChambre.SOLO;
			}else {
			if(nbLit==2) {
			type=TypeChambre.DOUBLE;
			}else {
			if(nbLit==3) 	{
			type=TypeChambre.TRIPLE;
			}else if(nbLit==4)
		{
				type=TypeChambre.SUITE;
				}}
		}
			this.reservedatleastonce=reservedatleastonce;
		
			
		}
		
		public int getNbLit() {
			return nbLit;
		}
		public void setNbLit(int nbLit) {
			this.nbLit = nbLit;
			if(nbLit==1) {
				type=TypeChambre.SOLO;
				}else {
				if(nbLit==2) {
				type=TypeChambre.DOUBLE;
				}else {
				if(nbLit==3) 	{
				type=TypeChambre.TRIPLE;
				}}}
		}
		
		public TypeChambre getType() {
			return type;
		}
		public void setType(TypeChambre type) {
			this.type = type;
		}
		
		
		
		public int getId() {
			return id;
		}
		
		public int getNbOp() {
			return nbOp;
		}
		public void setNbOp(int nbOp) {
			this.nbOp = nbOp;
		}

		public int getReservedatleastonce() {
			return reservedatleastonce;
		}

		public void setReservedatleastonce(int reservedatleastonce) {
			this.reservedatleastonce = reservedatleastonce;
		}

}
