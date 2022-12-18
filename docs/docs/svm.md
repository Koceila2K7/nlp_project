---
sidebar_position: 6
---

# SVM

Le SVM (Support Vector Machine) est un modèle d'apprentissage automatique utilisé pour la classification et la régression. Il consiste à trouver un hyperplan dans un espace à n dimensions qui sépare le mieux possible les différentes classes de données.

Pour illustrer, imaginez que vous avez des données de deux classes, A et B, qui sont séparées par un hyperplan. Un SVM cherchera à trouver l'hyperplan qui sépare le mieux les deux classes de données en maximisant la distance entre l'hyperplan et les points les plus proches de chaque classe (appelés vecteurs de support). Cette distance est appelée marge.

Le SVM est souvent utilisé lorsque les données ne peuvent pas être séparées de manière linéaire et qu'il est nécessaire d'utiliser une fonction de transformation non linéaire pour séparer les données. Dans ce cas, le SVM utilise une fonction de transformation appelée noyau pour projeter les données dans un espace à plus haute dimension où elles peuvent être séparées de manière linéaire.

Le SVM est souvent utilisé dans de nombreux domaines, notamment la reconnaissance de formes, la vision par ordinateur et la détection de spam, pour classer des données en deux ou plusieurs classes.

### 6.1 SVM BoW

```bash
from sklearn.svm import SVC
sv = SVC(kernel='linear', C=1E10)
bow_sv = sv.fit(cv_train, train_category)
bow_sv_test_predictions = bow_sv.predict(cv_test)
print(bow_sv_test_predictions)
print(test_category)
c = 0
for x,y in zip(test_category, bow_sv_test_predictions):
    if x == y:
        c+=1

print('Accuracy:',c/len(test_category))
#Accuracy: 0.9640449438202248
```

### 6.2 Svm with tf-idf

```bash
tf = TfidfVectorizer(stop_words='english') #ici on peut ajouter min_df, max_df. voir la doc de TfidfVectorizer !!
tf_X = tf.fit_transform(X)
print(tf_X.shape)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print(len(X_train))

tf_train = tf.transform(X_train)
tf_test = tf.transform(X_test)

train_category = le.fit_transform(y_train)
test_category = le.fit_transform(y_test)

sv = SVC()
tfidf_sv = sv.fit(tf_train, train_category)

len(test_category)

tfidf_sv.score(tf_test,test_category)
#0.9662921348314607
```
