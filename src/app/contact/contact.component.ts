import { ContactService } from './../shared/contact/contact.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpResponse} from "@angular/common/http";
import {Contact} from '../shared/contact/contact.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;
  contactForm: FormGroup;
  formContact: string;
  submit: Boolean = false;
  sent: Boolean = false;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.initForm();
    this.resetContact();
    this.formContact = '';
  }

  createContact(): void {
    console.log(this.contactForm.valid);
    if (this.contactForm.valid) {
      // tslint:disable-next-line:max-line-length
      this.contact = new Contact(0, this.contactForm.value.mail_expediteur, this.contactForm.value.mail_destination, this.contactForm.value.objet, this.contactForm.value.contenu);
      console.log(this.contact);
      this.contactService.create(this.contact)
        .subscribe(
          // tslint:disable-next-line:no-unused-expression
          (value) => {
            this.resetContact();
            console.log('sent');
            this.formContact = 'Votre mail a bien été envoyé !';
            this.contactForm.reset();
          },
          (error) => {
            console.log('Une erreur s\'est produite au niveau du serveur');
            this.formContact = 'Une erreur s\'est produite au niveau du serveur';
          },
          () => {
            console.log('Mail terminé et envoyé');
          }
        );
    }
  }

  initForm(): void {
    this.contactForm = this.formBuilder.group({
      mail_expediteur: ['', [Validators.required, Validators.email]],
      mail_destination: ['', [Validators.required, Validators.email]],
      objet: ['', [Validators.required,Validators.minLength(0)]],
      contenu: ['', [Validators.required,Validators.minLength(0)]]
    });
  }

  resetContact(): void {
    this.contact = new Contact();
  }

  onSubmit() {
    if(this.isFormValid() ){
      this.submit = true;
      this.contactService.postContactForm(this.contact)
        .subscribe(
          (res:HttpResponse<Contact>) => {
            this.sent = true;
            this.submit = false;
          },
          () => this.sent = false
        );
      console.log(this.contact.mail_expediteur,this.contact.mail_destination, this.contact.objet, this.contact.contenu);
    }
  }

  isFormValid(){
    return this.isEmailValid() && this.isContentValid();
  }

  isContentValid(){
    if(undefined !== this.contact.contenu && this.contact.contenu.length>10){
      return true;
    } else {
      return false;
    }

  }

  isEmailValid(){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(<string>this.contact.mail_expediteur);
  }

}
