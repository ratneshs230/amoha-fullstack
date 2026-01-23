# from fastapi.security import OAuth2PasswordBearer
# from fastapi import FastAPI, Depends, HTTPException, status
# from sqlalchemy.orm import Session
# import models
# import schemas
# import crud
# from database import engine, Base, get_db
# from auth import create_access_token, decode_access_token
# from datetime import timedelta
# import os
# from dotenv import load_dotenv
# from oauth import oauth

# load_dotenv()

# # Create DB tables
# Base.metadata.create_all(bind=engine)

# app = FastAPI()

# FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000")


# # --- Local Signup ---
# @app.post('/signup', response_model=schemas.UserOut)
# def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):

#     existing = crud.get_user_by_email(db, user.email)
#     if existing:
#         raise HTTPException(status_code=400, detail='Email already registered')

#     db_user = crud.create_user(
#         db=db,
#         first_name=user.first_name,
#         last_name=user.last_name,
#         email=user.email,
#         password=user.password,
#         auth_provider='local'
#     )

#     return db_user


# # --- Local Login ---
# @app.post('/login', response_model=schemas.Token)
# def login(form_data: schemas.UserCreate, db: Session = Depends(get_db)):

#     db_user = crud.get_user_by_email(db, form_data.email)
#     if not db_user:
#         raise HTTPException(status_code=400, detail='Invalid credentials')

#     if db_user.auth_provider != 'local':
#         raise HTTPException(
#             status_code=400, detail=f'Please login via {db_user.auth_provider}'
#         )

#     if not crud.verify_password(form_data.password, db_user.hashed_password):
#         raise HTTPException(status_code=400, detail='Invalid credentials')

#     token = create_access_token({"sub": db_user.email})
#     return {"access_token": token, "token_type": "bearer"}


# # --- Get Current User ---
# oauth2_scheme = OAuth2PasswordBearer(tokenUrl='login')


# @app.get('/users/me', response_model=schemas.UserOut)
# def read_users_me(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):

#     payload = decode_access_token(token)
#     if not payload:
#         raise HTTPException(status_code=401, detail='Invalid auth token')

#     email = payload.get('sub')
#     if not email:
#         raise HTTPException(status_code=401, detail='Invalid auth token')

#     user = crud.get_user_by_email(db, email)
#     if not user:
#         raise HTTPException(status_code=404, detail='User not found')

#     return user

## working

# from fastapi import FastAPI, Depends, HTTPException, Request
# from fastapi.responses import RedirectResponse, JSONResponse
# from fastapi.middleware.cors import CORSMiddleware
# from starlette.middleware.sessions import SessionMiddleware
# from sqlalchemy.orm import Session
# from authlib.integrations.starlette_client import OAuth
# import traceback
# import models, schemas, database
# from utils import hash_password, verify_password

# from database import engine, Base

# ##from routers import progress

# from database import Base

# #### track user
# import models
# from database import engine

# models.Base.metadata.create_all(bind=engine)
# #### track user

# ####Base.metadata.create_all(bind=engine)
# # ==========================
# #  APP + MIDDLEWARE
# # ==========================
# app = FastAPI()

# # ✅ SessionMiddleware must be before OAuth
# app.add_middleware(
#     SessionMiddleware,
#     secret_key="super-secret-session-key",  # change this to something unique
#     same_site="lax",   # ✅ “lax” works best for Google OAuth on localhost
#     https_only=False
# )

# # ✅ CORS setup
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         "http://localhost:5173",
#         "http://127.0.0.1:5173",
#         "http://localhost:8000",
#         "http://127.0.0.1:8000",
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )
# ##tack user
# Base.metadata.create_all(bind=engine)
# ##track user
# models.Base.metadata.create_all(bind=database.engine)


# #  OAUTH CONFIGURATION
# oauth = OAuth()

# google = oauth.register(
#     name="google",
#     client_id="390430467924-cudlepra8ed2jblv7157i3lejub6nged.apps.googleusercontent.com",
#     client_secret="OCSPX-n-W1TNMv9gDc39aMm0sYaVSVqByQ",
#     server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
#     client_kwargs={"scope": "openid email profile"},
#     redirect_uri="http://localhost:8000/auth/google/callback",  # ✅ absolute redirect URI
# )



