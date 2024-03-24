package hotel;


public class User {
	private int id;
	private String name;
	private String gmail;
	private String password;

	static int nbid=0;
	private int nbOp=0;



	public User(int id,String name,String gmail, String password) {
	
		this.gmail = gmail;
		this.name = name;
		this.password = password;
		this.id = id;
	
	}

	public String getGmail() {
		return gmail;
	}

	public void setGmail(String gmail) {
		this.gmail = gmail;
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
	
	
	
	


}
