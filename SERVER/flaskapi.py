from flask import Flask,render_template_string
from flask_cors import CORS

#Initializing the Flask Instance
app=Flask(__name__)

#To enable cross origin referencing and to aceept all origins
cors = CORS(app, origins="*")

#Make the API Accessible
@app.route("/")
def home():
    html = '''
    <!DOCTYPE html>
    <html>
    <head><title>Simple Flask Site</title></head>
    <body>
        <h1>Welcome to My Flask API!</h1>
        <p>This is a basic HTML page served by Flask.</p>
        <ul>
            <li>Perfect for your DevOps projects.</li>
            <li>Ready to Dockerize and push to GitHub.</li>
        </ul>
    </body>
    </html>
    '''
    return render_template_string(html)

#Setting up Flask server
#This will run our Flask server
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
    



