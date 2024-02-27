const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (preinstall) => {
    addEventListener(preinstall, listener)
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => { const btn = document.querySelector('.btn');
btn.addEventListener('click', clickHandler);
    function clickHandler(event) {
    console.log('Button Clicked');
 }});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstall', (event) => {
    addEventListener('appinstall', installHandler)
    console.log('Application installed');
});
