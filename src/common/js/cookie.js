export function setCookie(c_name, value, expire) {
  var data= new Date()
  data.setSeconds(date.getSeconds()+expire)
  document.cookie = c_name + "="+escape(value)
}