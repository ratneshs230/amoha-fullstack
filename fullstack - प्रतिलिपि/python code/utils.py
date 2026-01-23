from passlib.context import CryptContext

# Configure bcrypt to automatically truncate passwords longer than 72 bytes
pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto",
    bcrypt__rounds=12,
    bcrypt__truncate_error=False  # Allow truncation without error
)

def hash_password(password: str) -> str:
    """Hash a password using bcrypt. Passwords are automatically truncated to 72 bytes."""
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a password against its hash."""
    return pwd_context.verify(plain_password, hashed_password)
