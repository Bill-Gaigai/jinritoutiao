// 移动端适配：不同的屏幕大小下，内容自适应：
// 1、下载包：下载amfe-flexible
// 2、在main.js中引入：import "amfe-flexible"
// 3、npm i postcss postcss-pxtorem@5.1.1
// 4、根目录下创建postcss.config.js文件
// 5、对postcss进行设置：

module.exports = {
    plugins: {
        'postcss-pxtorem': {
            // 能够把所有元素的px单位转成Rem
            // rootValue: 转换px的基准值。
            // 编码时, 一个元素宽是75px，则换成rem之后就是2rem
            rootValue: 37.5,
            propList: ['*']
        }
    }
}