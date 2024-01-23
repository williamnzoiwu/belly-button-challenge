# belly-button-challenge
## Javascript Module 14 Challenge

This code creates an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site, opened from the HTML file.

The sccript first uses the D3 library to read in samples.json from the URL "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json."

It then creates a funtion to make a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual, usig sample_values as the values for the bar chart, otu_ids as the labels, and otu_labels as the hovertext.

It then creates a bubble chart within the function that displays each sample, using otu_ids for the x values and marker colors, sample_values for the y values and marker size, and otu_labels for the text values. Bubble chart also contains a dropdown menu when the user hovers over the bubbles.

The code also creates a gaugee chart within the function to plot the weekly washing frequency of the individual. 

Within the function, also displays the demographic information directly under the interactive button. The charts and demographic information are changed whenever the user selects a different sample.
