
import cookie from "cookie"

export const  convertHoursFromDecimal = (decimalHours) =>{
    var hours = Math.floor((decimalHours / (60 * 60)));
    decimalHours = decimalHours - (hours * 60 * 60);
    var minutes = Math.floor((decimalHours / 60));
    decimalHours = decimalHours - (minutes * 60);
    var seconds = Math.round(decimalHours);
    if(hours < 10)
    {
        hours = "0" + hours;
    }
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if(seconds < 10)
    {
        seconds = "0" + seconds;
    }
    return("" + hours + ":" + minutes + ":" + seconds);

}
export const filterCourses = (allCourses) =>{
    const onlineArr = []
    const offlineArr = []
    const pathsArr = []

    allCourses.forEach(element => {
        switch(element.courseTypeId){          
            case 1:{
                offlineArr.push(element)
                break
            }
            case 3:{
                onlineArr.push(element)
                break
            }
            case 4:{
                pathsArr.push(element)
                break
            }
        }  
    });
    return { onlineCourses : onlineArr,offlineCourses:offlineArr,paths:pathsArr }
}
export const getFilterCourses  = ( allCourses,typeId = 3) =>{
   const filteredData = allCourses.filter((item)=>item.courseTypeId === typeId)
   return filteredData
}
export const TypeId = {
    offline_courses : 1,
    online_courses :3,
}

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}