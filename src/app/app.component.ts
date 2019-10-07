import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    bookTitle:string ="";
    date:Date;
    bookType: string ="" ;
    summary: string = "";
    books=[];
   

    //saves a book and shows the total number of available books
    saveBook():void{
        this.books.push({
          bookTitle: this.bookTitle,
          date: this.date,
          bookType: this.bookType,
          summary:this.summary
        });
    }

    //deletes all the books with ‘Hard Cover‘ status
    deleteHardCover(): void{
          let i =0;
          while(i<this.books.length){
            if(this.books[i].bookType === "hardcover"){
              this.books.splice(i,1)
            }
            else
            i++;
          }
        }
    //shows the number of books with 'Hard Cover' type
    getNumberOfHardCovers():number{
          let count: number = 0;
          for(let i = 0; i<this.books.length;i++){
            if(this.books[i].bookType === "hardcover")
            count++;
          }
          return count;
    }
    //deletes a book
    deleteItem(index:number):void{
        this.books.splice(index,1)
    }

    //EXTRA TASK 
    switchCover(i:number){
      let x : number = 0;
      if(this.books[i].bookType === "hardcover") {
         this.books[i].bookType = "paperback";
      }
      else if(this.books[i].type==="paperback"){
        this.books[i].type="hardcover";
      }
      x++
  }

    // switchCover(){
    //   this.bookType="hardcover"
    //   switch(this.bookType) {
    //     case 'hardcover':
    //         break;
    //     case "paperback": 
    //       break;
    // } 
    // this.bookType="paperback"
    //   switch(this.bookType) {
    //     case 'hardcover':
    //         break;
    //     case "paperback": 
    //       break;
    // }    
  }
 