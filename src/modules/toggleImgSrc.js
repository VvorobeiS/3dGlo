const toggleImgSrc = () => {
  const commandPhoto = document.querySelectorAll('.command__photo');
  commandPhoto.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      [e.target.src, e.target.dataset.img] = [e.target.dataset.img, e.target.src];
    });
    item.addEventListener('mouseleave', (e) => {
      [e.target.dataset.img, e.target.src] = [e.target.src, e.target.dataset.img];
    });
  });
};

export default toggleImgSrc;
