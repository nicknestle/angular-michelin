/*
    Example
    <mic-sidebar position="start" [collapseConfig]="{ enable: true, label: 'Collapse' }">
      <mic-sidebar-item link="/getting-started" icon="flag" label="Getting started">
        <mic-sidebar-item link="/getting-started/install" label="Install"></mic-sidebar-item>
        <mic-sidebar-item link="/getting-started/migration-policy" label="Migration policy"></mic-sidebar-item>
      </mic-sidebar-item>
      <mic-sidebar-item link="/whats-new" icon="new_releases" label="What's new ?"></mic-sidebar-item>
      <mic-sidebar-item link="/components" icon="extension" label="Components">
        <mic-sidebar-item link="/components/structure" label="Structure">
          <mic-sidebar-item link="/components/structure/footer" label="Footer"></mic-sidebar-item>
          <mic-sidebar-item link="/components/structure/header" label="Header"></mic-sidebar-item>
          <mic-sidebar-item link="/components/structure/main-content" label="Main content"></mic-sidebar-item>
        </mic-sidebar-item>
        <mic-sidebar-item link="/components/navigation" label="Navigation">
          <mic-sidebar-item link="/components/navigation/breadcrumb" label="Breadcrumb"></mic-sidebar-item>
          <mic-sidebar-item link="/components/navigation/burger-menu" label="Burger menu"></mic-sidebar-item>
          <mic-sidebar-item link="/components/navigation/button" label="Button"></mic-sidebar-item>
          <mic-sidebar-item link="/components/navigation/carousel" label="Carousel"></mic-sidebar-item>
          <mic-sidebar-item link="/components/navigation/content-table" label="Content table"></mic-sidebar-item>
          <mic-sidebar-item link="/components/navigation/icon" label="Icon"></mic-sidebar-item>
          <mic-sidebar-item link="/components/navigation/link" label="Link"></mic-sidebar-item>
          <mic-sidebar-item link="/components/navigation/logo" label="Logo"></mic-sidebar-item>
          <mic-sidebar-item link="/components/navigation/navbar" label="Navbar"></mic-sidebar-item>
          <mic-sidebar-item link="/components/navigation/pagination" label="Pagination"></mic-sidebar-item>
          <mic-sidebar-item link="/components/navigation/scrollbar" label="Scrollbar"></mic-sidebar-item>
          <mic-sidebar-item link="/components/navigation/sidebar" label="Sidebar"></mic-sidebar-item>
          <mic-sidebar-item link="/components/navigation/tab" label="Tab"></mic-sidebar-item>
        </mic-sidebar-item>
        <mic-sidebar-item link="/components/informations" label="Information Formating">
          <mic-sidebar-item link="/components/informations/accordion" label="Accordion"></mic-sidebar-item>
          <mic-sidebar-item link="/components/informations/card" label="Card"></mic-sidebar-item>
          <mic-sidebar-item link="/components/informations/empty-state" label="Empty state"></mic-sidebar-item>
          <mic-sidebar-item link="/components/informations/modal" label="Modal"></mic-sidebar-item>
          <mic-sidebar-item link="/components/informations/table" label="Table"></mic-sidebar-item>
          <mic-sidebar-item link="/components/informations/tag" label="Tag"></mic-sidebar-item>
          <mic-sidebar-item link="/components/informations/tree" label="Tree"></mic-sidebar-item>
          <mic-sidebar-item link="/components/informations/tooltip" label="Tooltip"></mic-sidebar-item>
        </mic-sidebar-item>
        <mic-sidebar-item link="/components/forms" label="Forms">
          <mic-sidebar-item link="/components/forms/checkbox" label="Checkbox"></mic-sidebar-item>
          <mic-sidebar-item link="/components/forms/date-picker" label="Date picker"></mic-sidebar-item>
          <mic-sidebar-item link="/components/forms/timepicker" label="Time picker"></mic-sidebar-item>
          <mic-sidebar-item link="/components/forms/dropdown" label="Dropdown"></mic-sidebar-item>
          <mic-sidebar-item link="/components/forms/label" label="Label"></mic-sidebar-item>
          <mic-sidebar-item link="/components/forms/phone-number" label="Phone number"></mic-sidebar-item>
          <mic-sidebar-item link="/components/forms/radio-button" label="Radio button"></mic-sidebar-item>
          <mic-sidebar-item link="/components/forms/switch" label="Switch"></mic-sidebar-item>
          <mic-sidebar-item link="/components/forms/text-field" label="Text field"></mic-sidebar-item>
          <mic-sidebar-item link="/components/forms/segmented-buttons" label="Segmented buttons"></mic-sidebar-item>
          <mic-sidebar-item link="/components/forms/upload-field" label="Upload field"></mic-sidebar-item>
        </mic-sidebar-item>
        <mic-sidebar-item link="/components/status" label="Status Indicators">
          <mic-sidebar-item link="/components/status/alert" label="Alert"></mic-sidebar-item>
          <mic-sidebar-item link="/components/status/progress-bar" label="Progress bar"></mic-sidebar-item>
          <mic-sidebar-item link="/components/status/skeleton" label="Skeleton"></mic-sidebar-item>
          <mic-sidebar-item link="/components/status/spinner" label="Spinner"></mic-sidebar-item>
          <mic-sidebar-item link="/components/status/stepper" label="Stepper"></mic-sidebar-item>
          <mic-sidebar-item link="/components/status/timeline" label="Timeline"></mic-sidebar-item>
        </mic-sidebar-item>
      </mic-sidebar-item>
      <mic-sidebar-item link="/utilities" icon="code" label="Utilities">
        <mic-sidebar-item link="/utilities/breakpoint" label="Breakpoints"></mic-sidebar-item>
        <mic-sidebar-item link="/utilities/display" label="Display"></mic-sidebar-item>
        <mic-sidebar-item link="/utilities/flexbox-grid" label="Flexbox & grid">
          <mic-sidebar-item link="/utilities/flexbox-grid/flexbox" label="Flexbox"></mic-sidebar-item>
          <mic-sidebar-item link="/utilities/flexbox-grid/grid" label="Grid"></mic-sidebar-item>
          <mic-sidebar-item link="/utilities/flexbox-grid/alignment" label="Alignment"></mic-sidebar-item>
        </mic-sidebar-item>
        <mic-sidebar-item link="/utilities/sizing" label="Sizing"></mic-sidebar-item>
        <mic-sidebar-item link="/utilities/spacing" label="Spacing"></mic-sidebar-item>
        <mic-sidebar-item link="/utilities/elevation" label="Elevations"></mic-sidebar-item>
        <mic-sidebar-item link="/utilities/text" label="Text"> </mic-sidebar-item>
        <mic-sidebar-item link="/utilities/font-size" label="Font Size"></mic-sidebar-item>
        <mic-sidebar-item link="/utilities/fonts" label="Fonts"></mic-sidebar-item>
        <mic-sidebar-item link="/utilities/flag" label="Flags"></mic-sidebar-item>
      </mic-sidebar-item>
      <mic-sidebar-item link="/data-visualization" icon="donut_large" label="Data visualization">
        <mic-sidebar-item link="/data-visualization/charts" label="Charts">
          <mic-sidebar-item link="/data-visualization/charts/library" label="Library"></mic-sidebar-item>
          <mic-sidebar-item link="/data-visualization/charts/overview" label="Overview"></mic-sidebar-item>
          <mic-sidebar-item link="/data-visualization/charts/components" label="Components">
            <mic-sidebar-item link="/data-visualization/charts/components/bar" label="Bar"></mic-sidebar-item>
            <mic-sidebar-item link="/data-visualization/charts/components/bubble" label="Bubble"></mic-sidebar-item>
            <mic-sidebar-item link="/data-visualization/charts/components/donut" label="Donut"></mic-sidebar-item>
            <mic-sidebar-item link="/data-visualization/charts/components/line" label="Line"></mic-sidebar-item>
            <mic-sidebar-item link="/data-visualization/charts/components/mixed" label="Mixed"></mic-sidebar-item>
            <mic-sidebar-item link="/data-visualization/charts/components/pie" label="Pie"></mic-sidebar-item>
            <mic-sidebar-item link="/data-visualization/charts/components/polar" label="Polar"></mic-sidebar-item>
            <mic-sidebar-item link="/data-visualization/charts/components/radar" label="Radar"></mic-sidebar-item>
            <mic-sidebar-item link="/data-visualization/charts/components/scatter" label="Scatter"></mic-sidebar-item>
          </mic-sidebar-item>
          <mic-sidebar-item link="/data-visualization/charts/plugins" label="Plugins">
            <mic-sidebar-item link="/data-visualization/charts/plugins/zoom" label="Zoom"></mic-sidebar-item>
          </mic-sidebar-item>
        </mic-sidebar-item>
        <mic-sidebar-item link="/data-visualization/maps" label="Maps">
          <mic-sidebar-item link="/data-visualization/maps/library" label="Library"></mic-sidebar-item>
          <mic-sidebar-item link="/data-visualization/maps/component" label="Component"></mic-sidebar-item>
        </mic-sidebar-item>
      </mic-sidebar-item>
      <mic-sidebar-item link="/around-tire" icon="tire_repair" label="Around tire">
        <mic-sidebar-item link="/around-tire/introduction" label="Introduction"></mic-sidebar-item>
        <mic-sidebar-item link="/around-tire/library" label="Library"></mic-sidebar-item>
        <mic-sidebar-item link="/around-tire/components" label="Components">
          <mic-sidebar-item link="/around-tire/components/vehicle" label="Vehicle"></mic-sidebar-item>
        </mic-sidebar-item>
      </mic-sidebar-item>
      <mic-sidebar-item link="/templates" icon="dashboard" label="Templates"></mic-sidebar-item>
      <mic-sidebar-spacer></mic-sidebar-spacer>
      <mic-sidebar-item link="/faq" icon="contact_support" label="FAQ"></mic-sidebar-item>
      <mic-sidebar-item link="/contact" icon="alternate_email" label="Contact us"></mic-sidebar-item>
    </mic-sidebar>
  */