<script>
function openLight(src, caption, cat) {
    const lb = document.getElementById('lightbox');
    const imgInLb = document.getElementById('lb-img');
    const capInLb = document.getElementById('lb-caption');
    
    // Set the source of the image tag
    imgInLb.src = src; 
    
    // Set the text content for the caption
    capInLb.textContent = caption;
    
    // Show the lightbox
    lb.classList.add('show');
}

function closeLight() {
    document.getElementById('lightbox').classList.remove('show');
}

function filterGallery(cat, el) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.display = (cat === 'all' || item.dataset.cat === cat) ? 'block' : 'none';
    });
}
</script>