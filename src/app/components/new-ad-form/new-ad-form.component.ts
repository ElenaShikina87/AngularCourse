import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule, UploadEvent } from 'primeng/fileupload';



@Component({
  selector: 'app-new-ad-form',
  standalone: true,
  imports: [FormsModule, DropdownModule, ReactiveFormsModule, FileUploadModule],
  templateUrl: './new-ad-form.component.html',
  styleUrl: './new-ad-form.component.css',
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})

export class NewAdFormComponent {

  private _fb = inject(FormBuilder)

  public form: FormGroup = this._fb.group({
    Name: '',
    Description: '',
    Images: [''],
    Cost: [],
    Email: '',
    Phone: '',
    Location: '',
    CategoryId: '',
  })
  
 }