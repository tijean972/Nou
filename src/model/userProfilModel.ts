import { List } from "lodash";
import { annonce } from "../model/annonceModel"
	
export interface userProfl {
    Userid : string;
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

