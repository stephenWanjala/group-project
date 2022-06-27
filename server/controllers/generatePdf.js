var PdfTable = require('voilab-pdf-table'),
    PdfDocument = require('pdfkit');

module.exports = {
    create: function () {
        // create a PDF from PDFKit, and a table from PDFTable
        var pdf = new PdfDocument({
                autoFirstPage: false
            }),
            table = new PdfTable(pdf, {
                bottomMargin: 30
            });

        table
            // add some plugins (here, a 'fit-to-width' for a column)
            .addPlugin(new (require('voilab-pdf-table/plugins/fitcolumn'))({
                column: 'day'
            }))
            // set defaults to your columns
            .setColumnsDefaults({
                headerBorder: 'B',
                align: 'right'
            })
            // add table columns
            .addColumns([
                {
                    id: 'day',
                    header: 'Day',
                    align: 'left',
                    width: 50,
                    border: 'B'
                },
                {
                    id: 'Preiod1',
                    header: 'Morning\n(7-9)',
                    width: 50,
                    border: 'B'
                },
                {
                    id: 'Period2',
                    header: 'Midday\n(9-11)',
                    width: 40,
                    align: 'center',
                    border: 'B'


                },
                {
                    id: 'Period3',
                    header: 'Evening\n(11-13)',
                    width: 70,
                    renderer: function (tb, data) {
                        return 'CHF ' + data.total;
                    }
                }
            ])
            // add events (here, we draw headers on each new page)
            .onPageAdded(function (tb) {
                tb.addHeader();
            });

        // if no page already exists in your PDF, do not forget to add one
        pdf.addPage();

        // draw content, by passing data to the addBody method
        table.addBody([
            {day: 'Monday', Period1: 1, price: 20.10, total: 20.10},
            {day: 'Tuesday', Period2: 4, price: 4.00, total: 16.00},
            {day: 'Wednesday', Period3: 2, price: 17.85, total: 35.70}
        ]);

        return pdf;
    }
};