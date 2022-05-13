export const API_ROUTE_CASES = {
  ENDPOINT: 'cases',
  GET_ALL: 'cases/indexList',
  UPDATE: 'cases/update',
  ADD: 'cases/add',
  DELETE: 'cases/delete',
  EXPORT: 'cases/export',
  SEARCH: 'cases/searchSpecific',
};

export const API_ROUTE_CASES_FOLLOW_UP = {
  ENDPOINT: 'cases',
  GET_ALL: 'cases/followUp',
  EXPORT: 'cases-follow-up/export',
};

export const API_ROUTE_CONTACTS_FOLLOW_UP = {
  ENDPOINT: 'contacts',
  GET_ALL: 'contacts/followUp',
  EXPORT: 'contacts/followUp/export',
};

export const API_ROUTE_PERSONS = {
  ENDPOINT: 'persons',
  GET_ALL: 'persons/indexList',
  UPDATE: 'persons/update',
  ADD: 'persons/push',
  DELETE: 'persons/delete',
  MATCH: 'persons/similarPersons',
  SET_MISSING_COORDINATES: 'persons/setMissingCoordinates',
};

export const API_ROUTE_PATHOGEN_TESTS = {
  ENDPOINT: 'pathogentests',
  GET_ALL: 'pathogentests/indexList',
  UPDATE: 'pathogentests/update',
  ADD: 'pathogentests/add',
  DELETE: 'pathogentests/delete',
  GET_BY_SAMPLE_ID: 'pathogentests/query/samples',
};

export const API_ROUTE_ADDITIONAL_TESTS = {
  ENDPOINT: 'additionaltests',
  GET_ALL: 'additionaltests/indexList',
  UPDATE: 'additionaltests/update',
  ADD: 'additionaltests/add',
  DELETE: 'additionaltests/delete',
  GET_BY_SAMPLE_ID: 'additionaltests/query/samples', // toDo: hardcoded endpoint. Needs backend
};

export const API_ROUTE_PRESCRIPTIONS = {
  ENDPOINT: 'prescriptions',
  GET_ALL: 'prescriptions/indexList',
  UPDATE: 'prescriptions/update',
  ADD: 'prescriptions/add',
  DELETE: 'prescriptions/delete',
};

export const API_ROUTE_TREATMENTS = {
  ENDPOINT: 'treatments',
  GET_ALL: 'treatments/indexList',
  UPDATE: 'treatments/update',
  ADD: 'treatments/add',
  DELETE: 'treatments/delete',
};

export const API_ROUTE_TASKS = {
  ENDPOINT: 'tasks',
  GET_ALL: 'tasks/indexList',
  UPDATE: 'tasks/push',
  ADD: 'tasks/push',
  DELETE: 'tasks/delete',
  EXPORT: 'tasks/export',
};

export const API_ROUTE_EVENTS = {
  ENDPOINT: 'events',
  GET_ALL: 'events/indexList',
  UPDATE: 'events/update',
  ADD: 'events/add',
  DELETE: 'events/delete',
  EXPORT: 'events/export',
  SEARCH: 'events/searchSpecific',
};

export const API_ROUTE_EVENT_ACTIONS = {
  ENDPOINT: 'actions',
  GET_ALL: 'actions/indexEventActionList',
  UPDATE: 'actions/push',
  ADD: 'actions/push',
  DELETE: 'actions/delete',
  EXPORT: 'actions/export',
};

export const API_ROUTE_SAMPLES = {
  ENDPOINT: 'samples',
  GET_ALL: 'samples/indexList',
  UPDATE: 'samples/update',
  ADD: 'samples/add',
  DELETE: 'samples/delete',
  EXPORT: 'samples/export',
};

export const API_ROUTE_TRAVEL_ENTRIES = {
  ENDPOINT: 'travelentries',
  GET_ALL: 'travelentries/indexList',
  UPDATE: 'travelentries/update',
  ADD: 'travelentries/add',
  DELETE: 'travelentries/delete',
};

