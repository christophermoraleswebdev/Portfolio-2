// Tab Functionality
let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname) {
      for(tablink of tablinks) {
            tablink.classList.remove('active-link')
      }
      for(tabcontent of tabcontents) {
            tabcontent.classList.remove('active-tab')
      }
      event.currentTarget.classList.add('active-link')
      document.getElementById(tabname).classList.add('active-tab')
}

// Resume Button
const openResume = () => {
      window.open('https://docs.google.com/document/d/1iCUHBRbxb4lBuxGkZ1mORutcVE1NqPiatgZI2MlL0V0/edit?usp=sharing', '_blank');
    }