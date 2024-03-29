import { Router, Request, Response } from "express";
import * as apiController from "../controllers/apiController";

export const router = Router()


router.get('/ping',apiController.ping)

router.get('/random',apiController.nRand)

router.get('/nome/:nome',apiController.name )

router.get('/phrases', apiController.listPhrases)

router.get('/phrase/:id', apiController.listOnePhrase)

router.post('/phrase', apiController.createPhrase)

router.put('/phrase/:id', apiController.updatePhrase)

router.delete('/phrase/:id', apiController.deletePhrase)