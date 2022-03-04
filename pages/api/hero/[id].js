/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../db/dbconnect'

import Hero from '../../../models/hero'

dbConnect()

// get unique record by ID

export default async(req, res) => {
    const { 
        query: {id},
        method
    } = req

    switch (method) {
        case 'GET':
            // Get hero by ID
            try {
                const hero = await Hero.findById(id)

                if (hero) {
                    res.status(200).json({success: true, hero: hero})
                } else {
                    res.status(400).json({success: false})
                }
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        
        case 'PUT':
            // Update hero by ID
            try {
                const hero = await Hero.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })

                if (hero) {
                    res.status(200).json({success: true, hero: hero})
                } else {
                    res.status(400).json({success: false})
                }
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;

        case 'DELETE':
            // Delete hero by ID
            try {
                // _id is a DB column name for ID
                const hero = await Hero.deleteOne({_id: id})

                if (hero) {
                    res.status(200).json({success: true, hero: hero})
                } else {
                    res.status(400).json({success: false})
                }
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
    
        default:
            res.status(400).json({success: false})
            break;
    }
}