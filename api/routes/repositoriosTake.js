//A rota em si
module.exports = app => {
    const controller = app.controllers.repositoriosTake;
  
    app.route('/api/v1/repositorios-take')
      .get(controller.listaRepositoriosTake);
}