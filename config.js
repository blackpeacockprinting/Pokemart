async function init() {
    // Load N3D designs FIRST (before rendering)
    await loadN3DDesigns();
    
    createFloatingBalls();
    
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2000);
    
    document.getElementById('price-standard').textContent = CONFIG.pricing.standard;
    document.getElementById('price-mega').textContent = CONFIG.pricing.mega;
    document.getElementById('price-special').textContent = CONFIG.pricing.special;
    document.getElementById('price-event').textContent = CONFIG.pricing.event;
    
    document.getElementById('section-price-standard').textContent = CONFIG.pricing.standard;
    document.getElementById('section-price-mega').textContent = CONFIG.pricing.mega;
    document.getElementById('section-price-special').textContent = CONFIG.pricing.special;
    document.getElementById('section-price-event').textContent = CONFIG.pricing.event;
    
    createTypeFilters();
    renderProducts();
    initTeamBuilder();
    renderBundles();
    loadCartFromURL();
}
