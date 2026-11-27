/* =====================================================================
   RÉGLAGES DE L'APPLI TÉLÉPHONE — à remplir une seule fois
   (voir INSTALLATION.md, étape 2)
   ===================================================================== */
window.RDF_CONFIG = {
  /* « ID d'application (client) » de l'inscription Microsoft Entra */
  clientId: "cfa180c1-8b95-4514-943b-19ab63beb42b",

  /* Locataire Microsoft 365 de MESSENT (le domaine suffit) */
  tenant: "messent.fr",

  /* Site SharePoint qui contient CHANTIERS\... */
  siteHost: "messent.sharepoint.com",
  sitePath: "/sites/MESSENT",

  /* Fichier de données écrit par l'appli bureau (chemin dans « Documents partagés ») */
  dataPath: "MESSENT ASSISTANCE/APPLICATION/RECHERCHE DE FUITE/donnees_fuites.json",

  /* Où les téléphones déposent les demandes qu'ils créent (le bureau les récupère) */
  demandesPath: "MESSENT ASSISTANCE/APPLICATION/RECHERCHE DE FUITE/DEMANDES TELEPHONE",

  /* Racine des dossiers d'intervention : <racine>/<année>/RECHERCHE DE FUITE/AGENCES|ENTREPRISES|PARTICULIERS */
  racineDossiers: "MESSENT ASSISTANCE",

  /* Facultatif : lien de partage du dossier RECHERCHE DE FUITE, si les ouvriers
     n'ont pas accès au site entier (sinon laisser vide) */
  shareUrl: ""
};