# facebook = oauth.register(
#     name="facebook",
#     client_id="822732687163749",
#     client_secret="2ddc94049ebf0abb7115f1553445dee5",
#     access_token_url="https://graph.facebook.com/oauth/access_token",
#     authorize_url="https://www.facebook.com/dialog/oauth",
#     api_base_url="https://graph.facebook.com/",
#     client_kwargs={"scope": "email"},
#     redirect_uri="http://localhost:8000/auth/facebook",
# )



# #  ROOT

# @app.get("/")
# async def root():
#     return {"message": "✅ Server running successfully!"}



# #  REGISTER / LOGIN ROUTES

# @app.post("/register")
# def register_user(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
#     db_user = db.query(models.User).filter(models.User.email == user.email).first()
#     if db_user:
#         raise HTTPException(status_code=400, detail="Email already registered")

#     new_user = models.User(
#         first_name=user.first_name,
#         last_name=user.last_name,
#         email=user.email,
#         password=hash_password(user.password)
#     )
#     db.add(new_user)
#     db.commit()
#     db.refresh(new_user)
#     return {"message": "User created successfully", "email": new_user.email}


# @app.post("/login")
# def login_user(user: schemas.UserLogin, db: Session = Depends(database.get_db)):
#     db_user = db.query(models.User).filter(models.User.email == user.email).first()
#     if not db_user or not verify_password(user.password, db_user.password):
#         raise HTTPException(status_code=400, detail="Invalid email or password")

#     return {
#         "message": "Login successful",
#         "user": {
#             "id": db_user.id,
#             "first_name": db_user.first_name,
#             "last_name": db_user.last_name,
#             "email": db_user.email
#         }
#     }


# #  GOOGLE AUTH
# # ==========================
# @app.get("/login/google")
# async def login_google(request: Request):
#     # ✅ redirect_uri must exactly match what’s in google.register()
#     redirect_uri = "http://localhost:8000/auth/google/callback"
#     request.session["next"] = "http://localhost:5173/profile"
#     return await google.authorize_redirect(request, redirect_uri)


# @app.get("/auth/google/callback")
# async def auth_google(request: Request, db: Session = Depends(database.get_db)):
#     try:
#         # 1️⃣ - Get token (this also validates state)
#         token = await google.authorize_access_token(request)

#         # 2️⃣ - Get user info safely
#         user_info = token.get("userinfo") or await google.parse_id_token(request, token)
#         if not user_info:
#             raise HTTPException(status_code=400, detail="Google login failed")

#         email = user_info["email"]
#         name = user_info.get("name", "")
#         first_name = name.split(" ")[0]
#         last_name = " ".join(name.split(" ")[1:])

#         # 3️⃣ - Create user if not exists
#         db_user = db.query(models.User).filter(models.User.email == email).first()
#         if not db_user:
#             new_user = models.User(
#                 first_name=first_name,
#                 last_name=last_name,
#                 email=email,
#                 password=hash_password("google_oauth_user")
#             )
#             db.add(new_user)
#             db.commit()
#             db.refresh(new_user)

#         # 4️⃣ - Get frontend redirect URL *once* (no loop)
#         next_url = request.session.pop("next", None)

#         # If next_url missing, send JSON instead of redirect loop
#         if not next_url:
#             return {
#                 "message": "Google login successful",
#                 "user": {
#                     "email": email,
#                     "name": name,
#                 }
#             }

#         # 5️⃣ - Safe redirect (no loop now)
#         return RedirectResponse(url=f"{next_url}?email={email}")

#     except Exception as e:
#         print("Google OAuth Error:", e)
#         traceback.print_exc()
#         return JSONResponse(
#             {"error": "Google OAuth failed", "details": str(e)},
#             status_code=500
#         )



# #  FACEBOOK AUTH
# # ==========================
# @app.get("/login/facebook")
# async def login_facebook(request: Request):
#     redirect_uri = "http://localhost:8000/auth/facebook"
#     request.session["next"] = "http://localhost:5173/profile"
#     return await facebook.authorize_redirect(request, redirect_uri)


