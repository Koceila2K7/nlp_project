---
sidebar_position: 6
---

# SVM

**mettre une définition of SVM**

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
