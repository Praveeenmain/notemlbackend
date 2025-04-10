import sys
import joblib

if len(sys.argv) < 2:
    print("No input provided")
    sys.exit(1)

model = joblib.load("python-ml/model.pkl")
vectorizer = joblib.load("python-ml/vectorizer.pkl")

note = sys.argv[1]
X = vectorizer.transform([note])
prediction = model.predict(X)

print(prediction[0])
