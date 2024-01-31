import { Component } from '@angular/core';
import { LoginServiceService } from '../login/login.service.service';

@Component({
  selector: 'mean-hcomponent',
  templateUrl: './hcomponent.component.html',
  styleUrls: ['./hcomponent.component.css']
})
export class HcomponentComponent {
  projectName: string = 'H-Project';
  sliderClass:string = '';
  dripellaClass:string = '';
  wellComeMessage:string = 'Bienvenue <br/> cher client';
  greetingContent:string = ''
  information:string = `Entrer vos informations d'identification pour vous connecter`
  formClass:string = ''
  signUp:boolean = false
  connectMessage:string = 'Se connecter'
  signUpMessage:string = `S'inscrire`
  formTitle:string = 'Se connecter en tant que client'
  errMessage:string = ''

  constructor(
    private loginService: LoginServiceService
  ) {
    this.desactiveSignUp()
  }

  login = (email, pwd) => {
    let user = {
      email : email.value,
      password : pwd.value
    }
    // console.log("user",user);
    this.loginService.login(user, (err) => {
      this.errMessage = '**Veillez entrer vos vraies informations**'
    })
  }

  clickSignUp = () => {
    if (this.signUp) {
      this.desactiveSignUp();
    } else {
      this.activeSignUp();
    }
  }

  desactiveSignUp = () => {
    this.sliderClass = ' '
    this.dripellaClass = ' '
    this.wellComeMessage = "Bienvenue cher client"
    this.greetingContent = ' '
    this.information = `Entrer vos informations d'identification pour vous connecter`
    this.formClass = ''
    this.connectMessage = `Se connecter`
    this.signUpMessage = `S'inscrire`
    this.formTitle = `Se connecter en tant que client`
    this.signUp = false;
  }

  activeSignUp = () => {
    this.sliderClass = ' h-sign-up'
    this.dripellaClass = ' h-dripella-sign-up'
    this.wellComeMessage = 'Inscrivez-vous dès maintenant'
    this.greetingContent = ' h-greeting-content-sign-up'
    this.information = `Veillez à remplir toutes les informations`
    this.formClass = 'h-form'
    this.connectMessage = `S'inscrire`
    this.signUpMessage = 'Se connecter'
    this.formTitle = `S'inscrire sur notre plateforme`
    this.signUp = true
  }
}
