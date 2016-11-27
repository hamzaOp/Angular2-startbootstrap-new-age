import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'na-nav',
  templateUrl: 'build/nav.html',
  styleUrls: ['build/css/new-age-nav.css']
})
export class NavComponent implements AfterViewInit {

  ngAfterViewInit() {
    $('.navbar-collapse ul li a').click(function () {
      $('.navbar-toggle:visible').click();
    });

    $('a.page-scroll').bind('click', function (event: any) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
    });

    $('#mainNav').affix({
      offset: {
        top: 50
      }
    })

  }


}
