//An abstract is used to check requirements for subclasses
export abstract class CustomError extends Error {
  abstract statusCode: number
  abstract status: boolean
  constructor(message:string){
    super(message)
    //only becos we are extending a built-in class
    Object.setPrototypeOf(this,CustomError.prototype)
  }
  abstract serializeErrors() : {message: string, field?:string, status:boolean,statusCode: number}[]
}