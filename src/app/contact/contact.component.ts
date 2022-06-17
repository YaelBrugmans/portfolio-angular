import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../shared/contact/contact.model';
import { HttpResponse } from '@angular/common/http';
import {ImageService} from "../shared/img/image.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: Contact = new Contact();
  contactForm: FormGroup;
  formContact?: string;
  submit?: boolean;
  sent?: boolean;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private imageService: ImageService) {
    this.contactForm = this.formBuilder.group({});

    this.contact.message = '';
    this.contact.object = '';
    this.contact.email = 'example@example.com';
  }

  ngOnInit(): void {
    this.submit = false;
    this.sent = false;
    this.initForm();
    this.resetContact();
    this.formContact = '';
  }

  createContact(): void {
    if (this.contactForm && this.contactForm.valid) {
      this.contact = new Contact(0, this.contactForm.value.mail_expediteur, this.contactForm.value.mail_destination, this.contactForm.value.objet, this.contactForm.value.contenu);
      this.contactService.create(this.contact)
        .subscribe(
          (value) => {
            this.resetContact();
            this.formContact = 'Votre mail a bien été envoyé !';
            // @ts-ignore
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
      email: ['', [Validators.required, Validators.email]],
      mail_destination: ['', [Validators.required, Validators.email]],
      object: ['', [Validators.required, Validators.minLength(0)]],
      message: ['', [Validators.required, Validators.minLength(0)]]
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
          (res: HttpResponse<Contact>) => {
            this.sent = true;
            this.submit = false;
          },
          () => this.sent = false
        );
      console.log(this.contact.email, this.contact.date, this.contact.object, this.contact.message, this.contact.dateTime);
    }
  }

  isFormValid(): boolean{
    return this.isEmailValid() && this.isContentValid();
  }

  isContentValid(): boolean{
    return this.contact.message != undefined && this.contact.message.length >= 2;
  }

  isEmailValid(): boolean{
    if (this.contact && this.contact.email)
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(<string> this.contact.email);
    return false;
  }

}
