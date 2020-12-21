import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  fData:any = {};
  cData:any = {};
  selectedArea: string = '';
  selectedSympi: string = '';
  
  showImage:boolean = false;
  showHead: boolean =false;
  showNeck: boolean =false;
  showShoulder: boolean =false;
  showArm: boolean =false;
  showChest: boolean =false;
  showAbdomen: boolean =false;
  showBtwLegs: boolean =false;
  showBack: boolean =false;
  showBottom: boolean =false;
  showLegs: boolean =false;
  showResult: boolean =false;

  constructor(private dataService: DataService) { }

  fSub():void {
    this.showImage = !this.showImage;
  }

  scrollHead(el: HTMLElement){
    this.showHead = !this.showHead;
    el.scrollIntoView({behavior: "smooth"});
  }

  scrollNeck(el: HTMLElement){
    this.showNeck = !this.showNeck;
    el.scrollIntoView({behavior: "smooth"});
  }

  scrollShoulder(el: HTMLElement){
    this.showShoulder = !this.showShoulder;
    el.scrollIntoView({behavior: "smooth"});
  }

  scrollArm(el: HTMLElement){
    this.showArm = !this.showArm;
    el.scrollIntoView({behavior: "smooth"});
  }

  scrollChest(el: HTMLElement){
    this.showChest = !this.showChest;
    el.scrollIntoView({behavior: "smooth"});
  }

  scrollAbdomen(el: HTMLElement){
    this.showAbdomen = !this.showAbdomen;
    el.scrollIntoView({behavior: "smooth"});
  }

  scrollBtwLegs(el: HTMLElement){
    this.showBtwLegs = !this.showBtwLegs;
    el.scrollIntoView({behavior: "smooth"});
  }

  scrollBack(el: HTMLElement){
    this.showBack = !this.showBack;
    el.scrollIntoView({behavior: "smooth"});
  }

  scrollBottom(el: HTMLElement){
    this.showBottom = !this.showBottom;
    el.scrollIntoView({behavior: "smooth"});
  }

  scrollLegs(el: HTMLElement){
    this.showLegs = !this.showLegs;
    el.scrollIntoView({behavior: "smooth"});
  }

  selectedBodyArea(head: any){this.selectedArea = head.target.value;}
  selectedSymptom(head:any){this.selectedSympi = head.target.value;}

  checkData(){
    this.showResult = !this.showResult;
    let sympiAt = this.selectedArea;
    let symptom = this.selectedSympi;
    this.dataService.checkData(sympiAt,symptom)
    .subscribe((data)=> {console.log(data);
      this.cData = JSON.parse(JSON.stringify(data));
    });
  }

  ngOnInit(): void {
  }

}
