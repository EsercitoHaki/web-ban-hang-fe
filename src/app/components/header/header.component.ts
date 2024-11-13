import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSearchActive = false;

  // Toggle search input khi nhấp vào biểu tượng tìm kiếm
  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;

    // Đưa con trỏ vào ô input khi nó hiển thị
    if (this.isSearchActive) {
      setTimeout(() => {
        const input = document.querySelector('.search-input') as HTMLInputElement;
        input?.focus();
      }, 0);
    }
  }

  // Đóng ô tìm kiếm khi nhấp ra ngoài
  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    const clickedInside = target.closest('.search-container');
    if (!clickedInside && this.isSearchActive) {
      this.isSearchActive = false;
    }
  }
}
