
import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-aviso-dialog',
  templateUrl: './aviso-dialog.component.html',
  styleUrls: ['./aviso-dialog.component.scss'],
})
export class AvisoDialogComponent  {
  constructor(
    public dialogRef: MatDialogRef<AvisoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  confirm(confirm: boolean): void {
    this.dialogRef.close(confirm);
  }
}