export const API_ROUTE_CONTACTS = {
  ENDPOINT: 'contacts',
  GET_ALL: 'contacts/indexList',
  UPDATE: 'contacts/push',
  ADD: 'contacts/push',
  DELETE: 'contacts/delete',
  EXPORT: 'contacts/export',
};

export const API_ROUTE_CLINICAL_VISITS = {
  ENDPOINT: 'clinicalvisits',
  GET_ALL: 'clinicalvisits/indexList',
  UPDATE: 'clinicalvisits/update',
};

export const API_ROUTE_VISITS = {
  ENDPOINT: 'visits',
  GET_ALL: 'visits/indexList',
  UPDATE: 'visits/update',
};

export const API_ROUTE_USERS = {
  ENDPOINT: 'users',
  GET_ALL: 'users/indexList',
  UPDATE: 'users/update',
  ADD: 'users/add',
  DELETE: 'users/delete',
  EXPORT: 'users/export',
  ENABLE: 'users/enable',
  DISABLE: 'users/disable',
};

// toDO: hardcoded endpoint. Needs backend
export const API_ROUTE_EVENT_PARTICIPANTS = {
  ENDPOINT: 'eventparticipants',
  GET_ALL: 'eventparticipants/indexList',
  UPDATE: 'eventparticipants/update',
  ADD: 'eventparticipants/add',
  DELETE: 'eventparticipants/delete',
  EXPORT: 'eventparticipants/export',
};

// toDo: hardcoded endpoint. Needs backend
export const API_ROUTE_ACTIONS = {
  ENDPOINT: 'actions',
  GET_ALL: 'actions/indexList',
  UPDATE: 'actions/update',
  ADD: 'actions/add',
  DELETE: 'actions/delete',
};

export const API_ROUTE_DASHBOARD_NEW_CASES = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/newCases',
};

export const API_ROUTE_DASHBOARD_NEW_EVENTS = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/newEvents',
};

export const API_ROUTE_DASHBOARD_TEST_RESULTS = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/testResults',
};

export const API_ROUTE_DASHBOARD_CONTACTS = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/contacts',
};

export const API_ROUTE_DASHBOARD_CONTACT_STATS = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/contactStats',
};

export const API_ROUTE_DASHBOARD_UNDER_FOLLOW_UP = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/underFollowUp',
};

export const API_ROUTE_DASHBOARD_VISITS = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/visits',
};

export const API_ROUTE_DASHBOARD_STOPPED_FOLLOW_UP = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/stoppedFollowUp',
};

export const API_ROUTE_COUNTRIES = {
  ENDPOINT: 'countries',
  GET_ALL: 'countries/indexList',
  UPDATE: 'countries/push',
  ADD: 'countries/push',
  DELETE: 'countries/delete',
  EXPORT: 'countries/export',
  ARCHIVE: 'countries/archive',
  DEARCHIVE: 'countries/dearchive',
};

export const API_ROUTE_REGIONS = {
  ENDPOINT: 'regions',
  GET_ALL: 'regions/indexList',
  UPDATE: 'regions/push',
  ADD: 'regions/push',
  DELETE: 'regions/delete',
  EXPORT: 'regions/export',
  ARCHIVE: 'regions/archive',
  DEARCHIVE: 'regions/dearchive',
};

export const API_ROUTE_DISTRICTS = {
  ENDPOINT: 'districts',
  GET_ALL: 'districts/indexList',
  UPDATE: 'districts/push',
  ADD: 'districts/push',
  DELETE: 'districts/delete',
  EXPORT: 'districts/export',
  ARCHIVE: 'districts/archive',
  DEARCHIVE: 'districts/dearchive',
};

export const API_ROUTE_COMMUNITIES = {
  ENDPOINT: 'communities',
  GET_ALL: 'communities/indexList',
  UPDATE: 'communities/push',
  ADD: 'communities/push',
  DELETE: 'communities/delete',
  EXPORT: 'communities/export',
  ARCHIVE: 'communities/archive',
  DEARCHIVE: 'communities/dearchive',
};

