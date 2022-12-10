
from nltk.corpus import stopwords  # needs to download
import numpy as np
import re
import pickle
import nltk
nltk.download('stopwords')


def get_lda_topics(tf_lda, lda):
    topic_words = {}
    n_top_words = 20
    vocab = tf_lda.get_feature_names()
    for topic, comp in enumerate(lda.components_):
        word_idx = np.argsort(comp)[::-1][:n_top_words]
        # store the words most relevant to the topic
        topic_words[topic] = [vocab[i] for i in word_idx]
    return topic_words


def clean_news(text):
    """
    Clean the input text 
    """
    from nltk.corpus import stopwords
    stopwords = set(stopwords.words('english'))
    cleaned_text = text.lower()
    cleaned_text = re.sub('[^a-zA-Z0-9\s]', '', cleaned_text)
    cleaned_text = cleaned_text.split()
    cleaned_text = [
        word for word in cleaned_text if word not in stopwords and len(word) > 1]
    return " ".join(cleaned_text)

# classification function ['business', 'entertainment', 'politics', 'sport', 'tech']


def classify_text(text, model_name=None):
    class_labels_dict = {0: 'business', 1: 'entertainment',
                         2: 'politics', 3: 'sport', 4: 'tech'}
    lda_classes = {0: 'sport', 1: 'tech', 2: 'politics',
                   3: 'entertainment', 4: 'business'}

    # ---------- cleaning ----------
    text_cleaned = clean_news(text)

    # ---------- vectorization ----------
    # if (tfidf )
    tfidf = pickle.load(open('tfidf_vectorizer_svm.sav', 'rb'))  # par defaut
    vector = tfidf.transform([text_cleaned])  # just transform

    # if (bw)
    if(model_name.startswith('bow')):
        bw = pickle.load(open('bow_vectorizer.sav', 'rb'))
        vector = bw.transform([text_cleaned])  # to test

    # ---------- loading model ----------
    if(model_name == 'tfidf_sv_model'):
        model = pickle.load(open('tfidf_sv_model.sav', 'rb'))
    if(model_name == 'bow_sv_model'):
        model = pickle.load(open('bow_sv_model.sav', 'rb'))
    if(model_name == 'tfidf_lr_model'):
        model = pickle.load(open('tfidf_lr_model.sav', 'rb'))
    if(model_name == 'bow_lr_model'):
        model = pickle.load(open('bow_lr_model.sav', 'rb'))
    if(model_name == 'bow_rf_model'):
        model = pickle.load(open('bow_rf_model.sav', 'rb'))

    # ---------- special case for lda ----------
    # cas special : LDA
    if(model_name == 'lda_model'):  # utilise tfidf mais voir ce que renvoi le PREDICT
        tfidf = pickle.load(open('tfidf_lda.sav', 'rb'))
        vector = tfidf.transform([text_cleaned])
        model = pickle.load(open('lda_model.sav', 'rb'))  # in case of LDA
        result = model.transform(vector.reshape(1, -1))
        # return str(result) # matrice de probas
        # return str(get_lda_topics(tfidf, model)) # 5 topics dict
        return lda_classes[np.argmax(result[0])]

    if(model_name is None):  # model par default
        model = pickle.load(open('tfidf_lr_model.sav', 'rb'))  # par defaut

    # all other models
    # ---------- result ----------
    result = model.predict(vector)
    return class_labels_dict[result[0]]


def get_class(text: str, model: str):
    # return model+"_class_of_"+text.split(" ")[0] #pour tester
    result = classify_text(text, model)
    return result
