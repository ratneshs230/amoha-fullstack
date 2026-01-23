from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto", bcrypt__rounds=12)

def _safe_truncate(password: str, max_bytes: int = 72) -> str:
    """Safely truncate password to max_bytes without breaking UTF-8."""
    encoded = password.encode("utf-8")
    if len(encoded) <= max_bytes:
        return password
    # Truncate bytes and decode back, handling potential mid-character cuts
    truncated = encoded[:max_bytes]
    # Decode with error handling to avoid issues with partial UTF-8 characters
    return truncated.decode("utf-8", errors="ignore")

def hash_password(password: str) -> str:
    """Hash a password using bcrypt. Long passwords are safely truncated to 72 bytes."""
    safe_password = _safe_truncate(password)
    return pwd_context.hash(safe_password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a password against its hash."""
    safe_password = _safe_truncate(plain_password)
    return pwd_context.verify(safe_password, hashed_password)
