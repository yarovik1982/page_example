export const preloader = {
   isPreloader:false,
   getValue(value){
      return value
   },
}
console.log(preloader.getValue(preloader.isPreloader));