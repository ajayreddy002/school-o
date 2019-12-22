import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoadingScreenService } from "../service/loading-screen.service";
import { finalize } from "rxjs/operators";


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  activeRequests: number = 0;

  constructor(private loaderScreenService: LoadingScreenService) {
    console.log(1)
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0 ) {
      this.loaderScreenService.startLoading();
    }

    this.activeRequests++;
    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loaderScreenService.stopLoading();
        }
      })
    )
  };

}