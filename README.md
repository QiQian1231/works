# Backup Notes

## Redirect THC WordPress Site

> Self hosted site, access the WP-admin by [Dashboard](https://thehighculture.resultco.com/wp-admin/)

## THC Shopify

### Add word "OR LESS" next to each price.

> Modified the `product-template.liquid` file

```
{{ current_variant.price | money }} OR LESS
```

> Modified the `product-grid-item.liquid` file

```
{{ 'products.general.from_text_html' | t: price: price }} OR LESS
{{ product.price | money }} OR LESS
```

## 日常网页项目和总结

### 项目列表

> Add `11.html` 小米商城 sidebar menu

> Add `12.html` Hover on Video

> Add `13.html` Rocket Animation

> Add `14.html` 3D Navbar

> Add `17.html` Arry Mall PC version

> Add `19_swiper` 插件

> Add `20_ratingStar` JS 现实评分

> Add `34-MobileApp` 手机端网页，基于 750px 设计图

> Add `35-MobileApp` 手机端网页，基于 750px 设计图，可切换成 rem 自适应响应式。

> Add `38-gridResponsivePage` 多端响应式网页，基于 1920 大屏设计图。自定义 grid 布局。

### 项目总结

### `padding-bottom`可继承父元素宽作为自身高，可实现正方形效果

```
<!-- img in .item, set position:absolute; object-fit:cover -->

<style>
    .box {
        width: 200px;
        height: 100px;
        background-color: green;
    }
    .item {
        width: 50%;
        /* padding-bottom: 100%; 继承100% width 作为自身的height  */
        padding-bottom: 100%;
        background-color: khaki;
    }
</style>
<body>
    <div class="box">
        <div class="item"></div>
    </div>
</body>
```

## nginx 搭建服务器，解析域名

> `cd /` back to root

> `ps -ef | grep nginx` check process

> `ps -C nginx -o pid` check pid

> `rm -rf fileName` remove a file

## Connect Acumatica to FTP site

### Create an export scenario

> 1. Create Data Providers - Per GI - More Items > Integration > Data Provider
> 1. More Items > Integration > Export Scenarios
> 1. Get Screen name from Generic Inquiry page.
> 1. check the box "Make Visible on the UI" to generate the Screen ID on Generic Inquiry page.
> 1. More Items > Integration > Process Export Scenarios
> 1. Click first attach icon to upload export file.
> 1. EditUrl > Synchronization > setup FTP connection.
> 1. sftp://sftp.xxx.com:20/folder
> 1. Go to Export by Scenario, click Prepare & Export.
> 1. Then go to File Synchronization, PROCESS FILE.

## git setup

### manage git account on windows PC

> 1. Control Panel
> 1. User Accounts
> 1. Manage your credentials
> 1. Windows Credentials
> 1. git:https://github.com
