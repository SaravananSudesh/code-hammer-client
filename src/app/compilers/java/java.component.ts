import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent {

  editorOptions = {
    language: 'java',
    minimap: { enabled: false },
    fontSize: 16,
  }

  imports: string = `//Import Packages Here`
  code: string = `public static void main(String[] args){\r\n\t\/\/Your Code Here\r\n}`
  status:string = ""
  output:string = ``

  isLoading:boolean = false
  
  constructor(private http:HttpClient){}

  ngOnInit(){
    
  }

  async runJavaCode(){

    this.isLoading = true
    this.status = ""

    const body = {
      imports : this.imports,
      code : this.code
    }

    await this.http.post<any>(`${environment.api}java/`, body).subscribe(
      (res)=>{
        this.output = res.result
        this.status = res.message
        this.isLoading = false
      },
      (error)=>{
        this.output = error.error.error
        this.status = error.error.message
        this.isLoading = false
      }
    )

  }
}
