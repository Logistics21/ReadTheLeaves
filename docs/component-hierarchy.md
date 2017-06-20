## Component Hierarchy

**AuthFormContainer**
 - AuthForm (Sign up Sign In & Sessions)

**HomePageContainer**
 - Logo/Home   (root/index redirect)
 - HomePageContainer
  + HomePage
 - NavBar      (persistent)
 - Footer      (persistent)

 **CityEventContainer**
 - CityEventIndex (list of all city events)
  + CityEventDetail (?modal? form for user to attend event)

**CitiesContainer**
 - CitiesIndex
  + CitiesDetail
  + SuggestCityForm (bonus)

**DashboardContainer**
 - DashboardIndex
 - attendContainer
 - HostContainer --> (HIdx, HDtl)

**AttendantContainer**
  + AttendDetail (w/o city -- select city then event or  w/ city -- select event)

**HostContainer**
 - HostIndex
   + HostDetail (form to fill out to be a host)


## Routes

|Path                       | Component            |
|---------------------------|----------------------|
| "/sign-up"                | "AuthFormContainer"  |
| "/sign-in"                | "AuthFormContainer"  |
| "/home"                   | "HomePageContainer"  |
| "/cities"                 | "CitiesContainer"    |
| "/city/:cityId"           | "CityEventContainer" |
| "/attendant/:attendantId  | "CityEventContainer" |
| "/dashboard"              | "DashboardContainer" |
| "/host"                   | "HostContainer"      |
