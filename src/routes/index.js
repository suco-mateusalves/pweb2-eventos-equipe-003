import { Router } from "express";
import rateLimit from "express-rate-limit";

const router = Router()

const limiteGeral = rateLimit({
   windowMs: 15 * 60 * 1000,
   max: 100,
   message: { erro: 'Muitas requisições. Tente novamente em 15 minutos.' },
   standardHeaders: true,  // Inclui headers RateLimit-* na resposta
   legacyHeaders: false,
});


// exemplo
// router.use('/usuarios', limiteGeral, usuariosRouter);

export default router