---
sidebar_position: 7
---

# Word2Vec

### 7 Word2Vec

Word2vec est un modèle de traitement de langage naturel utilisé pour apprendre des représentations vectorielles de mots (appelées "vecteurs de mots") à partir de grandes collections de textes. Ces vecteurs de mots sont des représentations numériques de chaque mot qui reflètent leur signification ou leur sens dans le contexte des autres mots.

Word2vec utilise un réseau de neurones pour apprendre ces vecteurs de mots. Le modèle prend en entrée un texte et prédit le mot suivant dans le texte en utilisant le mot courant et les mots précédents comme entrées. Le modèle est entraîné sur une grande collection de textes de manière à minimiser l'erreur de prédiction du mot suivant.

Une fois entraîné, le modèle peut être utilisé pour obtenir des vecteurs de mots pour n'importe quel mot dans le vocabulaire. Ces vecteurs de mots peuvent être utilisés dans de nombreuses tâches de traitement de langage naturel, telles que la reconnaissance de la parole, la traduction automatique et la recherche de documents similaires.

Word2vec a été largement utilisé dans de nombreux domaines et a été très influent dans le développement de l'apprentissage automatique pour le traitement du langage naturel.

```bash
from nltk import sent_tokenize
import gensim
from sklearn.model_selection import train_test_split
from gensim.utils import simple_preprocess

corpus = [sent_tokenize(review) for review in df.cleaned_news.values.tolist()]

words = []
labels = []
for rev,label in zip(df.cleaned_news.values.tolist(), df.category.values.tolist()):
    sent_rev = sent_tokenize(rev)
    for word in sent_rev:
        words.append(simple_preprocess(word))
        labels.append(label)


model_w2v = gensim.models.Word2Vec(words, window = 5, min_count = 1)

def review_embeddings(review,model_w2v, method:str = 'avg'):
    """
    Return the Text vector using the average or sum of word embeddings given by Word2Vec
    """
    if method == 'avg':
        return np.mean([model_w2v.wv[word] for word in review if word in model_w2v.wv.index_to_key], axis = 0)
    return np.sum([model_w2v.wv[word] for word in review if word in model_w2v.wv.index_to_key], axis = 0)

X_reviews = [review_embeddings(review,model_w2v) for review in words]
X_reviews = np.array(X_reviews)
label_dict  ={'business':0, 'entertainment':1,'politics':2,'sport':3,'tech':4}
y_reviews = [label_dict[label] for label in labels]
X_train, X_test, y_train, y_test = train_test_split(X_reviews, y_reviews, test_size =0.2)

from sklearn.linear_model import LogisticRegression
lr_w2v = LogisticRegression()

X_train_corr = []
y_train_corr = []
for i,y in zip(X_train,y_train):
    try:
        if i.shape[0] == 100:
            X_train_corr.append(i)
            y_train_corr.append(y)
    except:
        print(i)

X_train_corr = np.array(X_train_corr)
X_test_corr = np.array(X_test_corr)


lr_w2v.fit(X_train_corr, y_train_corr)

from sklearn.metrics import accuracy_score

accuracy_score(y_test_corr,lr_w2v.predict(X_test_corr))#0.9191011235955057

model_w2v.wv.most_similar('business')
"""
[('buy', 0.9954310655593872),
 ('operating', 0.9928811192512512),
 ('reduce', 0.992861270904541),
 ('offer', 0.9926395416259766),
 ('credit', 0.9919050931930542),
 ('regulator', 0.9917522072792053),
 ('carrier', 0.9914599061012268),
 ('offshore', 0.991354763507843),
 ('seeking', 0.9912638664245605),
 ('energy', 0.9910051226615906)]
 """
 # save model
import pickle

# save the model to disk
filename = 'w2v_lr_model.sav'
pickle.dump(lr_w2v, open(filename, 'wb'))

```

### 7.2 Word2Vec Google model

```bash
import gensim.downloader
model = gensim.downloader.load("word2vec-google-news-300")

model

def review_embeddings_2(review,model_w2v, method:str = 'avg'):
    """
    Return the Text vector using the average or sum of word embeddings given by Word2Vec
    """
    if method == 'avg':
        return np.mean([model_w2v[word] for word in review if word in model_w2v], axis = 0)
    return np.sum([model_w2v.wv[word] for word in review if word in model_w2v], axis = 0)

X_reviews = [review_embeddings_2(review,model) for review in words]
X_reviews = np.array(X_reviews)
label_dict  ={'business':0, 'entertainment':1,'politics':2,'sport':3,'tech':4}
y_reviews = [label_dict[label] for label in labels]
X_train, X_test, y_train, y_test = train_test_split(X_reviews, y_reviews, test_size =0.2)

lr_w2v_2 = LogisticRegression()

lr_w2v_2.fit(X_train, y_train)

accuracy_score(y_test,lr_w2v_2.predict(X_test))#0.950561797752809
```
