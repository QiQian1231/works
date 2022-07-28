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

> Add 11.html 小米商城 sidebar menu。.
