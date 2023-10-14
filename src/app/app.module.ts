import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaComponent } from './compilers/java/java.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor-v2';
import { PythonComponent } from './compilers/python/python.component';
import { HomeComponent } from './home/home.component';

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: '/assets',
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad: () => {
    console.log((<any>window).monaco);
    (<any>window).monaco.editor.defineTheme("myTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: 'comment', foreground: 'db4848' },
        { token: 'keyword', foreground: '4888db' },
        { token: 'string', foreground: '8648db' },
      ],
      colors: {
        "editor.foreground": "#ffffff",
        "editor.background": "#000000",
        "editorCursor.foreground": "#267363",
        "editor.lineHighlightBackground": "#0b1a16",
        "editorLineNumber.foreground": "#267363",
        "editor.selectionBackground": "#1a4038",
        "editor.inactiveSelectionBackground": "#1a4038",
      },
    });
    (<any>window).monaco.editor.setTheme("myTheme");
  }
};

@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    PythonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MonacoEditorModule.forRoot(monacoConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
