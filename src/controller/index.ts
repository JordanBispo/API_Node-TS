import { Request, Response } from 'express'

export const response = (
    res: Response,
    result: any,
    error: string = undefined,
    status: number = 200,
    success: boolean = true
): Response<any, Record<string, any>> => {
    return res.status(status).send({ success: success, result, error })
}


export default {
    getVerssion(req: Request, res: Response) {
        return response(res, 'v0.1.0')
    }
}