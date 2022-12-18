---
sidebar_position: 4
---

# Logistic Regression

La régression logistique est un modèle de classification utilisé en apprentissage automatique pour prédire une variable cible qui prend deux valeurs possibles (par exemple, oui/non, vrai/faux). Elle est souvent utilisée pour prédire l'appartenance d'un échantillon à l'une ou l'autre des classes.

La régression logistique est basée sur une fonction de régression logistique, qui est une fonction mathématique utilisée pour modéliser la probabilité d'appartenance à l'une des classes en fonction de différentes variables explicatives (également appelées variables indépendantes ou caractéristiques). La régression logistique utilise cette fonction pour estimer la probabilité de chaque classe pour chaque échantillon en fonction des valeurs des variables explicatives.

Pour entraîner un modèle de régression logistique, on utilise un jeu de données d'entraînement qui comprend des échantillons avec leurs valeurs de variables explicatives et leur valeur de la variable cible connue. On utilise ces données pour ajuster les coefficients de la fonction de régression logistique de manière à minimiser l'erreur de prédiction du modèle. Une fois le modèle entraîné, on peut utiliser les coefficients ajustés pour prédire la classe d'un nouvel échantillon en fonction de ses valeurs de variables explicatives.

La régression logistique est souvent utilisée dans de nombreux domaines, tels que la médecine, le marketing et la finance, pour prédire la probabilité d'un événement futur (par exemple, la probabilité qu'un patient développe une maladie, la probabilité qu'un client achète un produit ou la probabilité qu'une entreprise dépose son bilan). Elle est également souvent utilisée comme base pour construire d'autres modèles de classification plus complexes.

```bash
from sklearn.model_selection import train_test_split
X = df['cleaned_news'].values.tolist()
y = df['category'].values.tolist()
```

## 4.1 Logistic Regression with Bag of words

```bash
from sklearn.linear_model import LogisticRegressionCV

bow_lr = LogisticRegressionCV(cv=5,n_jobs = 3).fit(cv_train, train_category)
print(bow_lr)

bow_lr.scores_

bow_test_predictions = bow_lr.predict(cv_test)

print(bow_test_predictions)
print(test_category)

c = 0
for x,y in zip(test_category, bow_test_predictions):
    if x == y:
        c+=1

print('Accuracy:',c/len(test_category))
# .95
```

## 4.2 Logistic Regression with TF-IDF

```bash
from sklearn.linear_model import LogisticRegressionCV

tf_train = tf.transform(X_train)
tf_test = tf.transform(X_test)

lr = LogisticRegressionCV(cv = 5)
tfidf_lr = lr.fit(tf_train, train_sentiments)
print(tfidf_lr)

tfidf_test_predictions = tfidf_lr.predict(tf_test)
print(tf_test.shape)
print(tfidf_test_predictions)
print(test_category)

c = 0
for x,y in zip(test_category, tfidf_test_predictions):
    if x == y:
        c+=1

print('Accuracy:',c/len(test_category))

#Accuracy : .97

 save model
import pickle

#save the model to disk
filename = 'lr_model.sav'
pickle.dump(tfidf_lr, open(filename, 'wb'))

# load the model from disk
loaded_model = pickle.load(open(filename, 'rb'))
result = loaded_model.score(tf_test, test_category)
print(result)
#0.97
```
