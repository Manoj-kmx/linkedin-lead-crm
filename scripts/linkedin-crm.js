function updateLeadStatus(rowNumber, status) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
  sheet.getRange(rowNumber, 5).setValue(status);
  sheet.getRange(rowNumber, 6).setValue(new Date());
}

function addNewLead(name, url, company, position) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");

  sheet.appendRow([
    name,
    url,
    company,
    position,
    "New",
    "",
    ""
  ]);
}