# @app.get("/auth/facebook")
# async def auth_facebook(request: Request, db: Session = Depends(database.get_db)):
#     try:
#         token = await facebook.authorize_access_token(request)
#         resp = await facebook.get("me?fields=id,name,email", token=token)
#         user_info = resp.json()

#         email = user_info.get("email")
#         name = user_info.get("name", "")
#         if not email:
#             raise HTTPException(status_code=400, detail="Facebook auth failed")

#         first_name = name.split(" ")[0]
#         last_name = " ".join(name.split(" ")[1:])

#         db_user = db.query(models.User).filter(models.User.email == email).first()
#         if not db_user:
#             new_user = models.User(
#                 first_name=first_name,
#                 last_name=last_name,
#                 email=email,
#                 password=hash_password("facebook_oauth_user")
#             )
#             db.add(new_user)
#             db.commit()
#             db.refresh(new_user)

#         next_url = request.session.pop("next", "http://localhost:5173/profile")
#         return RedirectResponse(url=f"{next_url}?email={email}")

#     except Exception as e:
#         print("Error during Facebook OAuth:", e)
#         traceback.print_exc()
#         return JSONResponse({"error": "Facebook login failed", "details": str(e)}, status_code=500)
   
# #//CONTACT API

# @app.post("/contact")
# def create_contact(data: schemas.ContactCreate, db: Session = Depends(database.get_db)):
#     new_message = models.Contact(
#         name=data.name,
#         email=data.email,
#         message=data.message
#     )
#     db.add(new_message)
#     db.commit()
#     db.refresh(new_message)
#     return {"success": True, "message": "Contact message saved successfully!"}


# #####user questions track

# @app.get("/profile-progress/{user_id}")
# def profile_progress(user_id: int, db: Session = Depends(database.get_db)):

#     sections = {
#         "Practice Programming Language": 24,
#         "Basic Standard Problem Solving": 36,
#         "Service-Based Pattern": 80,
#         "Service-Based Sheet": 240,
#         "Product-Based Pattern": 166,
#         "Product-Based Sheet": 412,
#         "All-in-one DSA Sheet": 747,
#         "Blind75": 75,
#         "Competitive Programming": 0
#     }

#     result = []

#     for section, total in sections.items():
#         solved = (
#             db.query(models.UserProgress)
#             .join(models.Question, models.Question.id == models.UserProgress.question_id)
#             .filter(
#                 models.UserProgress.user_id == user_id,
#                 models.Question.section == section,
#                 models.UserProgress.solved == True
#             )
#             .count()
#         )

#         result.append({
#             "section": section,
#             "solved": solved,
#             "total": total,
#             "percent": int((solved / total) * 100) if total > 0 else 0
#         })

#     return {"sections": result}



# @app.post("/progress/update")
# def update_progress(data: dict, db: Session = Depends(database.get_db)):

#     user_id = data.get("user_id")
#     question_id = data.get("question_id")
#     section = data.get("section")
#     solved = data.get("solved", True)

#     existing = (
#         db.query(models.UserProgress)
#         .filter(
#             models.UserProgress.user_id == user_id,
#             models.UserProgress.question_id == question_id
#         )
#         .first()
#     )

#     if existing:
#         existing.solved = solved
#         existing.section = section
#         db.commit()
#         return {"message": "Updated"}

#     new_entry = models.UserProgress(
#         user_id=user_id,
#         question_id=question_id,
#         section=section,
#         solved=solved
#     )
#     db.add(new_entry)
#     db.commit()
#     db.refresh(new_entry)

#     return {"message": "Created"}



# @app.get("/get-progress/{user_id}")
# def get_progress(user_id: int, db: Session = Depends(database.get_db)):

#     solved = db.query(models.UserProgress).filter(
#         models.UserProgress.user_id == user_id,
#         models.UserProgress.solved == True
#     ).count()

#     return {
#         "dsa_solved": solved,
#         "total_425": f"{solved}/425",
#         "percent": int((solved/425)*100)
#     }





# @app.get("/profile-progress/{user_id}")
# def profile_progress(user_id: int, db: Session = Depends(database.get_db)):

