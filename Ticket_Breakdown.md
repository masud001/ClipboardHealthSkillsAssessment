# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

-   Data is saved in the database in the Facilities, Agents, and Shifts tables
-   A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
-   A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1: Add custom Agent IDs for Facilities.

# Acceptance Criteria:

The database schema is updated to include a new field called "custom_id" in the Agents table.
Facilities can save and update custom IDs for each Agent they work with.
The existing functionality of retrieving Shifts by Facility is not affected by this update.
The custom ID is used in the report generation process instead of the internal database ID.

# Effort Estimate: 4 hours

# Implementation Details:

Modify the Agents table in the database schema to include a new column called "custom_id" (datatype: varchar).
Implement an API endpoint or user interface for Facilities to save and update custom IDs for Agents.
Update the existing data access layer to include the new "custom_id" field when retrieving Agent information.
Update the report generation process to use the custom ID instead of the internal database ID.

## Ticket 2: Update report generation process

# Acceptance Criteria:

The report generation process is modified to retrieve the custom ID for each Agent from the database.
The custom ID is used in the report instead of the internal database ID.
The report format remains unchanged and is still generated as a PDF.

# Effort Estimate: 3 hours

# Implementation Details:

Modify the existing report generation code to retrieve the custom ID for each Agent.
Update the report template or generation logic to include the custom ID instead of the internal database ID.
Test the report generation process to ensure that the custom IDs are correctly displayed in the generated reports.

## Ticket 3: Update documentation and user guides

# Acceptance Criteria:

The documentation is updated to include information about the new custom ID feature.
Instructions are provided on how Facilities can save and update custom IDs for Agents.
Examples or screenshots are included to illustrate the process.

# Effort Estimate: 2 hours

# Implementation Details:

Review the existing documentation and user guides.
Add a new section explaining the custom ID feature and its usage.
Provide step-by-step instructions on how Facilities can save and update custom IDs.
Include relevant examples or screenshots to enhance understanding.
Note: Depending on the complexity and existing documentation, this ticket can be merged with Ticket 2 if the changes are minimal.

## Ticket 4 (Optional): Migration script for existing data

# Acceptance Criteria:

Develop a migration script that updates the custom ID field for existing Agents based on the mapping provided by Facilities.
The migration script handles potential errors and inconsistencies in the mapping data.

# Effort Estimate: 4 hours

# Implementation Details:

Analyze the existing data and determine the mapping requirements from Facilities.
Develop a script that iterates over existing Agents and updates their custom ID based on the mapping.
Implement error handling and validation to handle potential issues with the mapping data, such as missing or duplicate mappings.
Test the migration script using a representative data set to ensure accurate and reliable data migration.
Note: This ticket is optional and can be included based on the requirements and complexity of the data migration process.
