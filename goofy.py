import streamlit as st
import sqlite3
import bcrypt
from datetime import datetime

# Database operations
def init_db():
    conn = sqlite3.connect('social_media.db')
    c = conn.cursor()
    
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  username TEXT UNIQUE NOT NULL,
                  password TEXT NOT NULL,
                  email TEXT UNIQUE NOT NULL,
                  bio TEXT)''')
    
    c.execute('''CREATE TABLE IF NOT EXISTS posts
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  user_id INTEGER,
                  content TEXT NOT NULL,
                  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                  FOREIGN KEY (user_id) REFERENCES users(id))''')
    
    conn.commit()
    conn.close()

def get_db_connection():
    conn = sqlite3.connect('social_media.db')
    conn.row_factory = sqlite3.Row
    return conn

# Authentication functions
def register_user(username, password, email):
    conn = get_db_connection()
    c = conn.cursor()
    
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    
    try:
        c.execute("INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
                  (username, hashed_password, email))
        conn.commit()
        return True
    except sqlite3.IntegrityError:
        return False
    finally:
        conn.close()

def login_user(username, password):
    conn = get_db_connection()
    c = conn.cursor()
    
    c.execute("SELECT * FROM users WHERE username = ?", (username,))
    user = c.fetchone()
    
    if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
        return user
    else:
        return None

# Post functions
def create_post(user_id, content):
    conn = get_db_connection()
    c = conn.cursor()
    
    c.execute("INSERT INTO posts (user_id, content) VALUES (?, ?)",
              (user_id, content))
    conn.commit()
    conn.close()

def get_posts():
    conn = get_db_connection()
    c = conn.cursor()
    
    c.execute("""SELECT posts.*, users.username 
                 FROM posts 
                 JOIN users ON posts.user_id = users.id 
                 ORDER BY posts.timestamp DESC""")
    posts = c.fetchall()
    
    conn.close()
    return posts

# Profile functions
def get_user_profile(user_id):
    conn = get_db_connection()
    c = conn.cursor()
    
    c.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    user = c.fetchone()
    
    conn.close()
    return user

def update_user_profile(user_id, email, bio):
    conn = get_db_connection()
    c = conn.cursor()
    
    c.execute("UPDATE users SET email = ?, bio = ? WHERE id = ?",
              (email, bio, user_id))
    conn.commit()
    conn.close()

# Streamlit app
def main():
    st.title("Social Media App")
    
    # Initialize the database
    init_db()
    
    # Session state
    if 'user' not in st.session_state:
        st.session_state.user = None
    
    # Sidebar for navigation
    menu = st.sidebar.selectbox("Menu", ["Home", "Profile", "Login", "Register"])
    
    if menu == "Home":
        home_page()
    elif menu == "Profile":
        profile_page()
    elif menu == "Login":
        login_page()
    elif menu == "Register":
        register_page()

def home_page():
    if st.session_state.user:
        st.write(f"Welcome, {st.session_state.user['username']}!")
        
        # Create a new post
        new_post = st.text_area("Create a new post")
        if st.button("Post"):
            create_post(st.session_state.user['id'], new_post)
            st.success("Post created successfully!")
        
        # Display posts
        posts = get_posts()
        for post in posts:
            st.text(f"{post['username']} - {post['timestamp']}")
            st.write(post['content'])
            st.markdown("---")
    else:
        st.write("Please login to view and create posts.")

def profile_page():
    if st.session_state.user:
        user = get_user_profile(st.session_state.user['id'])
        st.write(f"Username: {user['username']}")
        
        email = st.text_input("Email", value=user['email'])
        bio = st.text_area("Bio", value=user['bio'] or "")
        
        if st.button("Update Profile"):
            update_user_profile(user['id'], email, bio)
            st.success("Profile updated successfully!")
    else:
        st.write("Please login to view and edit your profile.")

def login_page():
    st.subheader("Login")
    username = st.text_input("Username")
    password = st.text_input("Password", type="password")
    
    if st.button("Login"):
        user = login_user(username, password)
        if user:
            st.session_state.user = user
            st.success("Logged in successfully!")
        else:
            st.error("Invalid username or password")

def register_page():
    st.subheader("Register")
    username = st.text_input("Username")
    email = st.text_input("Email")
    password = st.text_input("Password", type="password")
    
    if st.button("Register"):
        if register_user(username, password, email):
            st.success("Registered successfully! Please login.")
        else:
            st.error("Registration failed. Username or email may already exist.")

if __name__ == "__main__":
    main()