import { MiaPagination, MiaQuery } from '@agencycoda/mia-core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MiaColumn, MiaTableConfig, MiaTableEditableComponent, MiaTableEditableConfig } from 'src/app/public-api';
import { TestService } from './test.service';
import { ClientService } from './client.service';

//import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('tableEditable') tableEditable!: MiaTableEditableComponent;

  tableConfig: MiaTableConfig = new MiaTableConfig();

  tableEditableConfig: MiaTableEditableConfig = new MiaTableEditableConfig();
  tableDataEditable: Array<any> = [];

  mockData?: MiaPagination<any>;

  constructor(
    public testService: TestService,
    public clientService: ClientService
  ){

  }

  ngOnInit(): void {
    this.loadConfig();
    console.log(this.clientService);
  }

  onClickSave() {
    console.log(this.tableEditable.getDataItems());
  }

  loadConfig() {
    this.tableConfig.service = this.clientService;
    this.tableConfig.id = 'table-test';
    this.tableConfig.columns = [
      { key: 'selection', type: 'selection', title: '' },
      { key: 'id', type: 'string', title: 'ID', field_key: 'id' },
      { 
        key: 'firstname', type: 'string', title: 'Firstname', field_key: 'firstname'
      },
      { 
        key: 'lastname', type: 'string', title: 'Lastname', field_key: 'lastname'
      },
      { 
        key: 'email', type: 'string', title: 'Email', field_key: 'email'
      },
      { 
        key: 'created_at', type: 'date', title: 'Created At', field_key: 'created_at' 
      },
      { 
        key: 'more', type: 'more', title: '', extra: {
          actions: [
            { icon: 'visibility', title: 'View', key: 'view' },
            { icon: 'create', title: 'Edit', key: 'edit' },
            { icon: 'delete', title: 'Delete', key: 'remove' },
          ]
        } 
      },
    ];

    this.tableConfig.loadingColor = 'red';
    this.tableConfig.hasEmptyScreen = true;
    this.tableConfig.emptyScreenTitle = 'No tenes cargado ningun elemento todavia';

    this.tableConfig.onClick.subscribe(result => {
      if (result.key === "view") {
        let query = new MiaQuery();
        this.clientService.listOb(query)
          .subscribe(
            response => {
              console.log(response);
            },
            error => {
              console.log(error);
            });
      }
    });
  }
}