#     sections = {
#         "Practice Programming Language": 24,
#         "Basic Standard Problem Solving": 36,
#         "Service-Based Pattern": 80,
#         "Service-Based Sheet": 240,
#         "Product-Based Pattern": 166,
#         "Product-Based Sheet": 412,
#         "All-in-one DSA Sheet": 747,
#         "Blind75": 75,
#         "Competitive Programming": 0
#     }

#     result = []

#     for name, total in sections.items():
#         solved = (
#             db.query(models.UserProgress)
#             .filter(
#                 models.UserProgress.user_id == user_id,
#                 models.UserProgress.section == name
#             ).count()
#         )

#         result.append({
#             "section": name,
#             "solved": solved,
#             "total": total
#         })

#     return {"sections": result}


# #####user questions track


# # USER CAREER PAGE

# from fastapi import File, UploadFile, Form
# import shutil
# import os

# @app.post("/career/submit")
# async def submit_career_form(
#     full_name: str = Form(...),
#     email: str = Form(...),
#     stream: str = Form(...),
#     resume: UploadFile = File(...),
#     db: Session = Depends(database.get_db)
# ):

#     # ------------------------------
#     # Save Resume to Folder
#     # ------------------------------
#     uploads_folder = "uploads/resumes"
#     os.makedirs(uploads_folder, exist_ok=True)

#     file_path = f"{uploads_folder}/{resume.filename}"

#     with open(file_path, "wb") as buffer:
#         shutil.copyfileobj(resume.file, buffer)

#     # ------------------------------
#     # Save Data to Database
#     # ------------------------------
#     new_entry = models.Career(
#         full_name=full_name,
#         email=email,
#         stream=stream,
#         resume=file_path
#     )

#     db.add(new_entry)
#     db.commit()
#     db.refresh(new_entry)

#     return {"success": True, "message": "Career form submitted!"}


## working

# main.py
import os
from datetime import datetime, timedelta
from tkinter.messagebox import QUESTION
from pydantic import BaseModel

from fastapi import FastAPI, Depends, HTTPException, Request, Response, status
from fastapi.responses import RedirectResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import func
from starlette.middleware.sessions import SessionMiddleware
from sqlalchemy.orm import Session
from authlib.integrations.starlette_client import OAuth
import traceback

import database
import models
import schemas
from utils import hash_password, verify_password  # tumhare utils se


from passlib.context import CryptContext
from fastapi import HTTPException

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from sqlalchemy.orm import Session
from datetime import timedelta
from auth import create_access_token

   # jahan get_current_user hai wahi se

##from models import Question, User, UserProgress
from models import User, UserQuestionProgress

from schemas import ProgressCreate
from datetime import timedelta
from auth import SECRET_KEY, ALGORITHM



ACCESS_TOKEN_EXPIRE_MINUTES = 60


# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")  # ✅


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
# ----NEW----#


# ----NEW----#
# -----------------------
# Config
# -----------------------
# SECRET_KEY = os.getenv("SECRET_KEY", "change_this_secret_in_prod")
# ALGORITHM = "HS256"
# ACCESS_TOKEN_EXPIRE_DAYS = int(os.getenv("ACCESS_TOKEN_EXPIRE_DAYS", "30"))  # 30 days
# COOKIE_NAME = "access_token"
# COOKIES_ACCEPTED_NAME = "cookies_accepted"
# COOKIE_MAX_AGE = ACCESS_TOKEN_EXPIRE_DAYS * 24 * 60 * 60  # seconds
# COOKIES_ACCEPTED_MAX_AGE = 60 * 60 * 24 * 30  # 30 days

# # If you're serving over HTTPS in production, set USE_HTTPS_COOKIES=1
# USE_HTTPS_COOKIES = os.getenv("USE_HTTPS_COOKIES", "0") == "1"

# FRONTEND_DEFAULT = os.getenv("FRONTEND_URL", "http://localhost:5173")

# -----------------------
# DB / App setup
# -----------------------
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

# Session middleware (used by authlib OAuth)
app.add_middleware(
    SessionMiddleware,
    secret_key=os.getenv("SESSION_SECRET", "super-secret-session-key"),
    same_site="lax",
   ## https_only=USE_HTTPS_COOKIES
)

