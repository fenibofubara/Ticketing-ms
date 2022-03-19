
import {CustomError} from '../errors/custom-error'
// subclasss
export class DatabaseConnectionError extends CustomError{
statusCode = 500
status = false
reason = 'Error connecting to database'
  constructor(){
  super('Database connection error')
  //only becos we are extending a built-in class
  Object.setPrototypeOf(this,DatabaseConnectionError.prototype)
  }
  serializeErrors(){
    return [
      {message: this.reason,status:this.status,statusCode:this.statusCode}
    ]
  }
}