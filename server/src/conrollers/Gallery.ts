import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { each } from "lodash";
import { clientPort, serverPort } from "../config";
import { currentIP } from "../helpers";
import QR from "qrcode";

import path from "path";
import { v4 } from "uuid";
const prisma = new PrismaClient();

export const Galleries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("categories");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const galleries = await prisma.gallery.findMany({
        include: {
          category: true,
          qr: true,
          img: true,
        },
      });
      res.status(200).json({
        message: "success",
        statusCode: 200,
        data: galleries,
      });
    }
  } catch (error: any) {
    if (!error.statusCode) {
      error.statusCode = 500;
      prisma.$disconnect();
    }
    next(error);
  }
};

export const getGallery = async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("categories");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const gallery = await prisma.gallery.findFirst({
        include: {
          category: true,
          qr: true,
          img: true,
        },
        where:{
          id:req.params.id
        }
      });
      res.status(200).json({
        message: "success",
        statusCode: 200,
        data: gallery,
      });
    }
  }catch (error: any) {
    if (!error.statusCode) {
      error.statusCode = 500;
      prisma.$disconnect();
    }
    next(error);
  }
}

interface pathProps {
  path: string;
}

export const createGallery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("categories");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      let paths: pathProps[] = [];
      const files: any = req.files;
      console.warn(files)
      if (files && files.img) {
        const images = files.img;
        each(images, (img) => {
          const serverIp = currentIP() || "127.0.0.1";
          const fileNm = img.filename;
          const filePath = `http://${serverIp}:${serverPort}/gallery/${fileNm}`;
          paths.push({
            path: filePath,
          });
        });
      }
      if (paths.length > 0) {
        const gallery = await prisma.gallery.create({
          data: {
            categoryId: req.body.categoryId,
            name: req.body.name,
            description: req.body.description,
            era: req.body.era,
            type: req.body.type,
            location: req.body.location,
            img: {
              createMany: {
                data: paths,
              },
            },
          },
        });
        if (gallery) {
          const galleryString = `http://${
            currentIP() || "127.0.0.1"
          }:${clientPort}/gallery/${gallery.id}`;
          const qrNm = `${v4()}.png`;
          await QR.toFile(
            `${path.join(
              __dirname,
              "..",
              "..",
              "public",
              "gallery",
              `${qrNm}`
            )}`,
            galleryString,
            { type: "png",errorCorrectionLevel:"H",margin:2,width:200 }
          );
          const qr = await prisma.qR.create({
            data: {
              path: `http://${
                currentIP() || "127.0.0.1"
              }:${serverPort}/gallery/${qrNm}`,
            },
          });
          await prisma.gallery.update({
            where: {
              id: gallery.id,
            },
            data: {
              qRId: qr.id,
            },
          });

          res.status(200).json({
            statusCode: 200,
            message: "success",
          });
        } else {
          res.status(422).json({
            statusCode: 422,
            message: "please upload files",
          });
        }
      } else {
        res.status(422).json({
          statusCode: 422,
          message: "please upload files",
        });
      }
    }
  } catch (error: any) {
    if (!error.statusCode) {
      error.statusCode = 500;
      prisma.$disconnect();
    }
    console.log(error);
    next(error);
  }
};
export const updateGallery = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("categories");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      let paths: pathProps[] = [];
     
      const files: any = req.files;
      if (files && files.img) {
        const images:any = files.img;
        each(images, (img) => {
          const serverIp = currentIP() || "127.0.0.1";
          const fileNm = img.filename;
          const filePath = `http://${serverIp}:${serverPort}/gallery/${fileNm}`;
          paths.push({
            path: filePath,
          });
        });
        if (paths.length > 0) {
          await prisma.image.deleteMany({
            where:{
              galleryId:req.body.id
            }
          })
          const gallery = await prisma.gallery.update({
            where: {
              id: req.body.id,
            },
            data: {
              categoryId: req.body.categoryId,
              name: req.body.name,
              description: req.body.description,
              era: req.body.era,
              type: req.body.type,
              location: req.body.location,
              img: {
                createMany: {
                  data: paths,
                },
              },
            },
          });
          if (gallery) {
              res.status(200).json({
                message:"success",
                statusCode:200
              })
          } else {
            res.status(422).json({
              message:"fail",
              statusCode:422
            })
          }
        }
      }
      else{
        res.status(422).json({
          message:"fail",
          statusCode:422
        })
      }

      
    }
  } catch (error: any) {
    console.log(error)
    if (!error.statusCode) {
      error.statusCode = 500;
      prisma.$disconnect();
    }
    next(error);
  }
};
export const deleteGallery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("categories");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const gallery = await prisma.gallery.delete({
        where:{
          id:req.body.id
        }
      })
      if (gallery) {
        res.status(200).json({
          message:"success",
          statusCode:200
        })
    } else {
      res.status(422).json({
        message:"fail",
        statusCode:422
      })
    }

    }
  } catch (error: any) {
    if (!error.statusCode) {
      error.statusCode = 500;
      prisma.$disconnect();
    }
    next(error);
  }
};