# CORS - allow credentials so cookie is sent from browser
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:8000",
        "http://127.0.0.1:8000",
        "https://ample-determination-production-08d6.up.railway.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# OAuth config
oauth = OAuth()

google = oauth.register(
    name="google",
    client_id=os.getenv("GOOGLE_CLIENT_ID", ""),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET", ""),
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"},
    redirect_uri=os.getenv("GOOGLE_REDIRECT_URI", "http://localhost:8000/auth/google/callback"),
)

facebook = oauth.register(
    name="facebook",
    client_id=os.getenv("FACEBOOK_CLIENT_ID", ""),
    client_secret=os.getenv("FACEBOOK_CLIENT_SECRET", ""),
    access_token_url="https://graph.facebook.com/oauth/access_token",
    authorize_url="https://www.facebook.com/dialog/oauth",
    api_base_url="https://graph.facebook.com/",
    client_kwargs={"scope": "email"},
    redirect_uri=os.getenv("FACEBOOK_REDIRECT_URI", "http://localhost:8000/auth/facebook"),
)

# -----------------------
# Minimal JWT helpers (so you don't need external auth.py)
# -----------------------
# from jose import jwt, JWTError

# def create_access_token(data: dict, expires_delta: timedelta | None = None):
#     to_encode = data.copy()
#     if expires_delta:
#         expire = datetime.utcnow() + expires_delta
#     else:
#         expire = datetime.utcnow() + timedelta(days=ACCESS_TOKEN_EXPIRE_DAYS)
#     to_encode.update({"exp": expire})
#     encoded = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
#     return encoded

# def decode_access_token(token: str):
#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         return payload
#     except JWTError:
#         return None

# -----------------------
# Utils
# -----------------------
# def set_token_cookie_on_response(response: Response, token: str):
#     # HttpOnly cookie for JWT
#     response.set_cookie(
#         key=COOKIE_NAME,
#         value=token,
#         httponly=True,
#         max_age=COOKIE_MAX_AGE,
#        secure=USE_HTTPS_COOKIES,
#         ##secure=False
#         samesite="lax",
#         path="/",
#     )

# def delete_token_cookie_on_response(response: Response):
#     response.delete_cookie(COOKIE_NAME, path="/")

# Dependency to get DB session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# -----------------------
# Routes
# -----------------------


# SECRET_KEY = "SECRET123"   # abhi simple rakho
# ALGORITHM = "HS256"

# def get_current_user(
#     token: str = Depends(oauth2_scheme),
#     db: Session = Depends(get_db)
# ):
#     credentials_exception = HTTPException(
#         status_code=status.HTTP_401_UNAUTHORIZED,
#         detail="Not authenticated",
#         headers={"WWW-Authenticate": "Bearer"},
#     )

#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         user_id: int = payload.get("user_id")
#        # user_id: int = int(payload.get("sub"))

#         if user_id is None:
#             raise credentials_exception
#     except JWTError:
#         raise credentials_exception

#     user = db.query(models.User).filter(models.User.id == user_id).first()
#     if user is None:
#         raise credentials_exception

#     return user

# def get_current_user(
#     token: str = Depends(oauth2_scheme),
#     db: Session = Depends(get_db)
# ):
#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         user_id = payload.get("user_id")
#         if user_id is None:
#             raise HTTPException(status_code=401, detail="Invalid token")

#     except JWTError:
#         raise HTTPException(status_code=401, detail="Invalid token")

#     user = db.query(models.User).filter(models.User.id == user_id).first()

#     if not user:
#         raise HTTPException(status_code=401, detail="User not found")

#     return user

# def get_current_user(
#     token: str = Depends(oauth2_scheme),
#     db: Session = Depends(get_db)
# ):
#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         email: str = payload.get("sub")

#         if email is None:
#             raise HTTPException(status_code=401, detail="Invalid token")

#         user = db.query(models.User).filter(
#             models.User.email == email
#         ).first()

#         if not user:
#             raise HTTPException(status_code=401, detail="User not found")

#         return user

#     except JWTError:
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Could not validate credentials",
#         )
    

