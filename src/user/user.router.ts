import { Router } from "express";

const userRouter: Router = Router();

//  [----------------- GET REQUEST ---------------------] 

userRouter.get('/', (request: any, response: any) => {
    return response.status(200).json("get list adh")
});

userRouter.get('/:key', (request:any, response: any) => {
    return response.status(200).json("Get single adh")
});

//  [----------------- POST REQUEST ---------------------] 

userRouter.post('/list', (request: any, response: any) => {
    return response.status(200).json("create list of adh")
});

userRouter.post('/', (request:any, response: any) => {
    return response.status(200).json("create single adh")
});

//  [----------------- PATCH REQUEST ---------------------] 

userRouter.patch('/', (request: any, response: any) => {
    return response.status(200).json("update list of users")
});

userRouter.patch('/:key', (request:any, response: any) => {
    return response.status(200).json("update single user")
});

//  [----------------- PUT REQUEST ---------------------] 

userRouter.put('/', (request: any, response: any) => {
    return response.status(200).json("replace list of users")
});
 
userRouter.put('/:key', (request:any, response: any) => {
    return response.status(200).json("replace single user")
});

//  [----------------- DELETE REQUEST ---------------------]

userRouter.delete('/', (request: any, response: any) => {
    return response.status(200).json("delete list of users")
});

userRouter.delete('/:key', (request:any, response: any) => {
    return response.status(200).json("delete single user")
});




export default userRouter;