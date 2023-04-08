/* 将静态资源的图片导入vue中 */
const getImageUrl:any = (name:any) => new URL(`../${name}`, import.meta.url).href

export default getImageUrl
