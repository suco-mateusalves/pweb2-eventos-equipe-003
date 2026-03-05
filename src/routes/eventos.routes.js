import { Router } from "express";
import { EventosDatabase } from "../database/EventosDatabase.js";

const router = Router()
const database = new EventosDatabase()

//listar eventos
router.get('/', (req, res) => {
   const eventos = db.listarTodos();
   res.json(eventos);
}
)
//Bucar eventos por Id
router.get('/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const evento = db.buscarPorId(id);

   if (!evento) {
      return res.status(404).json({ mensagem: "Evento não encontrado" });
   }
   res.json(evento);
});

// atualizar evento
router.put("/:id", (req, res) => {
   const { id } = Number(req.params.id)
   const dados = req.body
   const eventoAtualizado = db.atualizar(id, { ativo: false })
   if(!eventoAtualizado){
      return res.status(404).json({ mensagem: "Evento não encontrado" });
   }
   res.status(200).json({ mensagem: "Evento atualizado com sucesso"});
})

// remover evento
router.delete("/:id", (req, res) => {
   const { id } = Number(req.params.id)
   const removido = db.remover(id)
   if (!removido) {
      return res.status(404).json({ mensagem: "Evento não encontrado" });
   }
   res.status(204).json({ mensagem: "Evento removido com sucesso" });
})

// listar eventos ativos
router.get("/", (req, res) => {
   const eventosAtivos = db.listarTodos();
   let eventos = db.listarTodos()

   if(ativo === 'true'){
      eventos = eventos.filter(e => e.ativo === true);
   }
   res.status(200).json(eventos)
})

router.patch("/:id/cancelar", (req, res) => {
   const { id } = req.params
   database.atualizar(id, { ativo: false })
   res.status(204)
})

export default router
