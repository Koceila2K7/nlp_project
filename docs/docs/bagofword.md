---
sidebar_position: 3
---

# Bag of word and TF IDF

**mettre une définition de bag of word**

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
