### Overview

Banners communicate important information, along with the context of that information.

```jsx noeditor
<div style={{ marginBottom: "2rem", border: "1px solid #e6e6e6", padding: "1rem 1rem 0", display: "flex", flexWrap: "wrap" }}>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner status="info">Info Banner</Banner>
  </div>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner status="success">Success Banner</Banner>
  </div>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner status="warning">Warning Banner</Banner>
  </div>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner status="danger">Danger Banner</Banner>
  </div>
</div>
```

You can have plain banners with no icons.

```jsx noeditor
<div style={{ marginBottom: "2rem", border: "1px solid #e6e6e6", padding: "1rem 1rem 0", display: "flex", flexWrap: "wrap" }}>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner plain status="info">Info Banner</Banner>
  </div>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner plain status="success">Success Banner</Banner>
  </div>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner plain status="warning">Warning Banner</Banner>
  </div>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner plain status="danger">Danger Banner</Banner>
  </div>
</div>
```

You can have alternate banners with a white background.

```jsx noeditor
<div style={{ marginBottom: "2rem", border: "1px solid #e6e6e6", padding: "1rem 1rem 0", display: "flex", flexWrap: "wrap" }}>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner alternate status="info">Info Banner</Banner>
  </div>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner alternate status="success">Success Banner</Banner>
  </div>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner alternate status="warning">Warning Banner</Banner>
  </div>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner alternate status="danger">Danger Banner</Banner>
  </div>
</div>
```

You can also add actions to banners (plain or icon’d).

```jsx noeditor
<div style={{ marginBottom: "2rem", border: "1px solid #e6e6e6", padding: "1rem 1rem 0", display: "flex", flexWrap: "wrap" }}>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner
      plain
      status="info"
      action={{
        label: "Clear selection",
        onClick: () => console.log("clicked")
      }}
    >
      19 products selected
    </Banner>
  </div>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner
      status="success"
      action={{
        label: "View product",
        onClick: () => console.log("clicked")
      }}
    >
      Product created
    </Banner>
  </div>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner
      plain
      status="warning"
      action={{
        label: "Refresh",
        onClick: () => console.log("clicked")
      }}
    >
      No internet connection
    </Banner>
  </div>
  <div style={{marginRight: "1rem", marginBottom: "1rem"}}>
    <Banner
      status="danger"
      action={{
        label: "Go back",
        onClick: () => console.log("clicked")
      }}
    >
      Something went wrong
    </Banner>
  </div>
</div>
```