import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { serverPort } from "../config";
import { currentIP } from "../helpers";

const prisma = new PrismaClient()
export const Categories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error: any = new Error("categories");
            error.data = errors.array();
            error.statusCode = 422;
            throw error;
        }
        else {
            const categories = await prisma.category.findMany({
                include:{
                    icon:true
                }
            });
            if (categories) {
                res.status(200).json({
                    data: categories,
                    statusCode: 200,
                    message: "success"
                })
            }
            else {
                res.status(422).json({
                    message: "fail",
                    statusCode: 422
                })
            }
        }
    } catch (error: any) {

        if (!error.statusCode) {
            error.statusCode = 500;
            prisma.$disconnect()
        }
        next(error);
    }
}
export const createCategory = async (req: any, res: Response, next: NextFunction) => {
    try {
      
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const error: any = new Error("Category");
            error.statusCode = 422;
            error.data = errors.array();
            throw error
        }
        else {
            console.log(req.files)
            const serverIp = currentIP() || "127.0.0.1"
            const fileNm = req && req.files && req.files.icon && req.files.icon[0].filename;
            const filePath = `http://${serverIp}:${serverPort}/gallery/${fileNm}`
            const category = await prisma.category.create({
                data: {
                    name: req.body.name,
                    icon: {
                        create: {
                            path: filePath,
                        }
                    },


                }
            })
            if (category) {
                res.status(200).json({
                    statusCode: 200,
                    message: `success`
                })
            }
            else {
                res.status(422).json({
                    statusCode: 422,
                    message: `fail`
                })
            }

        }
    } catch (error: any) {

        if (!error.statusCode) {
            error.statusCode = 500;
            prisma.$disconnect()
        }
        next(error);
    }
}

export const updateCategory = async (req: any, res: Response, next: NextFunction) => {
    try {
        const serverIp = currentIP() || "127.0.0.1"
        const fileNm = req && req.files && req.files.icon && req.files.icon[0].filename;
        const filePath = `http://${serverIp}:${serverPort}/gallery/${fileNm}`

        const image = await prisma.image.create({
            data: {
                path: filePath,

            }
        })


        const category = await prisma.category.update({
            where: {
                id: req.body.id
            },
            data: {
                name: req.body.name,
                imageId: image.id,


            }
        })
        if (category && category.imageId) {

            res.status(200).json({
                message: "success",
                statusCode: 200
            })
        }
        else {
            res.status(422).json({
                statusCode: 422,
                message: "fail"
            })
        }

    } catch (error: any) {


        if (!error.statusCode) {
            error.statusCode = 500;
            prisma.$disconnect()
        }
        next(error);
    }
}


export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error: any = new Error("delete category");
            error.data = errors.array();
            error.statusCode = 422;
            throw error;
        }
        else {
            const category = await prisma.category.delete({
                where: {
                    id: req.body.id
                }
            })
            if (category) {
                res.status(200).json({
                    message: "success",
                    statusCode: 200
                })
            }
            else {
                res.status(422).json({
                    statusCode: 422,
                    message: "fail"
                })
            }
        }

    } catch (error: any) {
        if (!error.statusCode) {
            error.statusCode = 500;
            prisma.$disconnect()
        }
        next(error);
    }
}

export const getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error: any = new Error("get categories");
            error.data = errors.array();
            error.statusCode = 422;
            throw error
        }
        else {
            const category = await prisma.category.findFirst({
                where: {
                    id: req.body.id
                }
            })
            if (category) {
                res.status(200).json({
                    message: "success",
                    statusCode: 200,
                    data: category

                })
            }
            else {
                res.status(422).json({
                    message: "fail",
                    statusCode: 422,

                })
            }
        }

    } catch (error: any) {
        if (!error.statusCode) {
            error.statusCode = 500;
            prisma.$disconnect()
        }
        next(error);
    }
}