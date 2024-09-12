/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPassword = (inputPassword, inputIcon) => {
    const input = document.getElementById(inputPassword),
          iconEye = document.getElementById(inputIcon)
  
    iconEye.addEventListener('click', () => {
      // Change password to text
      if (input.type === 'password') {
        // Switch to text
        input.type = 'text'
  
        // Add icon
        iconEye.classList.add('ri-eye-line')
  
        // Remove icon
        iconEye.classList.remove('ri-eye-off-line')
      } else {
        // Change to password
        input.type = 'password'
  
        // Remove icon
        iconEye.classList.remove('ri-eye-line')
  
        // Add icon
        iconEye.classList.add('ri-eye-off-line')
      }
    })
}
  
  showHiddenPassword('password', 'input-icon')

  window.onload = function() {
    var myInput = document.getElementById('password');
    
    myInput.oncopy = function(e) {
      e.preventDefault();
    }
  }