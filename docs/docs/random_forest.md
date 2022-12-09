---
sidebar_position: 5
---

# Random forest

**mettre une définition Random Forest**

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
