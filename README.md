# hil
+ features
    - scss 
    - project struture
    - core module()
 + npm package Dependencies 
   - 
    
 # topo-app
 + Feature
    - css
    - bootstrapwith cdn
    - project struture (CORE ,shared, containers)
 + npm package Dependencies 
   - gojs
   - 
    
    
  # ghislainone
  + features

  # Use FireBase  as NoSQL Datenbank
* NoSQL V relation Daten bank
* Module AngularFireDatabaseModule has been used
* Baed on this [guy](https://www.youtube.com/watch?v=k5E2AVpwsko&t=5114s)
 thank for nice tutorial
 and inspiried by [Mosh- Shop- App](https://github.com/mosh-hamedani/organic-shop)



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
  
