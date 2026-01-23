from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto", bcrypt__rounds=12)

# ---------- REAL FIX ----------
def _truncate(password: str) -> bytes:
    # Bcrypt only supports up to 72 bytes - return bytes directly
    return password.encode("utf-8")[:72]

def hash_password(password: str) -> str:
    truncated = _truncate(password)
    return pwd_context.hash(truncated)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    truncated = _truncate(plain_password)
    return pwd_context.verify(truncated, hashed_password)
