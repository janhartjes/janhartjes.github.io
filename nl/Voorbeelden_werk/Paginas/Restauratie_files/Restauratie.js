// Created by iWeb 3.0.4 local-build-20121113

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.janhartjes.nl/nl/Voorbeelden_werk/Paginas/Restauratie_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.janhartjes.nl/nl/Voorbeelden_werk/Paginas',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.janhartjes.nl/nl/Voorbeelden_werk/Paginas',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(182,182),new IWSize(182,35),new IWSize(218,232),27,27,0,new IWSize(18,18)),new IWPhotoFrame([IWCreateImage('Restauratie_files/Hardcover_bevel_01.png'),IWCreateImage('Restauratie_files/Hardcover_bevel_02.png'),IWCreateImage('Restauratie_files/Hardcover_bevel_03.png'),IWCreateImage('Restauratie_files/Hardcover_bevel_06.png'),IWCreateImage('Restauratie_files/Hardcover_bevel_09.png'),IWCreateImage('Restauratie_files/Hardcover_bevel_08.png'),IWCreateImage('Restauratie_files/Hardcover_bevel_07.png'),IWCreateImage('Restauratie_files/Hardcover_bevel_04.png')],null,0,0.500000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,17.000000,403.000000,295.000000,403.000000,295.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Restauratie_files/RestauratieMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
