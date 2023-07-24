import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styles: [
    `
    .pjs{
      font-family: action_manbold_italic;
    }

    .TitulosPjs {
      font-family: sf_comic_script_shadedregular;
      font-size: 2rem;
      text-align: center;
      color: #EC1D24;
      margin: 10px 0px;
    }
    `
  ]
})
export class PopupComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.data
    console.log("Se cargo la data", data)
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
