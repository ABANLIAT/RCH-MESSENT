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
  dataPath: "CHANTIERS/2026/RECHERCHE DE FUITE/_APPLICATION/donnees_fuites.json",

  /* Facultatif : lien de partage du dossier RECHERCHE DE FUITE, si les ouvriers
     n'ont pas accès au site entier (sinon laisser vide) */
  shareUrl: ""
};
