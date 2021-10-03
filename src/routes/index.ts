import express from 'express'
import controller from '../controller/index'
const route = express.Router()

route.get('/', controller.getVerssion)

export default route