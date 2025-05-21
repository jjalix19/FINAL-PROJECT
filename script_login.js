    function sign_up() {
      const login = document.querySelector('.login_access');
      const register = document.querySelector('.login_registration');
      
      // Fade out login
      login.style.opacity = '0';
      
      setTimeout(() => {
        login.style.display = 'none';
        // Fade in registration
        register.style.display = 'block';
        setTimeout(() => {
          register.style.opacity = '1';
        }, 50);
      }, 300);
    }

    function back_to_login() {
      const login = document.querySelector('.login_access');
      const register = document.querySelector('.login_registration');
      
      // Fade out registration
      register.style.opacity = '0';
      
      setTimeout(() => {
        register.style.display = 'none';
        // Fade in login
        login.style.display = 'block';
        setTimeout(() => {
          login.style.opacity = '1';
        }, 50);
      }, 300);
    }

    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const emailInput = document.getElementById("loginEmail").value.trim();
      const passwordInput = document.getElementById("loginPassword").value;

      const validEmail = "aljoshua@gmail.com";
      const validPassword = "jj_Alix";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput)) {
          alert("Please enter a valid email address.");
          return false;
      }

      if (passwordInput.length < 6) {
          alert("Password must be at least 6 characters long.");
          return false;
      }

      if (emailInput === validEmail && passwordInput === validPassword) {
          // Add fade out effect before redirect
          document.querySelector('.container').style.opacity = '0';
          setTimeout(() => {
              window.location.href = "index.html";
          }, 300);
          return true;
      } else {
          alert("Invalid email or password.");
          return false;
      }
    });