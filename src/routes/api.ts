import { Router, Request, Response } from "express";
import * as apiController from "../controllers/apiController";

export const router = Router()


router.get('/ping',apiController.ping)

router.get('/random',apiController.nRand)

router.get('/nome/:nome',apiController.name )

router.post('/phrase', apiController.createPhrase)
router.get('/phrases', apiController.listPhrases)
router.get('/phrase/random', apiController.randomPhrase)
router.get('/phrase/:id', apiController.listOnePhrase)
router.put('/phrase/:id', apiController.updatePhrase)
router.delete('/phrase/:id', apiController.deletePhrase)

