function book(type, title){
  this.type = type;
  this.title = title;
}

book.prototype.action=function(){
  console.log(`
    ${this.type} : ${this.title}
  `)
}
const photoshop = new book('graphic', 'photoshop');
const script = new book('it', 'javascript');
const html = new book('html', 'html5');

//const it - [new book(),new book(),new book()];