let images = document.querySelector("img")

const cb = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let image = entry.target
            image.src = image.dataset.src
            image.removeAttribute('data-src')
            observer.unobserve(image)
        }
    })
}
const observer = new IntersectionObserver(cb)
images.forEach((image) => observer.observe(image))