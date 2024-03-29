import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgxAsideComponent } from 'ngx-aside/lib/aside.component';
import { EventService } from 'src/app/core/services/event.service';
import { LAYOUT_VERTICAL, LAYOUT_THEME, LAYOUT_WIDTH, LAYOUT_POSITION, TOPBAR, SIDEBAR_SIZE, SIDEBAR_VIEW, SIDEBAR_COLOR, SIDEBAR_IMAGE, DATA_PRELOADER } from '../layouts.model';


@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.scss']
})
export class RightsidebarComponent {

  rightsidebar: any;
  layout: string | undefined;
  theme: string | undefined;
  width: string | undefined;
  position: string | undefined;
  topbar: string | undefined;
  size: string | undefined;
  sidebarView: string | undefined;
  sidebar: string | undefined;
  attribute: any;
  sidebarImage: any;
  sidebarVisibility: any;
  preLoader: any;
  grd: any;

  @Output() settingsButtonClicked = new EventEmitter();
  @ViewChild('offcanvasExample', { static: false }) offcanvasExample?: NgxAsideComponent;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.layout = LAYOUT_VERTICAL;
    this.theme = LAYOUT_THEME;
    this.width = LAYOUT_WIDTH;
    this.position = LAYOUT_POSITION;
    this.topbar = TOPBAR;
    this.size = SIDEBAR_SIZE;
    this.sidebarView = SIDEBAR_VIEW;
    this.sidebar = SIDEBAR_COLOR;
    this.sidebarImage = SIDEBAR_IMAGE;
    this.preLoader = DATA_PRELOADER;
    this.attribute = '';
  }

  ngAfterViewInit() { }

  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(layout: string) {
    this.attribute = layout;
    this.eventService.broadcast('changeLayout', layout);
    document.documentElement.setAttribute('data-layout', layout);
   
  }

  // Add Active Class
  addActive(grdSidebar: any) {
    this.grd = grdSidebar;
    document.documentElement.setAttribute('data-sidebar', grdSidebar)
    document.getElementById('collapseBgGradient')?.classList.toggle('show');
    document.getElementById('collapseBgGradient1')?.classList.add('active');
  }

  // Remove Active Class
  removeActive() {
    this.grd = '';
    document.getElementById('collapseBgGradient1')?.classList.remove('active');
    document.getElementById('collapseBgGradient')?.classList.remove('show');
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  //  Filter Offcanvas Set
  openEnd() {
    this.offcanvasExample?.show()
    setTimeout(() => {
      this.attribute = document.documentElement.getAttribute('data-layout')
      if (this.attribute == 'vertical') {
        var vertical = document.getElementById('customizer-layout01') as HTMLInputElement;
        if (vertical != null) {
          vertical.setAttribute('checked', 'true');
        }
      }
      if (this.attribute == 'horizontal') {
        const horizontal = document.getElementById('customizer-layout02');
        if (horizontal != null) {
          horizontal.setAttribute('checked', 'true');
        }
      }
      if (this.attribute == 'twocolumn') {
        const Twocolumn = document.getElementById('customizer-layout03');
        if (Twocolumn != null) {
          Twocolumn.setAttribute('checked', 'true');
        }
      }
      if (this.attribute == 'semibox') {
        const Twocolumn = document.getElementById('customizer-layout04');
        if (Twocolumn != null) {
          Twocolumn.setAttribute('checked', 'true');
        }
      }
    }, 100);
  }

  // Mode Change
  changeMode(mode: string) {
    this.theme = mode;
    document.documentElement.setAttribute('data-bs-theme', mode)
    document.documentElement.setAttribute('data-topbar', mode)
    document.documentElement.setAttribute('data-sidebar', mode)
  }

   // Visibility Change
   changeVisibility(visibility:string) {
    this.sidebarVisibility = visibility;
    document.documentElement.setAttribute('data-sidebar-visibility', visibility)
  }

  // Width Change
  changeWidth(width: string, size: string) {
    this.width = width;
    document.documentElement.setAttribute('data-layout-width', width);
    document.documentElement.setAttribute('data-sidebar-size', size)
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  // Position Change
  changePosition(position: string) {
    this.position = position;
    document.documentElement.setAttribute('data-layout-position', position);
  }

  // Topbar Change
  changeTopColor(color: string) {
    this.topbar = color;
    document.documentElement.setAttribute('data-topbar', color)
  }

  // Sidebar Size Change
  changeSidebarSize(size: string) {
    this.size = size;
    document.documentElement.setAttribute('data-sidebar-size', size)
  }

  // Sidebar Size Change
  changeSidebar(sidebar: string) {
    this.sidebarView = sidebar;
    document.documentElement.setAttribute('data-layout-style', sidebar);
  }

  // Sidebar Color Change
  changeSidebarColor(color: string) {
    this.sidebar = color;
    document.documentElement.setAttribute('data-sidebar', color)
  }

  // Sidebar Image Change
  changeSidebarImage(img: string) {
    this.sidebarImage = img;
    document.documentElement.setAttribute('data-sidebar-image', img);
  }

    // PreLoader Image Change
    changeLoader(loader: string) {
      this.preLoader = loader;
      document.documentElement.setAttribute('data-preloader', loader);
      var preloader = document.getElementById("preloader");
      if (preloader) {
        setTimeout(function () {
          (document.getElementById("preloader") as HTMLElement).style.opacity = "0";
          (document.getElementById("preloader") as HTMLElement).style.visibility = "hidden";
        }, 1000);
      }
    }
  
}
