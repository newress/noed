const book = {
  it : 'javascript',
  'graphic-list' : 'photoshop',
  action(){
    console.log(
      `
      ${this.it} ${this["graphic-list"]}
      `
    )
  }
}
book.action();