const images = document.querySelectorAll('.hover-animation');
const newImagePath = 'img/mono-logo.png'; // Calea către imaginea nouă

images.forEach((image) => {
  const originalImagePath = image.src;
  let timeout;

  image.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      replaceImage(image, newImagePath);
    }, 1200);
  });

  image.addEventListener('mouseleave', () => {
    clearTimeout(timeout);
    replaceImage(image, originalImagePath, 200);
  });
});

function replaceImage(element, newPath, fadeDuration = 400) {
  fadeOut(element, fadeDuration, () => {
    element.src = newPath;
    fadeIn(element, fadeDuration);
  });
}

function fadeOut(element, duration, callback) {
  let opacity = 1;
  const intervalTime = 10;
  const steps = duration / intervalTime;
  const opacityStep = 1 / steps;

  const fadeOutInterval = setInterval(() => {
    opacity -= opacityStep;
    element.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(fadeOutInterval);
      element.style.display = 'none';
      callback();
    }
  }, intervalTime);
}

function fadeIn(element, duration) {
  element.style.display = 'block';
  let opacity = 0;
  const intervalTime = 10;
  const steps = duration / intervalTime;
  const opacityStep = 1 / steps;

  const fadeInInterval = setInterval(() => {
    opacity += opacityStep;
    element.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(fadeInInterval);
    }
  }, intervalTime);
}
