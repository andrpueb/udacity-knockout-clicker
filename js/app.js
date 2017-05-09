var initialCats = [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc : 'img/22252709_010df3379e_z.jpg',
    imgAttribution : 'tirurururur',
    nicks: ["julito","pepito","dito","corleone"]
  },{
    clickCount: 0,
    name: 'Pete',
    imgSrc : 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution : 'tirurururur',
    nicks: ["lio","tio","teo","pablo"]
  },{
    clickCount: 0,
    name: 'Patty',
    imgSrc : 'img/1413379559_412a540d29_z.jpg',
    imgAttribution : 'tirurururur',
    nicks: ["Pebbles","Garfield","Romeo","Corto"]
  },{
    clickCount: 0,
    name: 'Roger',
    imgSrc : 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution : 'tirurururur',
    nicks: ["Jane","Ross","Napo","Elon"]
  },{
    clickCount: 0,
    name: 'Dan',
    imgSrc : 'img/9648464288_2516b35537_z.jpg',
    imgAttribution : 'tirurururur',
    nicks: ["Spidy","Linn","Glort","Lionel"]
  }
];


var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.levels = ["baby", "infant", "adult"];
  this.nicks =  ko.observableArray(data.nicks);

  this.level = ko.computed(function(){
    if(this.clickCount() <= 10){
      return this.levels[0];
    }else if (this.clickCount() <=20 ){
      return this.levels[1];
    }else{
      return this.levels[2];
    }
  }, this);
}

var ViewModel = function(){



  var self = this; // Hacemos esto para que self siga apuntando al ViewModel y no al elemento en el que esté adentro

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem)); //Así con self acá, apuntamos o mapea a ViewModel por lo tanto el catList del ViewModel
  });

  this.currentCat = ko.observable (this.catList()[1]);

  this.selectCat = function(clickedCat){
    self.currentCat(clickedCat);
  }




  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount()+1);
  };
;}

ko.applyBindings(new ViewModel());