def get_current_user(
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")

        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token")

    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    user = db.query(User).filter(User.email == email).first()

    if user is None:
        raise HTTPException(status_code=401, detail="User not found")

    return user
    

@app.get("/")
def read_root():
    return {"message": "FastAPI is working"}



# ================= REGISTER =================
@app.post("/register")
def register(user: schemas.RegisterSchema, db: Session = Depends(get_db)):

    existing = db.query(models.User).filter(models.User.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    new_user = models.User(
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        hashed_password=hash_password(user.password),
        auth_provider="local"
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User registered successfully"}

# # ================= LOGIN =================
# @app.post("/login")
# def login(data: schemas.LoginSchema, db: Session = Depends(get_db)):

#     user = db.query(models.User).filter(models.User.email == data.email).first()

#     if not user:
#         raise HTTPException(status_code=400, detail="Invalid email or password")

#     if not verify_password(data.password, user.hashed_password):
#         raise HTTPException(status_code=400, detail="Invalid email or password")

#     access_token = create_access_token(
#     data={"user_id": user.id},   # ✔ SAME key
#     expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
# )


#     return {
#         "message": "Login successful",
#         "user_id": user.id,
#         "email": user.email,
#         "access_token": access_token
#     }



# @app.post("/login")
# def login(
#     form_data: OAuth2PasswordRequestForm = Depends(),
#     db: Session = Depends(get_db)
# ):
#     user = db.query(models.User).filter(
#         models.User.email == form_data.username
#     ).first()

#     if not user or not verify_password(form_data.password, user.hashed_password):
#         raise HTTPException(status_code=400, detail="Invalid email or password")

#     access_token = create_access_token(
#         data={"user_id": user.id},
#         expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
#     )

#     return {
#         "access_token": access_token,
#         "token_type": "bearer"
#     }

def authenticate_user(db: Session, email: str, password: str):
    user = db.query(models.User).filter(models.User.email == email).first()
    if not user:
        return None

    if not verify_password(password, user.hashed_password):
        return None

    return user


# @app.post("/login")
# def login(
#     form_data: OAuth2PasswordRequestForm = Depends(),
#     db: Session = Depends(get_db)
# ):
#     user = authenticate_user(db, form_data.username, form_data.password)

#     if not user:
#         raise HTTPException(status_code=400, detail="Invalid credentials")

#     access_token = create_access_token(
#         data={"user_id": user.id}
#     )

#     return {
#         "access_token": access_token,
#         "token_type": "bearer"
#     }

@app.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):

    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    # access_token = create_access_token(data={"sub": str(user.id)})
    access_token = create_access_token(
    data={"sub": user.email}
)


    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name
        }
    }




@app.get("/me")
def get_me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "first_name": current_user.first_name,
        "last_name": current_user.last_name
    }
# -----------------------
# Google OAuth flow (sets cookie and redirects to frontend)
# -----------------------
# @app.get("/login/google")
# async def login_google(request: Request):
#     # store next (frontend redirect after oauth)
#     request.session["next"] = os.getenv("GOOGLE_NEXT_URL", FRONTEND_DEFAULT + "/profile")
#     redirect_uri = google.redirect_uri
#     return await google.authorize_redirect(request, redirect_uri)


# @app.get("/auth/google/callback")
# async def auth_google(request: Request, db: Session = Depends(get_db)):
#     try:
#         token = await google.authorize_access_token(request)
#         user_info = token.get("userinfo") or await google.parse_id_token(request, token)
#         if not user_info:
#             raise HTTPException(status_code=400, detail="Google login failed")

#         email = user_info["email"]
#         name = user_info.get("name", "")
#         first_name = name.split(" ")[0] if name else ""
#         last_name = " ".join(name.split(" ")[1:]) if name else ""

