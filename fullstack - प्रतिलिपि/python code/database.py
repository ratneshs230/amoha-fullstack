from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()

# Try MySQL first, fall back to SQLite for local development
DATABASE_URL = os.getenv("DATABASE_URL")

# Convert mysql:// to mysql+pymysql:// for SQLAlchemy compatibility
if DATABASE_URL and DATABASE_URL.startswith("mysql://"):
    DATABASE_URL = DATABASE_URL.replace("mysql://", "mysql+pymysql://", 1)
    print(f"Converted DATABASE_URL to use pymysql driver")

try:
    if not DATABASE_URL:
        raise ValueError("DATABASE_URL is not set")
    engine = create_engine(DATABASE_URL)
    # Test connection
    with engine.connect() as conn:
        pass
    print("MySQL connection successful!")
except Exception as e:
    print(f"MySQL connection failed: {e}")
    print("Falling back to SQLite for local development...")
    SQLITE_URL = "sqlite:///./amoha_local.db"
    engine = create_engine(SQLITE_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


##progress tracking--------

# import os
# from sqlalchemy import create_engine
# from sqlalchemy.orm import sessionmaker, declarative_base
# from dotenv import load_dotenv

# load_dotenv()

# USER = os.getenv("MYSQL_USER", "root")
# PASSWORD = os.getenv("MYSQL_PASSWORD", "")
# HOST = os.getenv("MYSQL_HOST", "127.0.0.1")
# DB = os.getenv("MYSQL_DB", "amoha")

# DATABASE_URL = f"mysql+pymysql://{USER}:{PASSWORD}@{HOST}/{DB}?charset=utf8mb4"

# engine = create_engine(DATABASE_URL, echo=False, future=True)
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# ###Base = declarative_base()

# # dependency
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()


##progress tracking--------
