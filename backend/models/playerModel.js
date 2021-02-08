import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({

    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    basePrice: { type: Number, required: true },
    sellPrice: { type: Number, required: true },
    country: { type: String, required: true },
    international: { type: String, required: true },
    ranking: { type: Number, required: true },
    description: { type: String, required: true },
    soldTo: { type: String, required: true },
},
{
    timestamps: true,
});

const Player = mongoose.model('Player', playerSchema);

export default Player;