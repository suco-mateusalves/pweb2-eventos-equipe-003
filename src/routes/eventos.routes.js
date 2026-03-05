import { Router } from "express";
import { EventosDatabase } from "../database/EventosDatabase.js";

const router = Router()
const database = new EventosDatabase()


router.patch("/:id/cancelar", (req, res) => {
   const { id } = req.params
   database.atualizar(id, { ativo: false })
   res.status(204)
})


export default router