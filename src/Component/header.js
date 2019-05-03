
import React from "react"
import { Link } from "gatsby"

import Images from "../images"

export const navItems = [
  {
    key: "index",
    title: "صفحه اصلی",
    target: "/",
  },
  {
    key: "terms",
    title: "قوانین",
    target: "/terms",
  },
  {
    key: "privacy",
    title: "حریم خصوصی",
    target: "/privacy",
  },
  {
    key: "blog",
    title: "بلاگ",
    target: "https://blog.rialo.ir",
    external: true,
  },
  {
    key: "contact",
    title: "تماس با ما",
    target: "/contact",
  },
  {
    key: "about",
    title: "درباره ما",
    target: "/about",
  },
]

export function NavItem(props) {
  const { key, target, title, external } = props
  return (
    <li className={`nav-item ${key === "index" ? "active" : ""}`}>
      {external ? (
        <a className="nav-link" href={target}>
          {title}
        </a>
      ) : (
        <Link className="nav-link" to={target}>
          {title}
        </Link>
      )}
    </li>
  )
}

export default function Header(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container navbar-container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {navItems.map(item => (
                <NavItem key={item.key} {...item} />
              ))}
            </ul>
          </div>
          <Link className="navbar-brand " to="/">
            <img src={Images.logo.type.dark.fa} alt="" />
          </Link>
        </div>
      </nav>
    </React.Fragment>
  )
}




<div class="">
        <div id="toggle" class="navbar-in-mobile">
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">

                    <div class="bg-dark p-4">
                        <a id="header-logo" class="logo-toggle" href="#">
                            <div><img src="images/logo-large.png"></div>
                        </a>
                        <ul class="nav navbar-nav">
                            <li id="menu-item-1" class="active"><a  onclick="closeToggle()" href="#">Home <span class="sr-only">(current)</span></a></li>
                            <li id="menu-item-2" class="dropdown" onclick="document.getElementById('_products').scrollIntoView();">
                                <a class="dropdown-toggle" data-toggle="dropdown">Products</a>
                                <ul class="dropdown-menu" id="producti-menu-toggle">
                                </ul>
                            </li>
                            <li id="menu-item-5"><a onclick="closeToggle()" href="#_quarry">Quarry</a></li>
                            <li id="menu-item-4"><a onclick="closeToggle()" href="#_projects">Projects</a></li>
                            <li id="menu-item-6"><a onclick="closeToggle()" href="#_contact-us">Contact us</a></li>
                            <li id="menu-item-7"><a href="about.html">About us</a></li>
                            <li id="menu-item-8"><a href="https://solabest.com/blog">Highlights</a></li>
                        </ul>
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                </nav>
            </div>
        </div>
        <nav class="navbar navbar-default navbar-fixed-top header">
            <div class="navbar-header">
                <a id="header-logo" class="navbar-brand" href="#">
                    <div><img src="images/logo-large.png"></div>
                </a>
            </div>

            <div class="sub-header collapse" id="wide-nav">
                <ul class="nav navbar-nav">
                    <li class="menu-item-1" id="menu-item-1" class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>
                    <li id="menu-item-2" class="dropdown" onclick="document.getElementById('_products').scrollIntoView();">
                        <a class="dropdown-toggle" data-toggle="dropdown">Products</a>
                        <ul class="dropdown-menu products-uniq-id">
                        </ul>
                    </li>
                    <li id="menu-item-5" class="menu-item-5"><a href="#_quarry">Quarry</a></li>
                    <li id="menu-item-4" class="menu-item-4"><a href="#_projects">Projects</a></li>
                    <li id="menu-item-6"><a href="#_contact-us">Contact us</a></li>
                    <li id="menu-item-7"><a href="about.html">About us</a></li>
                    <li id="menu-item-8"><a href="https://solabest.com/blog">Highlights</a></li>
                </ul>
            </div>
            <div class="lang">
            </div>
        </nav>