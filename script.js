//primary class
class dog {
  constructor(name){
    this._name = name;
  }
  
//primary class getter for speakMethod
  get speak(){
    return this.speakMethod();
  }
  
//primary class method
  speakMethod(){
    return 'woof';
  }
}

//subclass
class labrador extends dog {
  constructor(name, color, breedWeight){
    super(name);
    this._color = color;
    this._breedWeight = breedWeight;
  }
  
//subclass getter
  get speak(){
    return this.speakMethod();
  }
  
//subclass method
  speakMethod(){
    return 'Labrador says WOOF';
  }
}