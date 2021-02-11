import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
},
{
    timestamps: true,
});

const order = mongoose.model('order', orderSchema);

export default order;
