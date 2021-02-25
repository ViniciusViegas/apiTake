//Controller da rota
module.exports = app => {
    const repositoriosTakeDB = app.data.repositoriosTake;
    const controller = {};
  
    controller.listaRepositoriosTake = (req, res) => res.status(200).json(repositoriosTakeDB);
  
    return controller;
}