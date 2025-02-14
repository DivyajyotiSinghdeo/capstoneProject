import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Carousel } from 'bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent{
  
services = [
    { name: 'Fast Delivery', icon: 'fa-truck', description: 'Quick and reliable delivery services.' },
    { name: '24/7 Support', icon: 'fa-headset', description: 'Always available to assist you.' },
    { name: 'Secure Packaging', icon: 'fa-box', description: 'Ensuring safety of your goods.' },
    { name: 'Global Reach', icon: 'fa-globe', description: 'Delivering to any location worldwide.' },
    { name: 'Tracking', icon: 'fa-map-marker-alt', description: 'Track your shipments in real-time.' },
    { name: 'Custom Solutions', icon: 'fa-cogs', description: 'Tailored logistics solutions to meet your needs.' }
  ];

  
contact = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact Form Data:', this.contact);
    alert('Your message has been sent!');
    this.contact = { firstName: '', lastName: '', email: '', message: '' }; // Reset form
  }
}