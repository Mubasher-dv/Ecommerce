import { stripe } from "../server.js";
import { asyncError } from "../middleware/error.js";
import { Order } from '../models/order.js'
import { Product } from "../models/product.js";
import ErrorHandler from "../utils/error.js";


export const processPayment = asyncError(async (req, res, next) => {

    const { totalAmount } = req.body;

    const { client_secret } = await stripe.paymentIntents.create({
        amount: Number(totalAmount * 100),
        currency: 'usd'
    })

    res.status(200).json({
        success: true,
        client_secret
    })
})

export const createOrder = asyncError(async (req, res, next) => {

    const {
        shippingInfo,
        orderItems,
        paymentMethod,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount
    } = req.body;

    await Order.create({
        user: req.user._id,
        shippingInfo,
        orderItems,
        paymentMethod,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount
    })

    for (let index = 0; index < orderItems.length; index++) {
        const product = await Product.findById(orderItems[index].product)
        product.stock -= orderItems[index].quantity;
        await product.save()
    }

    res.status(201).json({
        status: true,
        message: "Order Placed Successfully"
    })
})

export const getMyOrders = asyncError(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id })

    res.status(200).json({
        success: true,
        orders
    })
})

export const getAminOrders = asyncError(async (req, res, next) => {
    const orders = await Order.find()

    res.status(200).json({
        success: true,
        orders
    })
})

export const getOrderDetails = asyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (!order) return next(new ErrorHandler("Order not found", 404))

    res.status(200).json({
        success: true,
        order
    })
})

export const processOrder = asyncError(async (req, res, next) => {

    const order = await Order.findById(req.params.id)

    if (!order) return next(new ErrorHandler("Order not found", 404))

    if (order.OrderStatus === "Preparing") order.OrderStatus = "Shipped"

    else if (order.OrderStatus === "Shipped") {
        order.OrderStatus = "Delivered",
            order.deliveredAt = new Date(Date.now())
    } else {
        return next(new ErrorHandler("Order already delivered", 404))
    }

    await order.save()

    res.status(200).json({
        success: true,
        message: "Order processed Successfully"
    })
})