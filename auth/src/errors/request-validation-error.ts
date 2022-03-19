import {ValidationError} from 'express-validator'
import {CustomError} from '../errors/custom-error'

export class RequestValidationError extends CustomError{
  statusCode = 400
  status = false
  constructor(public errors: ValidationError[]){
  super('Invalid Request parameters')
  //only becos we are extending a built-in class
  Object.setPrototypeOf(this,RequestValidationError.prototype)
  }

  serializeErrors(){
    return this.errors.map(err =>{
      return {message:err.msg,field:err.param,status:this.status,statusCode:this.statusCode}
    })
  }
}