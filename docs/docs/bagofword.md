---
sidebar_position: 3
---

# Bag of word and TF IDF

### Bag of word

La technique Bag of Words (sac de mots en français) est un modèle de traitement de textes qui consiste à représenter un texte sous la forme d'un sac de mots (ou vecteur de mots). Cette technique consiste à ignorer la grammaire et l'ordre des mots dans le texte et à se concentrer uniquement sur la présence ou l'absence de chaque mot dans le texte.

Pour représenter un texte sous la forme d'un sac de mots, on commence par créer un vocabulaire de tous les mots possibles qui peuvent apparaître dans les textes. Ensuite, pour chaque texte, on compte le nombre d'occurrences de chaque mot dans le vocabulaire et on crée un vecteur de comptage qui indique combien de fois chaque mot du vocabulaire apparaît dans le texte.

La technique Bag of Words est souvent utilisée en traitement de langage naturel et en apprentissage automatique pour analyser et classer des textes. Elle est particulièrement utile pour traiter des textes de grande taille ou de grandes quantités de textes car elle permet de représenter efficacement le contenu d'un texte sans tenir compte de sa structure syntaxique ou de son ordre de mots.

### TFIDF

TF-IDF (abréviation de term frequency-inverse document frequency, fréquence des termes - inverse de la fréquence des documents en français) est une technique de traitement de textes utilisée pour évaluer l'importance d'un mot dans un document par rapport à un ensemble de documents.

La fréquence des termes (TF) mesure la fréquence d'apparition d'un mot dans un document. Plus un mot apparaît souvent dans un document, plus sa fréquence est élevée.

L'inverse de la fréquence des documents (IDF) mesure l'importance d'un mot dans l'ensemble des documents. Plus un mot est rare dans l'ensemble des documents, plus son IDF est élevé.

Pour calculer le score TF-IDF d'un mot dans un document, on multiplie sa fréquence par son IDF. Ainsi, les mots qui sont fréquents dans un document mais rares dans l'ensemble des documents ont un score TF-IDF élevé, indiquant qu'ils sont importants pour le document en question.

TF-IDF est souvent utilisée en traitement de langage naturel et en apprentissage automatique pour analyser et classer des documents. Elle peut être utilisée pour extraire des mots-clés d'un document, pour trouver des documents similaires ou pour classer des documents en fonction de leur contenu.

```bash
from sklearn.model_selection import train_test_split
X = df['cleaned_news'].values.tolist()
y = df['category'].values.tolist()
```

### 3.1 Construire les vecteurs BoW & Tfidf

```bash
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
```

#### CountVectorizer & TfidfVectorizer

```bash
cv = CountVectorizer(stop_words='english')
cv_X = cv.fit_transform(X)
print(cv_X.shape)

tf = TfidfVectorizer(stop_words='english') #ici on peut ajouter min_df, max_df. voir la doc de TfidfVectorizer !!
tf_X = tf.fit_transform(X)
print(tf_X.shape)
```

## 3.2 Split Train / Test

```bash
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print(len(X_train))

cv_train = cv.transform(X_train)
cv_test = cv.transform(X_test)

from sklearn import preprocessing

le = preprocessing.LabelEncoder()

le.fit(df.category.unique())

le.classes_

train_category = le.fit_transform(y_train)
test_category = le.fit_transform(y_test)

#classes labels
#le.inverse_transform([0, 1, 2, 3, 4])
d = zip([0, 1, 2, 3, 4], le.inverse_transform([0, 1, 2, 3, 4]))
class_labels_dict = {}
for k,v in d:
    class_labels_dict[k] = v

class_labels_dict

#{0: 'business', 1: 'entertainment', 2: 'politics', 3: 'sport', 4: 'tech'}
```
