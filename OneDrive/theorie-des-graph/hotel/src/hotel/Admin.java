package hotel;
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
	
	
	
	

}

