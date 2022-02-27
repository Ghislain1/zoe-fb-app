
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateConfig(loader: any) {
  return {
    loader: {
      provide: TranslateLoader,
      useFactory: (loader),
      deps: [HttpClient]
    }
  };
}

export function createDefaultTranslateLoader(http: HttpClient, prefix: string) {
  return new TranslateHttpLoader(http, prefix || './assets/i18n/', '.json');
}

export function createTranslateModule(translateHttpLoader: TranslateHttpLoader) {
  return TranslateModule.forRoot(createTranslateConfig(translateHttpLoader || createDefaultTranslateLoader));
}
