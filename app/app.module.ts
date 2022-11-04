import {
  ScheduleAllModule,
  RecurrenceEditorAllModule
} from "@syncfusion/ej2-angular-schedule";

import {
  ChartAllModule,
  AccumulationChartAllModule,
  RangeNavigatorAllModule
} from "@syncfusion/ej2-angular-charts";

import { GridAllModule } from "@syncfusion/ej2-angular-grids";

import { TabAllModule } from "@syncfusion/ej2-angular-navigations";

import { DatePickerModule } from "@syncfusion/ej2-angular-calendars";

import { RichTextEditorAllModule } from "@syncfusion/ej2-angular-richtexteditor";

import { RadioButtonModule } from "@syncfusion/ej2-angular-buttons";

import { CheckBoxModule, ButtonModule } from "@syncfusion/ej2-angular-buttons";

import { DialogModule } from "@syncfusion/ej2-angular-popups";
import { DropDownListModule } from "@syncfusion/ej2-angular-dropdowns";

import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "../app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    RadioButtonModule,
    CheckBoxModule,
    DropDownListModule,
    BrowserModule,
    ButtonModule,
    DialogModule,
    RadioButtonModule,
    ChartAllModule,
    RangeNavigatorAllModule,
    AccumulationChartAllModule,
    GridAllModule,
    RichTextEditorAllModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    CheckBoxModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    TabAllModule,
    DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
