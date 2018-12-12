# Zoe-Fb-App

* [Intro](#intro)
* [Screenshots](#screenshots)
* [Tech Stacks](#techstakts)
* [Conclusion](#conclusion)

# Intro
# Screenshots
![Screenshot](https://github.com/Ghislain1/ZoeProg/blob/master/src_ZoeProg/docs/setting.PNG)
  
    
# Tech Stacks
* [FireBase](https://firebase.google.com/)
  * NoSQL
  * Realtime Database - is a serviceor product of firebase - your googlemail konto
* Angular
    * AngularFireDatabaseModule
    
# Conclusion
* Inspiried by [Mosh- Shop- App](https://github.com/mosh-hamedani/organic-shop)
* Project structure and archictecture
  * AppModule
      * AppComponent
  * AdminModule
      * AdminComponent
  * SharedModule
      * Service-Collections
      * Model-Collections
  * CoreModule
      * Specific Component-Collections
          * Home


Use FireBase  as NoSQL Datenbank
* NoSQL V relation Daten bank
* Module AngularFireDatabaseModule has been used
* Baed on this [guy](https://www.youtube.com/watch?v=k5E2AVpwsko&t=5114s)
 thank for nice tutorial
 and 



* For Architecture 
@startuml
folder UI{

  node app #green

  node admin #red
  node core #yellow
  node movies #violet
  node shared #cyan
 

  node home #yellow
  node navbar  #yellow
  node login  #yellow
  
  node movieFilter #violet

  node movieCard  #cyan
  node movieQuantity  #violet
 node movieForm #violet
 node movieFavorySummary#violet
 node checkOut  #violet


  
 
} 

app .. admin
app .. core
app .. movies
app .. shared

core .. login
core .. home
core .. navbar
 
movies .. movieFavorySummary 
movies .. movieForm 
movies .. checkOut  
movies .. movieFilter 
shared .. movieCard
shared .. movieQuantity
@enduml
