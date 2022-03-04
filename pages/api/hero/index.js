/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../db/dbconnect'

import Hero from '../../../models/hero'

dbConnect()

export default async (req, res) => {
    const {method} = req

    switch(method) {
        case 'GET':
            try {
                // get all records
                const heros = await Hero.find({})
                res.status(200).json({success:true, hero: heros})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        
        case 'POST':
            try {
                // new data insert
                const heros = await Hero.create(req.body)
                res.status(200).json({success:true, hero: heros})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        
        default:
            res.status(400).json({success: false})
            break;
    }
}