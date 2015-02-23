// Definition lookup function
function SubmitForm() {

    // Erases Table Contents
    var d2 = document.getElementById('table-content');
    d2.innerHTML = " ";

    // Gets the value of input word
    var searchValue = $('#search_val').val().replace(/ /g, '');

    // AJAX call to dict.php
    $.ajax({

        // Call parameters
        url: "dict.php",
        type: "POST",
        data: {'search-term': searchValue},

        // Upon retrieving data successfully
        success: function(data) {

            // Parse the returned JSON data
            data = JSON.parse(data);

            var counter = 0;

            // Iterate through the contents of the returned JSON (contains all word definitions for input word)
            for (var index = 0; index < data.length; ++index) {

                counter += 1;

                // Extracts the searched word from JSON
                var search_word = data[index][0];

                // Extracts the wordtype from JSON
                var search_wordtype = data[index][1];

                // Extracts the definition from JSON
                var search_definition = data[index][2];

                // Gets the location of the output table body
                var d1 = document.getElementById('table-content');

                // Inserts new row to table
                var insert_content = "<tr><td>" + search_word + "</td><td>" + search_wordtype + "</td><td>" + search_definition + "</td></tr>";
                d1.insertAdjacentHTML('beforeend', insert_content);

            // Unhides Table to Show Result
            var showTable = document.getElementById("mastertable");
            showTable.style.visibility = 'visible';

            }

        }
    });

}
