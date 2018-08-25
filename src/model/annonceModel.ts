
import { List } from "lodash";


export interface annonce {
    idAnnonce: string;
    idEmmetteur: string;
    title: string;
    categorie: [string];
    competenceRequise: [string];
    contenu: string;
}