function clickEvent( el, category, label, action ){
  $( el ).on('click',function(){
    ga('send', 'event', category, label, action);
  });
};

$(function(){
  /*SOUNDS*/
  clickEvent('.dog', 'clickable', 'sound', 'dog');
  clickEvent('.pig', 'clickable', 'sound', 'pig');
  clickEvent('.fire', 'clickable', 'sound', 'fire');
  clickEvent('.turtle', 'clickable', 'sound', 'turtle');
  clickEvent('.chicken', 'clickable', 'sound', 'chicken');
  clickEvent('.glass', 'clickable', 'sound', 'glass');
  /*SOUNDCLOUDS*/
  clickEvent('.crazelogo', 'clickable', 'sound_cloud_link', 'Craze_Logo');
  clickEvent('.etclogo', 'clickable', 'sound_cloud_link', 'ETC_Logo');
  clickEvent('.apelogo', 'clickable', 'sound_cloud_link', 'Ape_Logo');
  clickEvent('.crnlogo', 'clickable', 'sound_cloud_link', 'CRNKN_Logo');
  clickEvent('.ufologo', 'clickable', 'sound_cloud_link', 'UFO_Logo');
  /*SUICIDE BUNNY LINK*/
  clickEvent('.sblink', 'clickable', 'link_out', 'SB_Link');
  /*CONTEST LINKS*/
  clickEvent('.thuglife', 'clickable', 'contest', 'FanGate');
  clickEvent('.title', 'clickable', 'contest', 'Email_Capture');
  /*TOURDATES*/
  clickEvent('.tourbutton', 'clickable', 'TourDates', 'TourDates');
});
