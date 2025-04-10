# python-ml/train_model.py

import pandas as pd
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

# 📥 Load notes from CSV
df = pd.read_csv("python-ml/notes.csv")
texts = df["text"]
labels = df["label"]

# 🔧 Build vectorizer and model
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(texts)

model = MultinomialNB()
model.fit(X, labels)

# 💾 Save model and vectorizer
joblib.dump(model, "python-ml/model.pkl")
joblib.dump(vectorizer, "python-ml/vectorizer.pkl")

print("✅ Model and vectorizer saved from CSV!")
