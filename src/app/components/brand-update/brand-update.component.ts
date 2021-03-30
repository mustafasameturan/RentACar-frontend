import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm : FormGroup;
  brand : Brand;

  constructor
  (
    private formBuilder:FormBuilder,
    private brandService:BrandService,
    private toastrService:ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.createUpdateForm();

     this.activatedRoute.params.subscribe(params => {
       if (params["brandId"]){
         this.getCurrentBrand(params["brandId"]);
       }
     });
  }

  getCurrentBrand(brandId:number){
    this.brandService.getBrandsById(brandId).subscribe((response)=>{
      this.brand = response.data;
      this.brandUpdateForm.get('brandId')?.setValue(this.brand.brandId);
      this.brandUpdateForm.get('brandName')?.setValue(this.brand.brandName);
    })
  }
  
  createUpdateForm(){
      this.brandUpdateForm = this.formBuilder.group({
        brandId:["",Validators.required],
        brandName:["",Validators.required]
      }) 
  }

  update(){
    if(this.brandUpdateForm.valid){
      let brandModel = Object.assign({},this.brandUpdateForm.value);
      this.brandService.update(brandModel).subscribe((response)=>{
        console.log(response)
        this.toastrService.success(response.message,"Başarılı!")
        this.router.navigate(['/']);
        this.toastrService.info("Ana sayfaya yönlendiriliyorsunuz.");
      },(responseError)=>{
        if (responseError.error.Errors.lenght>0){
          for (let i = 0; i <responseError.error.Errors.lenght; i++) {
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
