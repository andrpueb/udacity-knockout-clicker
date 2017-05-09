var ViewModel = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.imgAttribution = ko.observable('tirurururur');
  this.levels = ["baby", "infant", "adult"];


  this.incrementCounter = function(){
    this.clickCount(this.clickCount()+1);
  }

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

ko.applyBindings(new ViewModel());
