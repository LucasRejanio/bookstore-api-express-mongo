import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const Autores = await autor.find({});
      res.status(200).json(Autores);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao listar Autores` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id
      const AutorPorId = await autor.findById(id);
      res.status(200).json(AutorPorId);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao listar autor` });
    }
  }

  static async casdastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Autor cadastrado com sucesso!", Autor: novoAutor });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao listar autor` });
    }
  }

  static async deletarAutor(req, res) {
    try {
      const id = req.params.id
      await autor.findOneAndDelete(id);
      res.status(200).json({ message: "Autor excluído com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao deletar autor` });
    }
  }
};

export default AutorController;
