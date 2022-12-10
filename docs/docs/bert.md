---
sidebar_position: 9
---

# BERT

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
