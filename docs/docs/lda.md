---
sidebar_position: 8
---

# LDA

### 8 LDA

```bash
from sklearn.decomposition import LatentDirichletAllocation
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer

cv_lda = CountVectorizer(stop_words='english', max_features=100000)

bow_matrix = cv_lda.fit_transform(df.cleaned_news.values.tolist())
K = 5

tf_lda = TfidfVectorizer(stop_words='english', max_df=0.8, min_df = 0.05) # a modifier les autres tfidf


tf_matrix = tf_lda.fit_transform(df.cleaned_news.values.tolist())

lda = LatentDirichletAllocation(n_components= K )

lda_matrix = lda.fit_transform(tf_matrix)

document_topic = lda_matrix.argmax(axis = 1).tolist()

# save model
import pickle

# save the model to disk
filename = 'tfidf_lda.sav'
pickle.dump(tf_lda, open(filename, 'wb'))

from collections import Counter
Counter(document_topic)

topic_words = {}
n_top_words = 20
vocab  = tf_lda.get_feature_names()
for topic, comp in enumerate(lda.components_):
    # for the n-dimensional array "arr":
    # argsort() returns a ranked n-dimensional array of arr, call it "ranked_array"
    # which contains the indices that would sort arr in a descending fashion
    # for the ith element in ranked_array, ranked_array[i] represents the index of the
    # element in arr that should be at the ith index in ranked_array
    # ex. arr = [3,7,1,0,3,6]
    # np.argsort(arr) -> [3, 2, 0, 4, 5, 1]
    # word_idx contains the indices in "topic" of the top num_top_words most relevant
    # to a given topic ... it is sorted ascending to begin with and then reversed (desc. now)
    word_idx = np.argsort(comp)[::-1][:n_top_words]

    # store the words most relevant to the topic
    topic_words[topic] = [vocab[i] for i in word_idx]


for topic, words in topic_words.items():
    print('Topic: %d' % topic)
    print('  %s' % ', '.join(words))

"""
Topic: 0
  game, england, win, cup, play, players, match, world, injury, games, team, club, season, coach, ireland, time, final, good, open, second
Topic: 1
  people, year, market, new, mr, firm, sales, technology, company, growth, 2004, mobile, users, uk, software, economy, 000, music, net, million
Topic: 2
  mr, labour, government, blair, party, election, wales, brown, minister, people, howard, secretary, prime, public, plans, told, chancellor, tory, tax, tories
Topic: 3
  film, best, awards, award, star, music, films, tv, year, director, number, including, new, series, uk, british, london, years, office, life
Topic: 4
  court, mr, company, bid, offer, case, firm, deal, bank, club, financial, legal, group, sale, chief, executive, pay, board, agreed, accused
"""

"""
topic 0 -> sport

topic 1 -> politics

topic 2 -> tech

topic 3 -> business

topic 4 -> entertainment
"""

test_category

# save model
import pickle

# save the model to disk
filename = 'lda_model.sav'
pickle.dump(lda, open(filename, 'wb'))



```
