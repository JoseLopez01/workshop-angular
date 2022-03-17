import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.interface';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  data: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.collection.subscribe((data) => {
      this.data = data;
    });
  }
}
