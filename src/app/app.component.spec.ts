import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { AppRightPanelComponent } from './app.rightpanel.component';
import { AppProfileComponent } from './app.profile.component';
import { BreadcrumbService } from './breadcrumb.service';
import { AppFooterComponent } from './app.footer.component';
import { AppMenuComponent, AppSubMenuComponent } from './app.menu.component';
import { AppMegamenuComponent } from './app.megamenu.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RouterTestingModule, ScrollPanelModule, TabViewModule, PanelModule, ButtonModule],
      declarations: [
        AppComponent,
        AppTopBarComponent,
        AppMenuComponent,
        AppSubMenuComponent,
        AppMegamenuComponent,
        AppRightPanelComponent,
        AppProfileComponent,
        AppFooterComponent,
        AppBreadcrumbComponent
      ],
      providers: [BreadcrumbService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