#         # create if not exists
#         db_user = db.query(models.User).filter(models.User.email == email).first()
#         if not db_user:
#             new_user = models.User(
#                 first_name=first_name,
#                 last_name=last_name,
#                 email=email,
#                 password=hash_password("google_oauth_user")
#             )
#             db.add(new_user)
#             db.commit()
#             db.refresh(new_user)
#             db_user = new_user

        # create token and set cookie on redirect response
        # token_jwt = create_access_token({"sub": str(db_user.id), "email": db_user.email}, expires_delta=timedelta(days=ACCESS_TOKEN_EXPIRE_DAYS))

        # next_url = request.session.pop("next", FRONTEND_DEFAULT + "/profile")
        # redirect = RedirectResponse(url=next_url)
        # # set HttpOnly cookie on the redirect response
        # redirect.set_cookie(
        #     key=COOKIE_NAME,
        #     value=token_jwt,
        #     httponly=True,
        #     max_age=COOKIE_MAX_AGE,
        #     secure=USE_HTTPS_COOKIES,
        #     samesite="lax",
        #     path="/",
        # )
        # return redirect

    # except Exception as e:
    #     traceback.print_exc()
    #     return JSONResponse({"error": "Google OAuth failed", "details": str(e)}, status_code=500)


# -----------------------
# Facebook OAuth flow (sets cookie and redirects to frontend)
# # -----------------------
# @app.get("/login/facebook")
# async def login_facebook(request: Request):
#     request.session["next"] = os.getenv("FACEBOOK_NEXT_URL", FRONTEND_DEFAULT + "/profile")
#     redirect_uri = facebook.redirect_uri
#     return await facebook.authorize_redirect(request, redirect_uri)


# @app.get("/auth/facebook")
# async def auth_facebook(request: Request, db: Session = Depends(get_db)):
#     try:
#         token = await facebook.authorize_access_token(request)
#         resp = await facebook.get("me?fields=id,name,email", token=token)
#         user_info = resp.json()

#         email = user_info.get("email")
#         name = user_info.get("name", "")
#         if not email:
#             raise HTTPException(status_code=400, detail="Facebook auth failed")

#         first_name = name.split(" ")[0] if name else ""
#         last_name = " ".join(name.split(" ")[1:]) if name else ""

#         db_user = db.query(models.User).filter(models.User.email == email).first()
#         if not db_user:
#             new_user = models.User(
#                 first_name=first_name,
#                 last_name=last_name,
#                 email=email,
#                 password=hash_password("facebook_oauth_user")
#             )
#             db.add(new_user)
#             db.commit()
#             db.refresh(new_user)
#             db_user = new_user

#         token_jwt = create_access_token({"sub": str(db_user.id), "email": db_user.email}, expires_delta=timedelta(days=ACCESS_TOKEN_EXPIRE_DAYS))

    #     next_url = request.session.pop("next", FRONTEND_DEFAULT + "/profile")
    #     redirect = RedirectResponse(url=next_url)
    #     redirect.set_cookie(
    #         key=COOKIE_NAME,
    #         value=token_jwt,
    #         httponly=True,
    #         max_age=COOKIE_MAX_AGE,
    #         secure=USE_HTTPS_COOKIES,
    #         samesite="lax",
    #         path="/",
    #     )
    #     return redirect

    # except Exception as e:
    #     traceback.print_exc()
    #     return JSONResponse({"error": "Facebook login failed", "details": str(e)}, status_code=500)


# -----------------------
# Contact, progress, career routes left as-is below (if you already have them),
# ensure they still import database.get_db / models used earlier.
# -----------------------


@app.post("/contact")
def create_contact(data: schemas.ContactCreate, db: Session = Depends(get_db)):
    new_message = models.Contact(
        name=data.name,
        email=data.email,
        message=data.message
    )
    db.add(new_message)
    db.commit()
    db.refresh(new_message)
    return {"success": True, "message": "Contact message saved successfully!"}


# ---------------------------------------------------------------------#

# @app.post("/api/progress")
# def save_progress(
#     data: ProgressCreate,
#     db: Session = Depends(get_db),
#     current_user: models.User = Depends(get_current_user)
# ):
#     progress = db.query(models.UserProgress).filter(
#         models.UserProgress.user_id == current_user.id,
#         models.UserProgress.question_id == data.question_id
#     ).first()

#     if not progress:
#         progress = models.UserProgress(
#             user_id=current_user.id,
#             question_id=data.question_id,
#             difficulty=data.difficulty,
#             category=data.category
#         )
        
#     db.add(progress)
#     db.commit()
#     return {"status": "saved"}





