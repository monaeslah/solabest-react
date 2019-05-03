import React from "react"
import $ from "jquery"

import Header from "./header"
import Footer from "./footer"

export default class Layout extends React.Component {
  componentDidMount() {
    import("wowjs").then(WOW => {
      const wow = new WOW.WOW()
      wow.init()
    })


    $(function(){
        $(window).scroll(function () {
            var height = $(window).scrollTop()
            if(height > 100) {
                $(".header").addClass('scrolled')
                $(".sub-header").addClass('header-scroll')
            } else {
                $(".header").removeClass('scrolled')
                $(".sub-header").removeClass('header-scroll')
            }
        })
    });
    function closeToggle() {
        $(".collapse.in").removeClass("in");
    }
  }

  render() {
    const { children, hideFooterArrow } = this.props
    return (
      <React.Fragment>
        <Header />
        <div class="affix-element" />
        {children}
        <Footer hideFooterArrow={hideFooterArrow} />
      </React.Fragment>
    )
  }
}