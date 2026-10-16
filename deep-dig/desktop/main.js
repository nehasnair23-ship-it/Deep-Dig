const {app,BrowserWindow}=require('electron');
app.whenReady().then(()=>{const w=new BrowserWindow({width:520,height:900,backgroundColor:'#12100e',autoHideMenuBar:true});w.loadFile('game/index.html')});
app.on('window-all-closed',()=>app.quit());
