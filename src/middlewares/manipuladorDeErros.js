import mongoose from "mongoose";

function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    res
      .status(400)
      .send({ message: "Um ou mais dados fornecidos estão incorretos" });
  } else if (erro instanceof mongoose.Error.ValidationError) {
    res.status(400).send({ message: "Houve um erro de validação de dados" });
    const mensage
  } else {
    res.status(500).send({ message: "Erro interno de servidor" });
  }
}

export default manipuladorDeErros;