export const API_ROUTE_CONTINENTNS = {
  ENDPOINT: 'continents',
  GET_ALL: 'continents/indexList',
  UPDATE: 'continents/push',
  ADD: 'continents/push',
  DELETE: 'continents/delete',
  EXPORT: 'continents/export',
  ARCHIVE: 'continents/archive',
  DEARCHIVE: 'continents/dearchive',
};

export const API_ROUTE_ENTRY_POINTS = {
  ENDPOINT: 'pointsofentry',
  GET_ALL: 'pointsofentry/indexList',
  UPDATE: 'pointsofentry/push',
  ADD: 'pointsofentry/push',
  DELETE: 'pointsofentry/delete',
  EXPORT: 'pointsofentry/export',
  ARCHIVE: 'pointsofentry/archive',
  DEARCHIVE: 'pointsofentry/dearchive',
};

export const API_ROUTE_SUBCONTINENTNS = {
  ENDPOINT: 'subcontinents',
  GET_ALL: 'subcontinents/indexList',
  UPDATE: 'subcontinents/push',
  ADD: 'subcontinents/push',
  DELETE: 'subcontinents/delete',
  EXPORT: 'subcontinents/export',
  ARCHIVE: 'subcontinents/archive',
  DEARCHIVE: 'subcontinents/dearchive',
};

export const API_ROUTE_DOCUMENT_TEMPLATES = {
  ENDPOINT: 'documenttemplates',
  GET_ALL: 'documenttemplates/indexList',
  UPDATE: 'documenttemplates/push',
  ADD: 'documenttemplates/push',
  DELETE: 'documenttemplates/delete',
};

export const API_ROUTE_LINSTINGS = {
  ENDPOINT: 'lineListing',
  GET_ALL: 'lineListing/indexList',
  UPDATE: 'lineListing/push',
  ADD: 'lineListing/push',
  DELETE: 'lineListing/delete',
};

export const API_ROUTE_FACILITIES = {
  ENDPOINT: 'facilities',
  GET_ALL: 'facilities/indexList',
  UPDATE: 'facilities/pushListing',
  ADD: 'facilities/push',
  DELETE: 'facilities/delete',
  EXPORT: 'facilities/export',
  ARCHIVE: 'facilities/archive',
  DEARCHIVE: 'facilities/dearchive',
};

export const API_ROUTE_OUTBREAKS = {
  ENDPOINT: 'outbreaks',
  GET_ALL: 'outbreaks/indexList',
  UPDATE: 'outbreaks/push',
  ADD: 'outbreaks/push',
  DELETE: 'outbreaks/delete',
};

export const API_ROUTE_EVENT_GROUPS = {
  ENDPOINT: 'eventGroups',
  GET_ALL: 'eventGroups/indexList',
  UPDATE: 'eventGroups/push',
  ADD: 'eventGroups/push',
  DELETE: 'eventGroups/delete',
  EXPORT: 'eventGroups/export',
};

export const API_ROUTE_EPI_DATA_CASE_CLASSIFICATION = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/epiCurveDataPerCaseClassification',
};

export const API_ROUTE_EPI_DATA_PRESENT_CONDITION = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/epiCurveDataPerPresentCondition',
};

export const API_ROUTE_EPI_DATA_FOLLOW_UP_STATUS = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/epiCurveDataPerFollowUpStatus',
};

export const API_ROUTE_EPI_DATA_CONTACT_CLASSIFICATION = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/epiCurveDataPerContactClassification',
};

export const API_ROUTE_EPI_DATA_FOLLOW_UP_UNTIL = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/epiCurveDataPerFollowUpUntil',
};

export const API_ROUTE_DISEASE_BURDEN = {
  ENDPOINT: 'dashboard',
  GET_ALL: 'dashboard/diseaseBurden',
};

