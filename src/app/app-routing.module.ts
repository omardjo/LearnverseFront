import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { TopicsComponent } from './components/topics/topics.component';
import { DegreesComponent } from './components/degrees/degrees.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [

 {
   path:'',
   component:SigninComponent
   
 },
 {
  path:'signup',
  component:SignupComponent
  
},
 
 {path: 'ELearning', component:NavbarComponent,children: [
  {path:'course/details/:id', component:CourseDetailsComponent},
  {path:'courses', component:CoursesComponent},
  {path:'degrees', component:DegreesComponent},
  {path:'subjects', component:SubjectsComponent},
  {path:'questions/:string', component:QuestionsComponent},
  {path:'progress', component:ProgressComponent},
  {path:'rewards', component:RewardsComponent},
  {path:'topics', component:TopicsComponent},
  
 
]}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
