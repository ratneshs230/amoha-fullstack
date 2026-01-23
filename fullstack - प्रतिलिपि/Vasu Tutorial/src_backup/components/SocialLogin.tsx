
const SocialLogin = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://127.0.0.1:8000/auth/login/google";
  };

  const handleFacebookLogin = () => {
    window.location.href = "http://127.0.0.1:8000/auth/login/facebook";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Login with</h3>
      <button
        onClick={handleGoogleLogin}
        style={{
          backgroundColor: "#db4437",
          color: "white",
          padding: "10px 20px",
          margin: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Continue with Google
      </button>

      <button
        onClick={handleFacebookLogin}
        style={{
          backgroundColor: "#1877f2",
          color: "white",
          padding: "10px 20px",
          margin: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Continue with Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
