const localStrategy = require("passport-local")
const db = require("../config/database");

findLogin = async (req, res) => {
    const clienteEmail = parseInt(req.params.id);
    const response = await db.query("SELECT email, senha FROM clientes WHERE email = $1", [
      clienteEmail,
    ]);
}


module.exports = function(passport){
    passport.use(new localStrategy({usernameField: 'email', passportField: 'senha'}, (email, senha, done) => {
        
        const email = parseInt(req.params.id);
        const response = await db.query("SELECT email, senha FROM clientes WHERE email = $1", [
          email,
        ]);
        

    }))






}