import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  activeIndex = 0;


teamMembers = [
    {
      name: 'Divyajyoti Singhdeo',
      role: 'Team Leader',
      image: 'proxy/3000/../../assets/testimonial1.jpeg',
      quote: 'Leadership is not about being in charge, it’s about taking care of those in your charge.'
    },
    {
      name: 'Aditi Sharma',
      role: 'Team Member',
      image: 'assets/member1.jpg',
      quote: 'Code is like humor. When you have to explain it, it’s bad.'
    },
    {
      name: 'Ankit Jha',
      role: 'Team Member',
      image: 'assets/member2.jpg',
      quote: 'Design is not just what it looks like and feels like. Design is how it works.'
    },
    {
      name: 'Devyani Ushir',
      role: 'Team Member',
      image: 'assets/member3.jpg',
      quote: 'The best way to predict the future is to invent it.'
    },
    {
      name: 'Aswan S',
      role: 'Team Member',
      image: 'assets/member4.jpg',
      quote: 'Good management is the art of making problems so interesting that everyone wants to solve them.'
    }
  ];

  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.teamMembers.length) % this.teamMembers.length;
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.teamMembers.length;
  }
}