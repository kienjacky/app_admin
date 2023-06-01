<template>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" className="brand-link">
      <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div className="sidebar">

      <!-- Sidebar Menu -->
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li className="nav-item">
            <router-link to="/dashboard" class="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </router-link>
          </li>

          <li className="nav-item">
<!--            <router-link to="/user" className="nav-link">-->
            <a href="#" class="nav-link">
              <i className="nav-icon fas fa-user"></i>
              <p>
                User Setting
                <i className="fas fa-angle-left right"></i>
              </p>
            </a>
<!--            </router-link>-->
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <router-link to="/user" class="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>List Member</p>
                </router-link>
              </li>
              <li className="nav-item">
                <router-link to="/user/regist" class="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Regist Member</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isOpened: false,
    }
  },
  mounted() {
    this.isOpened = this.isMenuOpen
    this.tooltipAttached()
  },
  computed: {
    cssVars() {
      return {
        // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
        '--bg-color': this.bgColor,
        '--secondary-color': this.secondaryColor,
        '--home-section-color': this.homeSectionColor,
        '--logo-title-color': this.logoTitleColor,
        '--icons-color': this.iconsColor,
        '--items-tooltip-color': this.itemsTooltipColor,
        '--serach-input-text-color': this.searchInputTextColor,
        '--menu-items-hover-color': this.menuItemsHoverColor,
        '--menu-items-text-color': this.menuItemsTextColor,
        '--menu-footer-text-color': this.menuFooterTextColor,
      }
    },
  },
  watch: {
    isOpened() {
      window.document.body.style.paddingLeft =
          this.isOpened && this.isPaddingLeft
              ? this.menuOpenedPaddingLeftBody
              : this.menuClosedPaddingLeftBody
    },
  },
  methods: {
    tooltipAttached() {
      const tooltips = document.querySelectorAll('.tooltip')
      tooltips.forEach(tooltip => {
        document.body.appendChild(tooltip)
      })
      document.querySelectorAll('.tooltip').forEach(tooltip => {
        const targetID = tooltip.dataset.target
        const target = document.querySelector(`#${targetID}`)
        if (!target) return
        target.addEventListener('mouseenter', () => {
          const targetPosition = target.getBoundingClientRect()
          if (this.isOpened) return
          tooltip.style.top = `${targetPosition.top + window.scrollY}px`
          tooltip.style.left = `${
              targetPosition.left + targetPosition.width + 20
          }px`
          tooltip.classList.add('active')
        })
        target.addEventListener('mouseleave', () => {
          tooltip.classList.remove('active')
        })
      })
    },
  },
}
</script>
