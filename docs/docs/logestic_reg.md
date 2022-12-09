---
sidebar_position: 4
---

# Logistic Regression

**mettre une définition de Logistic Regression**

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
