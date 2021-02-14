import { Injectable } from '@angular/core';
// @ts-ignore
import keyUpdateJson from '../assets/data/keyUpdates.json';
// @ts-ignore
import ontarioCasesJson from '../assets/data/ontarioCases.json';
// @ts-ignore
import summaryDosesJson from '../assets/data/summaryDoses.json';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDataServiceService {

  message = new BehaviorSubject('2021-02-14 Follow Up');
  sharedMessage = this.message.asObservable();

  constructor() { }

  setMessage(message: string) {
    const date = new Date();
    const dateString = date.toISOString().split('T')[0];
    this.message.next(dateString + ' ' + message);
  }

  getKeyUpdates() {
    return keyUpdateJson;
  }

  getONCases() {
    return ontarioCasesJson;
  }

  getSummaryDoses() {
    return summaryDosesJson;
  }

  getSummaryDosesDateList() {
    const dataArr = this.getSummaryDoses();
    return dataArr.map(item => {
      return item.report_date;
    }).reverse();
  }

  getDetailedDosesData(fromDate: string) {
    const dataArr = this.getSummaryDoses();
    const data = dataArr.find(item => {
      return item.report_date === fromDate;
    });
    const outputData: string[][] = [];
    if (data !== undefined) {
      outputData.push(['Report Date', data.report_date]);
      outputData.push(['Previous Day Doses Administered', data.previous_day_doses_administered]);
      outputData.push(['Total Doses Administered\n', data.total_doses_administered]);
      outputData.push(['Total Doses In Fully Vaccinated Individuals', data.total_doses_in_fully_vaccinated_individuals]);
      outputData.push(['Total Individuals Fully Vaccinated', data.total_individuals_fully_vaccinated]);
      return outputData;
    }
    return [['data not available', 'please try again later']];
  }
}
