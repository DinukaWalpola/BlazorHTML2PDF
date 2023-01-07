//function generatePDF(name, email, phone) {

//    var pdf = new jsPDF({
//        orientation: 'p',
//        unit: 'mm',
//        format: 'a4',
//        putOnlyUsedFonts: true
//    });
//    pdf.text(name, 10, 10);
//    pdf.text(email, 10, 10);
//    pdf.text(phone, 10, 10);
//    // pdf.text("published on APITemplate.io", 20, 30);
//    pdf.addPage();
//    pdf.text(20, 20, 'The second page');
//    pdf.save('jsPDF_2Pages.pdf');

//}


function generatePDF() {
	console.log(document.getElementById('main-container'))
	const element = document.getElementById('main-container');
	var opt = {
		margin: 1,
		filename: 'html2pdf_example.pdf',
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 2 },
		jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
	};
	// Choose the element that our invoice is rendered in.
	html2pdf().set(opt).from(element).save();
}