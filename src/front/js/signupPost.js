export const signup = async (user, pass) => {
    const response = await fetch('https://3001-4geeksacade-reactflaskh-txblfjyrm12.ws-eu77.gitpod.io/signup', 
    { 
        method: "POST",
        body: JSON.stringify({ email: user, password: pass }) 
    }
   );
   if (response.status === 201) {
    return "User registered"
   }

   throw new Error (`Couldn´t register user . status : ${response.status}`)

};