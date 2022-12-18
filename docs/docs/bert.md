---
sidebar_position: 9
---

# BERT

BERT (Bidirectional Encoder Representations from Transformers) est un modèle de traitement du langage naturel développé par Google en 2018. C'est un modèle de prétraitement de texte qui peut être utilisé comme base pour différentes tâches de traitement du langage naturel, telles que la reconnaissance de la parole, la traduction automatique et la compréhension du langage naturel.

BERT utilise un réseau de neurones basé sur le modèle de transformer, qui est un modèle de traitement du langage naturel utilisant des attentions pour traiter des séquences de mots dans un ordre arbitraire. BERT est bidirectionnel, ce qui signifie qu'il prend en compte le contexte des mots à la fois avant et après chaque mot dans une phrase, ce qui lui permet d'avoir une meilleure compréhension du sens des mots dans le contexte de la phrase.

BERT a été entraîné sur de grandes collections de textes et a atteint de très bons résultats dans de nombreuses tâches de traitement du langage naturel. Il est souvent utilisé comme modèle de base pour de nombreuses tâches de traitement du langage naturel et a été largement adopté par de nombreuses entreprises et organisations du monde entier.

### 9 BERT

```bash
from transformers import BertTokenizer
bert_tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
from transformers import BertForSequenceClassification
model = BertForSequenceClassification.from_pretrained('bert-base-uncased',
                                                      num_labels = 5,  problem_type="multi_label_classification",labels=['test1','test2','test3','test4','test5'])

text = 'economy'
inputs = bert_tokenizer(text, return_tensors="pt")
import torch

with torch.no_grad():

    logits = model(**inputs).logits

print(model.config.id2label)
#{0: 'LABEL_0', 1: 'LABEL_1', 2: 'LABEL_2', 3: 'LABEL_3', 4: 'LABEL_4'}
predicted_class_id = logits.argmax().item()

model.config.id2label[predicted_class_id]

```
