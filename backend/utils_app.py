from flask import *
import sqlite3, hashlib, os
from werkzeug.utils import secure_filename
import flask_cors
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import random
app = Flask(__name__)
app.secret_key="Hello SHubham"
app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['ALLOWED_EXTENSIONS'] = set(['txt', 'png', 'jpg', 'jpeg', 'gif','mp4'])
flask_cors.CORS(app)
def log_In_Details():
    with sqlite3.connect("database.db") as con:
        cur=con.cursor()
        if 'email' not in session:
            loggedIn=False
            name=''
            username=''
            noOfItems=0
        else:
            loggedIn=True
            cur.execute('SELECT name,username FROM users WHERE email=?',session['email'])
            name,username=cur.fetchone()
            cur.execute('SELECT count(id) FROM kart WHERE user_id=?',(session['user_id'],))
            noOfItems=cur.fetchone()[0] 
    con.close()
    return (loggedIn,name,username,noOfItems)
def email_sender(receiver,message,subject):
    sender_email = "resoshubham2002@gmail.com"
    receiver_email = receiver
    password = ""
    subject = subject
    message = message
    with smtplib.SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(sender_email, password)
            email_message = MIMEMultipart()
            email_message["From"] = sender_email
            email_message["To"] = receiver_email
            email_message["Subject"] = subject

            email_message.attach(MIMEText(message, "plain"))

            connection.send_message(email_message)
            print("Email sent")
@app.route('/')
def root():
    loggedIn,name,username,noOfItems=log_In_Details()
    with sqlite3.connect('database.db') as con:
        cur=con.cursor()
        cur.execute("SELECT productId, name, price, description, image, stock FROM products")
        products=cur.fetchall()
        cur.execute("SELECT categoryId, name FROM categories")
        categories=cur.fetchall()
    con.close()
    return jsonify({
    "products":products,
    "categories":categories
    ,"loggedIn":loggedIn
    ,"name":name,
    "username":username,
    "noOfItems":noOfItems
    })
@app.route('/addItems',methods=['POST'])
def addItems():
    data=request.get_json()
    name=data.get("name")
    price=int(data.get("price"))
    description=data.get("description")
    stock=int(data.get("stock"))
    image=data.get("image")
    with sqlite3.connect("database.db") as con:
        try:
            cur=con.cursor()
            cur.execute("INSERT INTO products(name,price,description,stock,image) VALUES(?,?,?,?,?)",(name,price,description,stock,image))
            con.commit()
            msg="Product added successfully"
            print(msg)
            return jsonify({"message":msg})
        except Exception as e:
            con.rollback()
            msg="Error in insert operation: "+str(e)
            print(msg)
            return jsonify({"message":msg})
@app.route('/login', methods=['POST'])
def login():
    data=request.get_json()
    email = data.get("email")
    password = data.get("password")
    print(email,password)
    with sqlite3.connect('database.db') as con:
        try:
            cur=con.cursor()
            cur.execute("SELECT * FROM users WHERE email=? AND password=?",(email,hashlib.md5(password.encode()).hexdigest()))
            user=cur.fetchone()
            if user:
                session['email']=email
                session['user_id']=user[0]
                session['name']=user[3]
                session['username']=user[4]
                msg="Login successful"
                print(msg)
                return jsonify({"message":msg})
            else:
                msg="Wrong email or password"
                print(msg)
                return jsonify({"message":msg})
        except:
            con.rollback()
            msg="Error in login operation"
            print(msg)
            return jsonify({"message":msg})
    # if email == "valid_email@example.com" and password == "password":
    #     return jsonify({"message": "Login successful"})
    # else:
    #     return jsonify({"message": "Invalid email or password"}), 401
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get("name")
    username = data.get("username")
    password = data.get("password")
    email = data.get("email")
    
    with sqlite3.connect('database.db') as con:
        try:
            cur = con.cursor()
            # Check if the email already exists in the database
            cur.execute('SELECT * FROM users WHERE email = ?', (email,))
            existing_user = cur.fetchone()
            if existing_user:
                print("Email already exists")
                return jsonify({"message": "Email already exists"})
            # Insert the new user into the database
            cur.execute('INSERT INTO users(password, email, name, username) VALUES (?, ?, ?, ?)',
                        (hashlib.md5(password.encode()).hexdigest(), email, name, username))
            
            con.commit()
            msg = "Signup successful"
            mess = f"Thanks {name} for registering with AiShop"
            print(mess)
            # email_sender(email,mess,msg)
            print(msg)
            return jsonify({"message": "Signup successful"})
        except Exception as e:
            con.rollback()
            msg = "Error in insert operation: " + str(e)
            print(msg)
            return jsonify({"message": "Signup unsuccessful"})
@app.route('/send-email',methods=['POST'])
def send_email():
    data=request.get_json()
    email=data.get("email")
    receiver_email = email
    subject = "New Product!!"
    message = "Thanks for Subscribing Our Newsletter we will update you always on the launching of new product"
    email_sender(receiver_email,message,subject)
    return jsonify({"message": "Email sent"})
# @app.route('/send-otp', methods=['GET','POST'])
# def get_otp():
#     if request.method == 'POST':
#         data = request.get_json()
#         email = data.get("email")
#         receiver_email = email
#         subject = "OTP for Signup"
#         otp = random.randint(100001, 999999)
#         message = f"Your OTP for account creation is {otp}"
#         email_sender(receiver_email, message, subject)
#         with sqlite3.connect('database.db') as con:
#             cur = con.cursor()
#             cur.execute("INSERT INTO otps (email, otp) VALUES (?, ?)", (email, otp))
#             con.commit()
#         return jsonify({"message": "Email sent"})

if __name__ == '__main__':
    app.run(debug=True)
