const projects = {
  project1: {
    title: 'Project Name goes here',
    img: './images/card-one.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    stack: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    live: '#',
    source: '#',
  },
  project2: {
    title: 'Project Name goes here',
    img: './images/card-two.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    stack: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    live: '#',
    source: '#',
  },
  project3: {
    title: 'Project Name goes here',
    img: './images/card-three.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    stack: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    live: '#',
    source: '#',
  },
  project4: {
    title: 'Project Name goes here',
    img: './images/card-four.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    stack: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    live: '#',
    source: '#',
  },
  project5: {
    title: 'Project Name goes here',
    img: './images/card-five.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    stack: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    live: '#',
    source: '#',
  },
  project6: {
    title: 'Project Name goes here',
    img: './images/card-six.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    stack: ['HTML/CSS', 'Ruby on rails', 'JavaScript'],
    live: '#',
    source: '#',
  },
};

const btns = document.querySelectorAll('.btn');
btns.forEach((b) => {
  b.addEventListener('click', () => {
    const parent = b.parentNode;
    const div = document.createElement('div');
    div.className = 'popup';
    div.innerHTML = `<div class="modalbox">
        <img id="cross" src="./images/ic_cross.svg" alt="ic_cross">
        <p>${projects[b.id].title}</p>
          <button class="modal-links" >${projects[b.id].stack[0]}</button>
          <button class="modal-links" >${projects[b.id].stack[1]}</button>
          <button class="modal-links" >${projects[b.id].stack[2]}</button>
       <div class="modalimage"></div>
        <p class="modal-text">${projects[b.id].description}</p>
      <div class="modal-btn">
                <button type="button" onclick="location.href='${projects[b.id].live}';" class="live-btn link-btn">
                  <p>See live</p>
                </button>
                <button type="button" onclick="location.href='${projects[b.id].source}';" class="source-btn link-btn">See Source
                </button>
      </div>
      <div class="prev-nxt-btns-cont">
        <img src="./images//prevProject.svg" alt="">
        <img src="./images//nxtProject.svg" alt="">
      </div>
    </div>`;
    parent.append(div);

    document.getElementById('cross').addEventListener('click', () => {
      parent.removeChild(div);
    });
  });
});
