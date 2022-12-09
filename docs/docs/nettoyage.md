---
sidebar_position: 2
---

# Nettoyage des données

Avant de commencer tout traitement, on doit absolument nettoyer nos données, pour réussir à faire ceci on applique deux procédure à nos news la **_lemmitization_** et le **_stemming_**

### Nuage de mots avant le préprocessing :

![cloud word](/img/word_cloud1.png)

### Code source

```bash
from nltk.corpus import stopwords

stopwords = set(stopwords.words('english'))

def clean_news(text):
    """
    Clean the input text
    """
    cleaned_text = text.lower()
    cleaned_text = re.sub('[^a-zA-Z0-9\s]', '', cleaned_text)
    cleaned_text = cleaned_text.split()
    cleaned_text = [word for word in cleaned_text if word not in stopwords and len(word) > 1]

    return " ".join(cleaned_text)
```

### Nuage de mots après le préprocessing :

![cloud word](/img/output_80_0.png)
