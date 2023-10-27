import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable()
export class AppService {
  private styleSubject: Subject<any> = new Subject<any>();
  public readonly stylesChanged$: Observable<any> = this.styleSubject.asObservable();

  broadcastStylesChanged(styles: any) {
    this.styleSubject.next(styles);
  }
}