export const API_ROUTE_IMMUNIZATIONS = {
  ENDPOINT: 'immunizations',
  GET_ALL: 'immunizations/indexList',
  UPDATE: 'immunizations/push',
  ADD: 'immunizations/push',
  DELETE: 'immunizations/delete',
};

export const API_ROUTE_AGGREGATE_REPORTS = {
  ENDPOINT: 'aggregateReports',
  GET_ALL: 'aggregateReports/indexList',
  UPDATE: 'aggregateReports/push',
  ADD: 'aggregateReports/push',
  DELETE: 'aggregateReports/delete',
};

export const API_ROUTE_VACCINATIONS = {
  ENDPOINT: 'vaccinations',
  GET_ALL: 'vaccinations/indexList',
  UPDATE: 'vaccinations/push',
  ADD: 'vaccinations/push',
  DELETE: 'vaccinations/delete',
};

export const API_ROUTE_DISEASES = {
  ENDPOINT: 'diseases',
  GET_ALL: 'diseases/indexList',
  UPDATE: 'diseases/push',
  ADD: 'diseases/push',
  DELETE: 'diseases/delete',
};

export const API_ROUTE_WEEKLY_REPORTS = {
  ENDPOINT: 'weeklyReports',
  GET_ALL: 'weeklyReports/indexList',
  UPDATE: 'weeklyReports/push',
  ADD: 'weeklyReports/push',
  DELETE: 'weeklyReports/delete',
};

export const API_ROUTE_WEEKLY_REPORTS_OFFICER_SUMMARY = {
  ENDPOINT: 'weeklyReportsOfficerSummary',
  GET_ALL: 'weeklyReportsOfficerSummary/indexList',
  UPDATE: 'weeklyReportsOfficerSummary/push',
  ADD: 'weeklyReportsOfficerSummary/push',
  DELETE: 'weeklyReportsOfficerSummary/delete',
};

export const API_ROUTE_WEEKLY_REPORTS_REGION_SUMMARY = {
  ENDPOINT: 'weeklyReportsRegionSummary',
  GET_ALL: 'weeklyReportsRegionSummary/indexList',
  UPDATE: 'weeklyReportsRegionSummary/push',
  ADD: 'weeklyReportsRegionSummary/push',
  DELETE: 'weeklyReportsRegionSummary/delete',
};

export const API_ROUTE_SHARE_REQUESTS = {
  ENDPOINT: 'shareRequests',
  GET_ALL: 'shareRequests/indexList',
  UPDATE: 'shareRequests/push',
  ADD: 'shareRequests/push',
  DELETE: 'shareRequests/delete',
};

export const API_ROUTE_LAB_MESSAGES = {
  ENDPOINT: 'labMessage',
  GET_ALL: 'labMessage/indexList',
  UPDATE: 'labMessage/push',
  ADD: 'labMessage/push',
  DELETE: 'labMessage/delete',
};

export const API_ROUTE_IMPORT_EXPORT = {
  ENDPOINT: 'export',
  GET_ALL: 'export/indexList',
  UPDATE: 'export/push',
  ADD: 'export/push',
  DELETE: 'export/delete',
};

export const API_ROUTE_MERGE_DUPLICATES = {
  ENDPOINT: 'mergeDuplicates',
  GET_ALL: 'mergeDuplicates/indexList',
  UPDATE: 'mergeDuplicates/update',
  ADD: 'mergeDuplicates/add',
  DELETE: 'mergeDuplicates/delete',
};

export const API_ROUTE_MERGE_DUPLICATES_CONTACT = {
  ENDPOINT: 'mergeDuplicatesContact',
  GET_ALL: 'mergeDuplicatesContact/indexList',
  UPDATE: 'mergeDuplicatesContact/update',
  ADD: 'mergeDuplicatesContact/add',
  DELETE: 'mergeDuplicatesContact/delete',
};

export const API_ROUTE_POPULATION = {
  EXPORT: 'population/export',
};
