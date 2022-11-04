import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import {
  DialogComponent,
  AnimationSettingsModel
} from "@syncfusion/ej2-angular-popups";
import { ButtonModel } from "@syncfusion/ej2-angular-buttons";
import { DropDownListComponent } from "@syncfusion/ej2-angular-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-angular-buttons";
import { SelectEventArgs } from "@syncfusion/ej2-angular-dropdowns";
/**
 * Modal Dialog Component
 */
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public fields: Object = { text: "Name", value: "Id" };
  public initialValue: string = "Australia";
  public data: { [key: string]: Object }[] = [
    { Name: "Australia", Id: "Australia" },
    { Name: "Bermuda", Id: "Bermuda" },
    { Name: "Canada", Id: "Canada" },
    { Name: "Cameroon", Id: "Cameroon" }
  ];

  onSelect(args: SelectEventArgs) {
    this.currentData = (args.itemData as any).Name;
  }

  public currentData: string;

  @ViewChild("modalDialog")
  public modalDialog: DialogComponent;

  @ViewChild("modalButton")
  public modalButton: ButtonComponent;

  public target: string = "#modalTarget";
  public width: string = "335px";
  public header: string = "Dialog Header";
  public content: string = this.initialValue;
  public isModal: Boolean = true;

  ngAfterViewInit(): void {
    this.modalButton.element.focus();
  }
  // On Button click, modal Dialog will be shown
  public modalBtnClick = (): void => {
    this.content = this.currentData;
    this.modalDialog.show();
  };
  // On Dialog close, 'Open' Button will be shown
  public modalDlgClose = (): void => {
    this.modalButton.element.style.display = "";
  };
  // On Dialog open, 'Open' Button will be hidden
  public modalDlgOpen = (): void => {
    this.modalButton.element.style.display = "none";
  };

  // Close the Dialog, while clicking "OK" Button of Dialog
  public dlgButtonClick = (): void => {
    this.modalDialog.hide();
  };

  // Initialize Button to open the modal Dialog
  public buttons: { [key: string]: ButtonModel }[] = [
    {
      click: this.dlgButtonClick.bind(this),
      buttonModel: { content: "OK", isPrimary: true }
    }
  ];
}
