import { List } from "lodash";

	
export interface userProfil {
    Userid : string;
    numeroTel: string;
    email: string;
    title: string;
    content: string;
    ProfilFacebook: JSON;
    ProfilLinkedin: JSON;
    ProfilInstagram:JSON;
    competence : List <string>;
}

