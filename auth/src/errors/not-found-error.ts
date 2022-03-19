import{CustomError} from './custom-error'

export class NotFoundError extends CustomError{
 statusCode = 404
 status = false
 constructor(){
  super('Route Not Found')
  //only becos we are extending a built-in class
  Object.setPrototypeOf(this,NotFoundError.prototype)
  }
  serializeErrors(){
    return [{message:'not found',status:this.status,statusCode:this.statusCode}]
  }
}