import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    let employees = [
      {id:1,name:"Diana",company:'Todo1',age:35,birthday:new Date('01/03/2000'),favoriteColor:"red",project:"BOLE1"},
      {id:2,name:"Diana2",company:'Todo2',age:35,birthday:new Date('01/03/2000'),favoriteColor:"red",project:"BOLE2"},
      {id:3,name:"Diana3",company:'Todo3',age:35,birthday:new Date('01/03/2000'),favoriteColor:"red",project:"BOLE3"},
      {id:4,name:"Diana4",company:'Todo4',age:35,birthday:new Date('01/03/2000'),favoriteColor:"red",project:"BOLE4"},
      {id:5,name:"Diana5",company:'Todo4',age:35,birthday:new Date('01/03/2000'),favoriteColor:"red",project:"BOLE5"},
      {id:6,name:"Diana6",company:'Todo5',age:35,birthday:new Date('01/03/2000'),favoriteColor:"red",project:"BOLE6"},
      {id:7,name:"Diana7",company:'Todo6',age:35,birthday:new Date('01/03/2000'),favoriteColor:"red",project:"BOLE7"},
      {id:8,name:"Diana8",company:'Todo8',age:35,birthday:new Date('01/03/2000'),favoriteColor:"red",project:"BOLE8"},
      {id:9,name:"Diana9",company:'Todo9',age:35,birthday:new Date('01/03/2000'),favoriteColor:"red",project:"BOLE9"},
    ]

    let projects = [
      {id:1,name:"BOLE1",teamSize:1,customer:"BC1"},
      {id:2,name:"BOLE2",teamSize:1,customer:"BC1"},
      {id:3,name:"BOLE3",teamSize:1,customer:"BC1"},
      {id:4,name:"BOLE4",teamSize:1,customer:"BC1"},
      {id:5,name:"BOLE5",teamSize:1,customer:"BC1"},
      {id:6,name:"BOLE6",teamSize:1,customer:"BC1"},
      {id:7,name:"BOLE7",teamSize:1,customer:"BC1"},
      {id:8,name:"BOLE8",teamSize:1,customer:"BC1"},
      {id:9,name:"BOLE9",teamSize:1,customer:"BC1"}
    ]

    return {employees, projects};
  };
}
