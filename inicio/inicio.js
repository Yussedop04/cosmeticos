//login______________________________________________
  //inicialozar una variable que capture los datos del DOM en el html
  const loginform = document.querySelector('#loginForm');

  //inicializaremos un evento que nos envía la info
  loginform.addEventListener('submit', (e)=> {
      e.preventDefault()
      //inicializamos una variable que capture los datos que se ingresaron en html
      const email = document.querySelector('#email').value
      const password = document.querySelector('#password').value
      
      const Users =JSON.parse(localStorage.getItem('users')) || []
  
      const validUser = Users.find(user => user.email === email && user.password === password)
  
      if(!validUser){
          return alert ('usuario y/o contraseña son incorrectos')
      }
      alert(`bienvenido ${validUser.name}`)
  
      localStorage.setItem('login_success', JSON.stringify(validUser))
  
      //si se loguea exitosamente se redirecciona al home
      //buenas practicas fuera del condicional.
      window.location.href = 'index.html'
  })