# @app.get("/api/progress/{section}")
# def get_progress(
#     section: str,
#     db: Session = Depends(get_db),
#     current_user: models.User = Depends(get_current_user)
# ):
#     rows = (
#         db.query(models.UserProgress)
#         .join(Question, Question.id == models.UserProgress.question_id)
#         .filter(
#             models.UserProgress.user_id == current_user.id,
#             Question.section == section
#         )
#         .all()
#     )

#     return rows



# @app.delete("/api/progress/{question_id}")
# def delete_progress(
#     question_id: int,
#     db: Session = Depends(get_db),
#     current_user: models.User = Depends(get_current_user)
# ):
#     progress = db.query(models.UserProgress).filter(
#         models.UserProgress.user_id == current_user.id,
#         models.UserProgress.question_id == question_id
#     ).first()

#     if progress:
#         db.delete(progress)
#         db.commit()

#     return {"status": "unsolved"}







##------FINAL PROGRESS-------##

@app.post("/question/check")
def check_uncheck_question(
    data: schemas.QuestionProgressSchema,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    existing = db.query(models.UserQuestionProgress).filter(
        models.UserQuestionProgress.user_id == current_user.id,
        models.UserQuestionProgress.question_id == data.question_id,
        models.UserQuestionProgress.sheet_name == data.sheet_name
    ).first()

    # ✅ UNTICK → DELETE
    if data.checked is False:
        if existing:
            db.delete(existing)
            db.commit()
        return {"message": "Unchecked successfully"}

    # ✅ TICK → INSERT
    if not existing:
        progress = models.UserQuestionProgress(
            user_id=current_user.id,
            question_id=data.question_id,
            title=data.title,
            category=data.category,
            difficulty=data.difficulty,
            company=data.company,
            sheet_name=data.sheet_name
        )
        db.add(progress)
        db.commit()

    return {"message": "Checked successfully"}



@app.get("/question/status")
def get_checked_questions(
    sheet: str,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    rows = db.query(models.UserQuestionProgress.question_id).filter(
        models.UserQuestionProgress.user_id == current_user.id,
        models.UserQuestionProgress.sheet_name == sheet
    ).all()

    ##return [r[0] for r in rows]
     # 🔥 IMPORTANT: frontend ke liye sirf IDs
    ##return [int(r.question_id) for r in rows]
    return [r.question_id for r in rows]




@app.get("/profile/progress")
def profile_progress(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    # Define all sheets with their total questions
    sheets_config = {
        "DSA Sheet": 425,
        "Blind75": 75,
        "ServiceBasedDSA Sheet": 240,
        "ServiceBasedPatternDSA Sheet": 80,
        "All in one DSA Sheet": 747,
        "Algorithm": 166,
    }

    # Get solved counts per sheet
    solved_data = db.query(
        models.UserQuestionProgress.sheet_name,
        func.count().label("solved")
    ).filter(
        models.UserQuestionProgress.user_id == current_user.id
    ).group_by(models.UserQuestionProgress.sheet_name).all()

    # Create a dict for easy lookup
    solved_dict = {row.sheet_name: row.solved for row in solved_data}

    # Build response with all sheets
    sections = []
    for sheet_name, total in sheets_config.items():
        solved = solved_dict.get(sheet_name, 0)
        sections.append({
            "title": sheet_name,
            "done": f"{solved}/{total}",
            "solved": solved,
            "total": total
        })

    return {"sections": sections}


# ================= CAREER FORM =================
from fastapi import File, UploadFile, Form
import shutil

@app.post("/career/submit")
async def submit_career_form(
    full_name: str = Form(...),
    email: str = Form(...),
    stream: str = Form(...),
    resume: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    # Save Resume to Folder if provided
    file_path = None
    if resume:
        uploads_folder = "uploads/resumes"
        os.makedirs(uploads_folder, exist_ok=True)
        file_path = f"{uploads_folder}/{resume.filename}"
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(resume.file, buffer)

    # Save Data to Database
    new_entry = models.Career(
        full_name=full_name,
        email=email,
        stream=stream,
        resume=file_path or ""
    )

    db.add(new_entry)
    db.commit()
    db.refresh(new_entry)

    return {"success": True, "message": "Career form submitted successfully!"}

