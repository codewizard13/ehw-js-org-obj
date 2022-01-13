/*
Filename: ehw_org_obj.js

CREATED BY: Eric L. Hepperle
Date Created: 2022-01-13
Version: 1.00

Purpose: Store Eric's online website info as a JSON/JavaScript OBJECT

*/

const org = {
    vars: {},
    websites: {
       erichepperle: {
          site_abbrev: "EHW",
          site_name: "erichepperle.com",
          site_pupose: "Eric's personal website",
          get_full_name: function () { return "https://" + this.site_name},
       },
       erichepperledesigns: {
          site_abbrev: "EHDS",
          site_name: "erichepperledesigns.com",
          site_purpose: "Eric's business website for freelance design & software projects",
          site_descr: null,
          get_full_name: function () { return "https://" + this.site_name},
       },
       organicharvestm: {
          site_abbrev: "OHM",
          site_name: "organicharvestm.org",
          site_pupose: "Eric's personal Christian ministry websites",
          site_descr: "",
          get_full_name: function () { return "https://" + this.site_name},         
       },
    }
 }