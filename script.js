function togglePDF() {
    var pdfViewer = document.getElementById('pdfViewer');
    if (pdfViewer.style.display === 'none') {
        pdfViewer.style.display = 'block';
    } else {
        pdfViewer.style.display = 'none';
    }
}
