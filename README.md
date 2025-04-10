👀 Notes Classifier Backend

This backend predicts the category of a note (e.g., Task, Reminder, Study, etc.) using a Python-based machine learning model served by a Node.js server.

---

🚀 Tech Stack

- Node.js (Express)
- Python (Scikit-learn, joblib)
- Machine Learning (Naive Bayes, TfidfVectorizer)



### 📁 Project Structure

```
notes-classifier/
├── server.js              # Node.js server
├── python-ml/
│   ├── train_model.py     # Trains & saves ML model
│   ├── predict.py         # Predicts category from text
│   ├── model.pkl          # Trained model
│   └── vectorizer.pkl     # Saved vectorizer
```

---

### 💠 Setup Instructions

#### 1. Clone the repository

```bash
git clone 
cd notes-classifier
```

#### 2. Install Node.js dependencies

```bash
npm install
```

#### 3. Set up Python environment

> **Recommended:** Use a virtual environment to avoid system-wide issues

```bash
python3 -m venv venv
source venv/bin/activate
```

#### 4. Install Python dependencies

Create a `requirements.txt` with this content:

```txt
joblib
scikit-learn
```

Then install:

```bash
pip install -r python-ml/requirements.txt
```

#### 5. Train the model

```bash
python3 python-ml/train_model.py
```

You should see:


📅 Model and vectorizer saved!


#### 6. Start the server

```bash
node server.js


Your backend will be live at:  
📱 `http://localhost:3000`

---

 📩 API Endpoint

`POST /predict`

Request Body:

```json
{
  "text": "Finish the React tutorial"
}
```

**Response:**

```json
{
  "label": "Study"
}
```

---


Happy coding! 🚀

