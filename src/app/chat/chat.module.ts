import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';
import { Routes,RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ChatDialogComponent],
  exports: [ChatDialogComponent],
  providers: [ChatService]
})
export class ChatModule { }
