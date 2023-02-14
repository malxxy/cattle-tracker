async function showLivestock() {
    const response = await fetch('/api/cattle', {
      method: 'POST',
      headers: { 'Cattle': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to show livestock page.');
    }
  }

  async function addLivestock() {
    const response = await fetch('/api/cattle', {
      method: 'POST',
      headers: { 'Cattle:' 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to load add livestock page');
    }
  }
  
// Upon clicking My Livestock, take to My Livestock partial handlebars page
document.querySelector('#my-livestock-btn').addEventListener('click', showLivestock);
// Upon clicking add Livestock, take to add Livestock handlebars page
document.querySelector('add-livestock-btn').addEventListener('click',addLivestock);