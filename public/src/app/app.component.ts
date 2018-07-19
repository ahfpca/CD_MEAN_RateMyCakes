import { CakeService } from './cake.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  cakes: any[] = [];
  cake: any;
  genErrors: any[] = [];
  createErrors: any;
  ratingErrors: any;
  selectedRec: any;
  prevRec: any = null;

  constructor (private _cakeService: CakeService) { }

  ngOnInit() {
    this.cake = { baker: '', imageUrl: '' };
    this.getAllSrvc();
  }

  getAllSrvc() {
    this._cakeService.getAll().subscribe(res => {
      if (res['error']) {
        this.genErrors = res['error'];
      } else {
        this.cakes = res['cakes'];
        this.selectedRec = this.prevRec;
      }
    });
  }

  getOneSrvc(id: string) {
    this._cakeService.getOne(id).subscribe(res => {
      if (res['error']) {
        this.genErrors = res['error'];
      } else {
        this.cake = res['cake'];
      }
    });
  }

  createSrvc(cake: any) {
    this._cakeService.create(cake).subscribe(res => {
      if (res['error']) {
        this.createErrors = res['error'];
        // console.log(this.createErrors['errors']['baker']);
      } else {
        this.cake = { baker: '', imageUrl: '' };
        this.getAllSrvc();
      }
    });
  }

  updateSrvc(cake: any) {
    this._cakeService.update(cake).subscribe(res => {
      if (res['error']) {
        this.ratingErrors = res['error'];
      } else {
        this.getAllSrvc();
      }
    });
  }

  deleteSrvc(id: string) {
    this._cakeService.delete(id).subscribe(res => {
      if (res['error']) {
        this.genErrors = res['error'];
      } else {
        this.getAllSrvc();
      }
    });
  }

  addRating(ratingData: any, cakeId: string) {
    this._cakeService.getOne(cakeId).subscribe(res => {
      if (res['error']) {
        this.ratingErrors = res['error'];
      } else {
        const myCake = res['cake'];
        // console.log(ratingData);
        // console.log(myCake.comments);

        myCake.comments.push(ratingData);
        // console.log(myCake);
        this.prevRec = myCake;

        this.updateSrvc(myCake);
      }
    });
  }

  eventFromChild(): void {
    this.selectedRec = null;
  }
}
