import {chara} from "../models/chara.model";

export interface CreateCharaInput {
    name: string;
    path: string;
    Element: string;
    Rarity: Number;
    HP: Number;
    ATK: Number;
    DEF: Number;
    SPD: Number;
    Image: string;
    Skill: Array<{
        name: string;
        type: string;
        description: string;
        break: Number;
        energygain: Number;
    }>;
    Trace: Array<{
        name: string;
        type: string;
        type2: string;
        description: string;
    }>;
    Eidolon: Array<{
        name: string;
        type: string;
        type2: string;
        description: string;
    }>;
}

export interface UpdateCharaInput {
    name?: string;
    path?: string;
    Element?: string;
    Rarity?: Number;
    HP?: Number;
    ATK?: Number;
    DEF?: Number;
    SPD?: Number;
    Image?: string;
    Skill?: Array<{
        name: string;
        type: string;
        description: string;
        break: Number;
        energygain: Number;
    }>;
    Trace?: Array<{
        name: string;
        type: string;
        type2: string;
        description: string;
    }>;
    Eidolon?: Array<{
        name: string;
        type: string;
        type2: string;
        description: string;
    }>;
}

export const CharaService = {
    async getAllCharas() {
        try {
            const charas = await chara.find();
            return charas;
        } catch (error) {
            throw error;
        }
    },

    async getCharaByName(charaId: string) {
        try {
            const charas = await chara.findOne({name: charaId});
            return charas;
        }
        catch (error) {
            throw error;
        }
    },

    async createChara(createCharaInput: CreateCharaInput) {
        try {
            const newChara = await chara.create(createCharaInput);
            return newChara;
        } catch (error) {
            throw error;
        }
    },

    async updateChara(charaId: string, updateCharaInput: UpdateCharaInput) {
        try {
            const charas = await chara.findOneAndUpdate({
                name: charaId
            }, updateCharaInput, {new: true});  // new: true returns the modified document
            return charas;  // returns null if no document is found
        } catch (error) {
            throw error;
        }
    },

    async deleteChara(charaId: string) {    
        try {
            const charas = await chara.findOneAndDelete({name: charaId});
            return charas;
        } catch (error) {
            throw error;
        }
    },

    async geteidolon(charaId: string) {
        try {
            const charas = await chara.findOne({name: charaId});
            if (charas) {
                return charas.Eidolon;
            } else {
                throw new Error('Character not found');
            }
        }
        catch (error) {
            throw error;
        }
    }, 

    async getmove(charaId: string) {
        try {
            const charas = await chara.findOne({name: charaId});
            if (charas) {
                return charas.Trace;
            } else {
                throw new Error('Character not found');
            }
        }
        catch (error) {
            throw error;
        }
    },

    async getstat(charaId: string) {
        try {
            const charas = await chara.findOne({name: charaId}, {Trace: 0, Eidolon: 0});
            return charas;
        }
        catch (error) {
            throw error;
        }
    }
};
