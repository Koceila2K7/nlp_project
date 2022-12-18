---
sidebar_position: 5
---

# Random forest

Random Forest est un modèle d'apprentissage automatique utilisé pour la classification et la régression. Il s'agit d'un ensemble de modèles de décision basés sur des arbres de décision, dans lesquels chaque arbre est entraîné sur une sous-partie aléatoire des données d'entraînement et sur un sous-ensemble aléatoire de caractéristiques.

Un arbre de décision est un modèle de prédiction qui consiste en une série de tests effectués sur les caractéristiques d'un échantillon pour déterminer sa classe. Un arbre de décision commence par une racine qui représente la variable à prédire et se divise en branches qui représentent les différentes valeurs possibles de cette variable. À chaque nœud de l'arbre, on effectue un test sur une caractéristique et on suit la branche correspondante en fonction du résultat de ce test. On continue ainsi jusqu'à arriver à une feuille de l'arbre, qui représente la prédiction finale pour l'échantillon.

Dans un modèle de forêt aléatoire, plusieurs arbres de décision sont entraînés de manière indépendante et leur sortie est combinée pour obtenir la prédiction finale. La prédiction finale est généralement obtenue en effectuant la moyenne des prédictions de chaque arbre pour la régression ou en effectuant un vote majoritaire pour la classification.

L'utilisation de plusieurs arbres de décision permet de réduire la variance des prédictions et de construire un modèle plus robuste. Random Forest est souvent utilisé dans de nombreux domaines, notamment la finance, la médecine et la science des données, pour prédire des variables cibles quantitatives ou qualitatives.

## 5 Random Forest

```bash
from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(max_depth=10, random_state=0)
bow_rf = rf.fit(cv_train, train_category)

bow_rf_test_predictions = bow_rf.predict(cv_test)

print(bow_rf_test_predictions)
print(test_category)

c = 0
for x,y in zip(test_category, bow_rf_test_predictions):
    if x == y:
        c+=1

print('Accuracy:',c/len(test_category))
#Accuracy: 0.8314606741573034
```
