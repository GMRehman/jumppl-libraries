import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class JumpplLibraryService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: JumpplLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: JumpplLibraryService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: JumpplLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class JumpplLibraryComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: JumpplLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.1", type: JumpplLibraryComponent, isStandalone: true, selector: "lib-jumppl-library", ngImport: i0, template: `
    <p>
      jumppl-library works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: JumpplLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-jumppl-library', standalone: true, imports: [], template: `
    <p>
      jumppl-library works!
    </p>
  ` }]
        }] });

class FileUploadComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: FileUploadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.1", type: FileUploadComponent, selector: "lib-file-upload", ngImport: i0, template: "<p>file-upload works!</p>\n", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: FileUploadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-file-upload', template: "<p>file-upload works!</p>\n" }]
        }] });

class CustomFieldsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: CustomFieldsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.1", ngImport: i0, type: CustomFieldsModule, declarations: [FileUploadComponent], imports: [CommonModule], exports: [FileUploadComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: CustomFieldsModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: CustomFieldsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FileUploadComponent],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        FileUploadComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of jumppl-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CustomFieldsModule, FileUploadComponent, JumpplLibraryComponent, JumpplLibraryService };
//# sourceMappingURL=jumppl-library.mjs.map
