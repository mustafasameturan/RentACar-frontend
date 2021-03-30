import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm : FormGroup;
  color : Color;
  
  constructor
  (
    private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createUpdateForm();
    
    this.activatedRoute.params.subscribe((params)=>{
      if (params["colorId"]) {
        this.getCurrentColor(params["colorId"])
      }
    })
  }

  getCurrentColor(colorId:number){
    this.colorService.getColorsById(colorId).subscribe((response)=>{
      this.color = response.data;
      this.colorUpdateForm.get('colorId')?.setValue(this.color.colorId);
      this.colorUpdateForm.get('colorName')?.setValue(this.color.colorName);
    })
  }

  createUpdateForm(){
    this.colorUpdateForm = this.formBuilder.group({
      colorId:["",Validators.required],
      colorName:["",Validators.required]
    })
  }

  update(){
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({},this.colorUpdateForm.value);
      this.colorService.update(colorModel).subscribe((response)=>{
        console.log(response)
        this.toastrService.success(response.message,"Başarılı!")
        this.router.navigate(['/']);
        this.toastrService.info("Anasayfaya yönlendiriliyorsunuz.")
      },(responseError)=>{
        if (responseError.error.Errors.length>0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Hata!")
          }
        }
      })
    }
    else{
      this.toastrService.error("Formunuz eksik!","Hata!")
    }
  }

}
