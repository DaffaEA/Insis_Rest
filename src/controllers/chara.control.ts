import { type NextFunction, type Request, type Response } from "express";

import { CharaService, type CreateCharaInput, type UpdateCharaInput } from "../services/chara.service";

export const CharaController = {
    async getCharas(req: Request, res: Response, next: NextFunction) {
        try {
            const charas = await CharaService.getAllCharas();
            res.status(200).json({
            status: 200,
            message: "Success",
            data: charas
            });
        } catch (error) {
            res.status(400).json({
            status: 400,
            message: "Error retrieving characters",
            error: (error as Error).message
            });
            next(error);
        }
    },

async getCharabyName(req: Request, res: Response, next: NextFunction) {
    try {
        const chara = await CharaService.getCharaByName(req.params.name);
        if (!chara) {
            res.status(404).json({
            status: 404,
            message: "Character not found"
            });
            return;
        }
        res.status(200).json({
            status: 200,
            message: "Success",
            data: chara
        });
        } catch (error) {
        res.status(400).json({
            status: 400,
            message: "Error retrieving character",
            error: (error as Error).message
        });
        next(error);
    }
},

async createChara(req: Request, res: Response, next: NextFunction) {
    try {
        const newChara = await CharaService.createChara(req.body as CreateCharaInput);
        res.status(201).json({
        status: 201,
        message: "Success",
        data: newChara
        });
    } catch (error) {
        res.status(400).json({
        status: 400,
        message: "Error creating character",
        error: (error as Error).message
        });
        next(error);
    }
},

async updateChara(req: Request, res: Response, next: NextFunction) {
    try {
        const updatedChara = await CharaService.updateChara(req.params.name, req.body as UpdateCharaInput);
        if (!updatedChara) {
            res.status(404).json({
            status: 404,
            message: "Character not found"
            });
            return;
        }
        res.status(200).json({
            status: 200,
            message: "Success",
            data: updatedChara
        });
    } catch (error) {
        res.status(400).json({
        status: 400,
        message: "Error updating character",
        error: (error as Error).message
        });
        next(error);
    }
    },

async deleteChara(req: Request, res: Response, next: NextFunction) {
    try {
        const deletedChara = await CharaService.deleteChara(req.params.name);
        if (!deletedChara) {
            res.status(404).json({
            status: 404,
            message: "Character not found"
            });
            return;
        }
        res.status(200).json({
            status: 200,
            message: "Success",
            data: deletedChara
        });
    } catch (error) {
        res.status(400).json({
        status: 400,
        message: "Error deleting character",
        error: (error as Error).message
        });
        next(error);
    }
}
};
