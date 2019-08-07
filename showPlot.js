function showPlot(tableElement, plotElement, linkElement) {
    var table = document.getElementById(tableElement);
    var plot = document.getElementById(plotElement);
    var link = document.getElementById(linkElement);    
    if (table.style.display === "none") {
        table.style.display = "block";
        plot.style.display = "none";
        link.textContent="View as a graph"; 
    } else {
        table.style.display = "none";
        plot.style.display = "block";
        link.textContent="View as a table";       
    }
}