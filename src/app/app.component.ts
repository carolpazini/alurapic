import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'http://www.pemberley.com/janeinfo/naby2thn.gif',
      description: 'Cate Morland'
    },
    {
      url: 'http://www.pemberley.com/janeinfo/cargdpth.gif',
      description: 'Indeterminate illustration'
    },
    {
      url: 'http://www.pemberley.com/janeinfo/persulth.gif',
      description: 'Persuasion'
    }
  ];
  
}

