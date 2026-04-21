from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import numpy as np
import json
import uuid
import os
from PIL import Image
try:
    import tensorflow as tf
    HAS_TENSORFLOW = True
except ImportError:
    HAS_TENSORFLOW = False
    print("WARNING: TensorFlow not found. Running in MOCK mode.")

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Define paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, 'models', 'plant-disease-detection-pwp.keras')
LABELS_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'plant_disease.json')
UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'uploadimages')

# Ensure upload directory exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Load model
model = None
if HAS_TENSORFLOW:
    try:
        model = tf.keras.models.load_model(MODEL_PATH)
        print(f"Model loaded successfully from {MODEL_PATH}")
    except Exception as e:
        print(f"Error loading model: {e}")
        model = None

# Load labels
try:
    with open(LABELS_PATH, 'r') as file:
        plant_disease_labels = json.load(file)
except Exception as e:
    print(f"Error loading labels: {e}")
    plant_disease_labels = ["Mock Disease"]

def extract_features(image_path):
    if not HAS_TENSORFLOW:
        return None
    image = tf.keras.utils.load_img(image_path, target_size=(160, 160))
    feature = tf.keras.utils.img_to_array(image)
    feature = np.array([feature])
    return feature

def model_predict(image_path):
    if not HAS_TENSORFLOW or model is None:
        # Mock prediction logic
        import random
        index = random.randint(0, len(plant_disease_labels) - 1)
        label = plant_disease_labels[index]
        confidence = 0.95
        return label, confidence
    
    img = extract_features(image_path)
    prediction = model.predict(img)
    index = prediction.argmax()
    confidence = float(prediction[0][index])
    prediction_label = plant_disease_labels[index]
    return prediction_label, confidence

@app.route('/predict', methods=['POST'])
def predict():
    if 'img' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400
    
    image = request.files['img']
    if image.filename == '':
        return jsonify({"error": "No image selected"}), 400

    # Save temporary file
    filename = f"{uuid.uuid4().hex}_{image.filename}"
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    image.save(filepath)

    try:
        label, confidence = model_predict(filepath)
        
        # Format the result for the frontend
        is_healthy = "healthy" in label.lower() and "background" not in label.lower()
        
        # Clean up label for display (e.g. Tomato___Early_blight -> Tomato Early Blight)
        display_label = label.replace("___", " ").replace("_", " ")

        return jsonify({
            "status": "healthy" if is_healthy else "diseased",
            "prediction": label,
            "display_prediction": display_label,
            "confidence": confidence,
            "message": f"Detected: {display_label} ({confidence:.2%} confidence)"
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    # Final cleanup of temp file could be added here if desired

@app.route('/uploadimages/<path:filename>')
def uploaded_images(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/')
def home():
    return jsonify({"status": "Backend API is running", "model_loaded": model is not None})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
