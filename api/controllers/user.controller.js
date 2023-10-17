import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
    res.json({
        message: 'API is working',
    });
    };



 // Actualizar Usuario
 export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, 'Solo puedes actualizar tu cuenta!'))
    }
    try{
        if (req.body.password){
            req.body.password = bcryptjs.hash(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                profilePicture: req.body.profilePicture,
            }
          },  
          {new: true }
        );
        const {password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    }   catch(error){
        next(error);
    }
 };

 export const deleteUser = async (req, res, next) => {
    if(req.user.id !== req.params.id){
        return next(errorHandler(401, 'Solamente puedes eliminar si tienes una cuenta'));
    }
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('El usuario ha sido eliminado')
    } catch (error){
        next(error);
    }
 };

