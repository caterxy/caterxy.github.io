 /*  输出浏览器信息  */
 function BrowserType () {
      var userAgent=navigator.userAgent;
      if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1) {
        return "Chrome";
      } 
      else if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE")){
        return "IE";
      }
      else if(userAgent.indexOf("rv:11") > -1 && userAgent.indexOf("Trident")){
        return "IE";
      }
      else{
        return "other";
      };
  } 