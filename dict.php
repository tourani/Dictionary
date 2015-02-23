<?php

// Get Registration Form Fields:
$search_term = $_POST['search-term'];

// Stores Data for All Definitions (This Gets Returned at the End):
$masterArray = array();

// Create Connection to Database:


$connection = mysqli_connect("localhost", "BigWords", "Rconfusing", "dictionary");
// Connection Error Handling:
if ($connection->connect_error) {
    die("Could not connect to Database!");
}

// Definition Lookup:
$sql_query = "SELECT * FROM entries"; // Selects All from Table 'entries'
$result = mysqli_query($connection, $sql_query);
while ($row = mysqli_fetch_assoc($result)) {

    // If the Row Contains the Word that is Being Searched, Grab its Data,
    // Store it into an Array, and Append that Array to the Master Array
    if (strtoupper($search_term) == strtoupper($row['word'])) {
        $search_wordtype = $row['wordtype'];
        $search_definition = $row['definition'];
        $wordArray = array($search_term, $search_wordtype, $search_definition);
        array_push($masterArray, $wordArray);
    }

}

echo json_encode($masterArray);
