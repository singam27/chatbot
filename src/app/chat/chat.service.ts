import { Injectable } from '@angular/core';

import { Http } from '@angular/http'



import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Message class for displaying messages in the component
export class Message {

  constructor(public content: string, public sentBy: string) { }
}

@Injectable()
export class ChatService {

  

  conversation = new BehaviorSubject<Message[]>([]);


  constructor(private http: Http){}

    botmsg="raja";
    

 //Send and recieve message to chatbot
 getMessages(msg:string): Promise<string>{
  return this.http.get('http://localhost:3000/connect/'+msg)
              .toPromise()
              .then(response=>{
                this.botmsg=response.json().data;
                console.log(this.botmsg);
              } )
              .catch(this.handleError)
}

  

 

  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }

  
  private handleError (error: any) : Promise<any>{
    console.error('An error occured',error);
    return Promise.reject(error.message||error);
}
}
