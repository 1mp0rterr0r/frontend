import { AdminComponent } from "./admin.component";
import { Routes, RouterModule } from "@angular/router";
import { AllProductsComponent } from "./all-products/all-products.component";
import { AuthGuard } from "../auth.guard";
import { LoginComponent } from "./login/login.component";
import { FeedsComponent } from "./feeds/feeds.component";
import { CreatorComponent } from "./creator/creator.component";
import { NgModule } from "@angular/core";

const recipesRoutes: Routes = [
    {path:'',component:AdminComponent,children:[
    { path: 'allproduct', component: AllProductsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'feeds', component: FeedsComponent, canActivate: [AuthGuard] },
    { path: 'modulecreator', component: CreatorComponent, canActivate: [AuthGuard] }
    ]},
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(recipesRoutes)
    ],
    providers: [
    ]
  })
  export class AdminRoutingModule { }
  