## CSS `contain`

CSS `contain` 属性允许开发者控制元素的内容对布局、样式、绘制、大小测量和其他子元素的影响，从而优化渲染性能。`contain` 属性有多个值，每个值控制不同的方面。`contain: layout` 是其中一个值，用于特定布局的优化。

### `contain: layout`

当使用 `contain: layout` 时，元素被认为是一个独立的布局上下文。它的布局不依赖于外部元素，外部元素的布局也不会受到它的影响。这意味着：

1. **子元素的布局不影响外部**：元素内部的布局变化（如增加或减少子元素）不会触发外部元素的重新布局。
2. **外部布局变化不影响子元素**：外部元素的布局变化（如调整父元素的大小）不会影响这个元素及其子元素的布局。

### 示例

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      contain: layout;
    }
    .child {
      width: 100%;
      height: 100%;
      background-color: lightcoral;
    }
  </style>
  <title>contain: layout</title>
</head>
<body>
  <div class="container">
    <div class="child">I am contained</div>
  </div>
</body>
</html>
```

在这个示例中，`.container` 使用了 `contain: layout`，这意味着 `.child` 的布局不会影响 `.container` 外部的其他元素的布局。

### 使用场景

- **性能优化**：`contain: layout` 可以显著提高页面的渲染性能，特别是在动态内容频繁变化的情况下，因为它减少了重新布局的范围。
- **隔离布局**：当需要确保某个区域的布局独立于外部元素时，可以使用 `contain: layout`。

### 其他 `contain` 值

除了 `contain: layout`，`contain` 属性还有其他值，它们可以单独或组合使用：

- **`contain: size`**：元素的尺寸不受其内容影响，尺寸在布局计算时被认为是固定的。
- **`contain: style`**：元素内部的样式不影响外部元素的样式计算。
- **`contain: paint`**：元素内部的绘制不影响外部的绘制。
- **`contain: content`**：综合了 `layout`、`style` 和 `paint`，完全隔离元素内容。

组合使用示例：

```
css
复制代码
.container {
  contain: layout style paint;
}
```

### 兼容性

虽然 `contain` 属性对性能优化非常有用，但并不是所有浏览器都完全支持。确保在使用前查看浏览器的兼容性情况，以确保不影响用户体验。

### 总结

`contain: layout` 通过隔离元素的布局上下文，优化了渲染性能，减少了不必要的重排和重绘，是一个非常有用的性能优化工具。合理使用 `contain` 属性的不同值，可以进一步优化页面性能并确保元素布局和绘制的独立性。