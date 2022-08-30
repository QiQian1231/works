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

> Add `11.html` 小米商城 sidebar menu

> Add `12.html` Hover on Video

> Add `13.html` Rocket Animation

> Add `14.html` 3D Navbar

> Add `17.html` Arry Mall PC version

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

> 1. More Items > Integration > Export Scenarios
> 2. Get Screen name from Generic Inquiry page.
> 3. check the box "Make Visible on the UI" to generate the Screen ID on Generic Inquiry page.
> 4. More Items > Integration > Process Export Scenarios
> 5. Click first attach icon to upload export file.
> 6. EditUrl > Synchronization > setup FTP connection.
> 7. sftp://sftp.xxx.com:20/folder
> 8. Go to Export by Scenario, click Prepare & Export.
> 9. Then go to File Synchronization, PROCESS FILE.
