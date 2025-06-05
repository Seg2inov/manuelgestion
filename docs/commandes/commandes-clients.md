---
sidebar_position: 1
---

# Les commandes client

Cette fenêtre vous permet de gérer vos commandes client.

Les commandes peuvent être **créées depuis l’interface caisse ou balance** et ensuite être **préparées ou complétées sur la partie gestion**.

Au lancement de la fenêtre, la liste des commandes apparait à l’écran. 

<div className="contenaireImg">
    ![logo de seg2inov](./assets/listecommande.png)
    </div>

|Bouton |Action |
|:--:|------|
| ![illustration aspect test](./assets/nouveau.PNG) | Créer une commande. |
| ![illustration aspect test](./assets/modification.PNG) | Modifier une commande. |
| ![illustration aspect test](./assets/suppression.PNG) | Supprimer une commande. |
| ![illustration aspect test](./assets/preparation.PNG) | Préparer une commande en cours. |
| ![illustration aspect test](./assets/parcommande.PNG) |Imprimer le détail de la sélection, commande par commande. |
| ![illustration aspect test](./assets/parproduit.PNG) | Imprimer le détail regroupé par produits des commandes sélectionnées. |
| ![illustration aspect test](./assets/edition.PNG) | Regrouper toutes les commandes sur le même affichage. |

## Créer une nouvelle commande client

Lors de la création d’une nouvelle commande, S2Cash vous demande de **sélectionner un client**. 

:::note
Une commande doit impérativement être associée à un client existant.
:::

|Sélectionnez le type de commande |Puis le type de retrait |
|:--:|------|
| ![illustration aspect test](./assets/typecommande.PNG) | ![illustration aspect test](./assets/typeretrait.PNG) |

Vous avez enfin la possibilité de **saisir une date et heure de livraison**, une **adresse** et un **commentaire**.

<div className="contenaireImg">
    ![logo de seg2inov](./assets/interface.png)
    </div>

:::note
Ces informations sont **facultatives**, vous pouvez cliquer sur enregistrer sans renseigner les zones. Ces informations pourront être **modifiées ultérieurement**.
:::

## Saisir et/ou préparer une commande client

L’interface de saisie et de préparation de commande se présente ainsi :

<div className="contenaireImg">
    ![logo de seg2inov](./assets/saisiecommande.png)
    </div>

Vous pouvez alors : 

|Bouton |Action |
|:--:|------|
| ![illustration aspect test](./assets/produits.PNG) | Ajouter un produit à la commande. Vous pouvez également ajouter un produit en saisissant directement son code dans la colonne CODE. |
| ![illustration aspect test](./assets/inserer.PNG) | Insérer une ligne vide dans la commande. |
| ![illustration aspect test](./assets/complement.PNG) | Modifier les informations complémentaires (type de commande ou de retrait, informations sur la livraison…). |
| ![illustration aspect test](./assets/client.PNG) | Accéder à la fiche du client. |
| ![illustration aspect test](./assets/modification.PNG) | Ouvrir la fiche du produit sélectionné en mode modification. |
| ![illustration aspect test](./assets/balance.PNG) | Lire le ticket d’une balance. |
| ![illustration aspect test](./assets/ticket.PNG) | Lire le ticket d'une caisse. |
| ![illustration aspect test](./assets/suppression.PNG) | Supprimer un produit de la commande. |
| ![illustration aspect test](./assets/enregistrer.PNG) | Enregistrer la commande en cliquant sur ce bouton, et ainsi pouvoir revenir dessus à tout moment. |
| ![illustration aspect test](./assets/imprimer.PNG) | Imprimer la commande. |

## Enregistrer une commande client 

Lorsque vous enregistrez une commande, S2Cash vous demande **si la préparation est terminée**.

<div className="contenaireImg">
    ![logo de seg2inov](./assets/confirmation.png)
    </div>

```OUI``` : la commande est complètement préparée, elle pourra donc être reprise dans l’interface caisse/balance via le bouton « Reprise Commande ».

```NON``` : la commande n’est pas complètement préparée, elle est enregistrée en vue de pouvoir revenir dessus et ne peut pas encore être reprise dans l’interface caisse/balance.
