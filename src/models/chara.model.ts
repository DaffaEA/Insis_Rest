import mongoose, {Schema} from "mongoose";

const skillSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    break: {type: Number, required: true},
    energygain: {type: Number, required: true},
});

const traceEidolonSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    type2: {type: String, required: true},
    description: {type: String, required: true}
});


const charaSchema = new Schema({
    name: {type: String, required: true, unique: true},
    path: {type: String, required: true},
    Element: {type: String, required: true},
    Rarity: {type: Number, required: true},
    HP: {type: Number, required: true},
    ATK: {type: Number, required: true},
    DEF: {type: Number, required: true},
    SPD: {type: Number, required: true},
    Image: {type: String, required: true},
    Skill: [skillSchema],
    Trace: [traceEidolonSchema],
    Eidolon: [traceEidolonSchema]
});

const chara = mongoose.model('Chara', charaSchema);
export {chara};