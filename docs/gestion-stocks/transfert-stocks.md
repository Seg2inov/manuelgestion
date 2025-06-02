---
sidebar_position: 3
---

# Transfert de stocks

Cette interface permet de **créer le transfert des produits vers ou depuis un autre magasin**.

Au lancement de la fenêtre, la liste des transferts en cours apparait.

<div className="contenaireImg">
    ![logo de seg2inov](./assets/ecrantransfert.png)
    </div>

Vous pouvez alors : 

![illustration aspect test](./assets/nouveau.PNG)    Créer un nouveau transfert de stocks.

![illustration aspect test](./assets/modification.PNG)    Modifier un ajustement de stocks en cours de préparation.

![illustration aspect test](./assets/suppression.PNG)    Supprimer un transfert de stocks, tant qu'il n'est pas validé.

## Créer un transfert de stocks

Lors de la création d’un nouveau transfert, la liste des magasins apparait. **Sélectionnez le magasin avec lequel vous allez agir** et cliquez sur ```VALIDER```.

<div className="contenaireImg">
    ![logo de seg2inov](./assets/listemagasins.png)
    </div>

Une fenêtre apparait : « Envoyez-vous les produits vers l’autre site ? »

<div className="contenaireImg">
    ![logo de seg2inov](./assets/confirmation.png)
    </div>

```OUI``` : Vous envoyez les produits vers le magasin sélectionné, ces derniers seront **retirés de votre stock**.

```NON``` : C’est le magasin sélectionné qui vous a envoyé les produits, ils seront donc **ajoutés à votre stock**.

## Saisir un transfert de stocks

Après avoir répondu à la question précédente, le tableau de saisie du transfert apparaît.

<div className="contenaireImg">
    ![logo de seg2inov](./assets/saisitransfert.png)
    </div>

|Bouton |Action |
|:--:|------|
| ![illustration aspect test](./assets/tinserer.PNG) | **Insérer une ligne vide**. |
| ![illustration aspect test](./assets/tproduits.PNG) | **Ajouter un produit**. Vous pouvez également ajouter un produit en saisissant directement son code dans la colonne ```CODE```. |
| ![illustration aspect test](./assets/tmodification.PNG) | **Ouvrir la fiche du produit sélectionné** en mode modification. |
| ![illustration aspect test](./assets/vidage.PNG) | Renseigner votre transfert de stock à l’aide d’un **terminal de saisie** (si paramétré). | 
| ![illustration aspect test](./assets/balance.PNG) | **Lire de ticket** d'une caisse ou d'une balance. | 
| ![illustration aspect test](./assets/tsupprimer.PNG) | **Supprimer** un produit. | 
| ![illustration aspect test](./assets/tenregistrer.PNG) | **Enregistrer l’ajustement sans le valider**, et ainsi pouvoir revenir dessus à tout moment. |
| ![illustration aspect test](./assets/valider.PNG) | **Valider** l'enregistrement. ```Attention``` : cette opération est irréversible. 
