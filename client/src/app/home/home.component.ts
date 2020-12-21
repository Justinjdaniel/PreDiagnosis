import { Component, OnInit, AfterContentInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit(): void {
    const plugins = [ScrollTrigger];
  }

  ngAfterContentInit(){
    gsap.timeline({
      scrollTrigger:{
        trigger:".content1",
        start:"top top",
        // end:"top center",
        // markers:true,
        scrub:1,
        toggleActions:"restart pause reverse pause",
        pin:true,
        // pinSpacing:false
        
      }
    })
    // .from(".content1",{opacity:0})
    .from(".intro1",{x: innerWidth * 1,})
    .from(".intro2",{x: innerWidth * -1,})

    gsap.timeline({
      scrollTrigger:{
        trigger:".content2",
        start:"top top",
        // end:"top center",
        // markers:true,
        scrub:1,
        toggleActions:"restart pause reverse pause",
        pin:true,
        // pinSpacing:false
      }
    })
    // .from(".content2",{opacity:0})
    .from(".head1",{x: innerWidth * -1})
    .from(".a1p1",{x: innerWidth * 1})
    .from(".a1p2",{x: innerWidth * -1})
    .from(".a1p3",{x: innerWidth * 1})

    gsap.timeline({
      scrollTrigger:{
        trigger:".content3",
        start:"top top",
        // end:"top center",
        // markers:true,
        scrub:1,
        toggleActions:"restart pause reverse pause",
        pin:true,
        // pinSpacing:false
      }
    })
    // .from(".content3",{y: innerWidth * -1})
    .from(".head2",{y: innerWidth * -1})
    .from(".a2p1",{y: innerWidth * 1})
    .from(".a2p2",{x: innerWidth * 1})
    .from(".a2p3",{x: innerWidth * -1})
  }

}
