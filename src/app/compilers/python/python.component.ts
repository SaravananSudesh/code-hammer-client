import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent {

  editorOptions = {
    language: 'python',
    minimap: { enabled: false },
    fontSize: 16,
  }

  code: string = `#Your Code Here`
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
      code : this.code
    }

    await this.http.post<any>(`${environment.api}python/`, body).subscribe(
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
