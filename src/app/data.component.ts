import { ApplicationRef, Component, Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { delay, exhaustMap, first, interval, Observable, of, startWith, tap } from "rxjs";
import { AsyncPipe, isPlatformBrowser } from "@angular/common";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-data",
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (data$ | async; as data) {
      <pre>{{ data }}</pre>
    } @else {
      <span>⌛️ Loading...</span>
    }
  `,
  styles: ``,
})
export class DataComponent {
  protected data$?: Observable<string | null>;

  constructor(
    private readonly appRef: ApplicationRef,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly dataService: DataService,
  ) {
    // 👇 Init clock after app is stable. Or it will never be stable.
    this.appRef.isStable.pipe(
      first((isStable) => isStable),
      tap(() => {
        // 👇 On server we want to render and respond. Live updates only on browser
        if (isPlatformBrowser(this.platformId)) {
          this.data$ = this.dataService.clock().pipe(
            exhaustMap(
              // 👆 This could be also:
              // https://rxjs.dev/api/index/function/concatMap
              // https://rxjs.dev/api/index/function/switchMap
              // https://rxjs.dev/api/index/function/mergeMap
              // Depending on how do you want the outer (clock) and inner (data)
              // observables. Check the marble diagrams of docs for more info
              (i) => this.dataService.getData(i).pipe(
                startWith(null) // 👈 Emit null instantly to indicate loading
              )
            ),
          )
        }
      }), takeUntilDestroyed()).subscribe()
  }
}

@Injectable({ providedIn: "root" })
class DataService {
  clock(): Observable<number> {
    return interval(2000).pipe(
      startWith(-1) // Emit initially -1
    )
  }

  getData(i: number): Observable<string> {
    return of(`Fetched data #${i}`).pipe(delay(500));
  }
}
