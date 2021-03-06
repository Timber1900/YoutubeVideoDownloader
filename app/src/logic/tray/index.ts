export const setUpMinimize = () => {
  //@ts-expect-error
  let win = nw.Window.get();
  const menu = new nw.Menu();

  const OpenApp = new nw.MenuItem({
    label: '  WebDL',
    icon: 'webdl.png',
  });

  OpenApp.on('click', () => {
    win.show();
  });

  const separator = new nw.MenuItem({
    type: 'separator',
  });

  const CloseApp = new nw.MenuItem({
    label: '  Close app',
  });

  CloseApp.on('click', () => {
    // forceClose = true;
    win.close(true);
  });

  menu.append(OpenApp);
  menu.append(separator);
  menu.append(CloseApp);

  const tray = new nw.Tray({
    title: 'WebDL',
    tooltip: 'WebDL server is running...',
    icon: 'webdl.png',
    alticon: 'webdl.png',
    iconsAreTemplates: false,
    menu: menu,
  });

  tray.on('click', function (this: any) {
    console.log('click');
    win.show();
  });

  win.on('minimize', function (this: any) {
    this.hide();
  });
};
