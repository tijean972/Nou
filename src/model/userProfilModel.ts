import { List } from "lodash";
import { annonce } from "../model/annonceModel"
	
export interface userProfl {
    id : string;
    numeroTel: string;
    email: string;
    title: string;
    content: string;
    ProfilFacebook: JSON;
    ProfilLinkedin: JSON;
    ProfilInstagram:JSON;
    competence : List <string>;
    annonces: List<annonce>;
    
}

