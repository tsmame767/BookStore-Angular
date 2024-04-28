import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpService) { }

  loginApi(data:object){
    return this.httpService.loginUser('User/Login',data);
  }

  registerApi(data:object){
    return this.httpService.registerUser('',data);
  }

  forgotPasswordApi(data: object) {
    return this.httpService.forgotPassword('User/ForgetPassword', data)
  }
  resetPsswordApi(data: object) {
    return this.httpService.resetPassword('User/ResetPassword', data)
  }
}
