class Document{
  constructor(title, date){
    this.title = title;
    this.date = date;
  }
}

class SimpleDocument extends Document{

}

class CustomDocument extends Document{
  constructor(title, text, date){
    super(title, date)
      this.text = text;
    
  }
}

class AdvancedDocument extends Document{
  constructor(title, text, image, date){
    super(title, date)
    this.text = text;
    this.image = image;
  }
}